<?php

namespace App\Http\Controllers;

use App\Http\Requests\OrderRequest;
use App\Http\Resources\OrderResource;
use App\Models\{Order, Product, OrderProduct};
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use App\Repositories\ListRepository;
use Stripe;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    protected $listRep;
    public function __construct(ListRepository $listRep)
    {
        $this->listRep = $listRep;
        $this->listRep->bindModel(Order::class);
    }
    public function index()
    {
        Gate::authorize('viewAny', Order::class);
        $query = $this->listRep->listFilteredQuery(['shipping_email', 'shipping_company', 'shipping_state', 'shipping_country', 'shipping_phone', 'shipping_city', 'shipping_zip', 'shipping_address', 'shipping_first_name', 'shipping_last_name'])
            ->select('orders.*');

        if (isset($_GET['status'])) {
            $query = $query->where('order_status', $_GET['status']);
        }

        if (isset($_GET['perpage']) && intval($_GET['perpage']) > 0) {
            $query = $query->paginate($_GET['perpage']);
        } else {
            $query = $query->get();
        }
        return OrderResource::collection($query);
    }
    public function store(OrderRequest $request)
    {
        Gate::authorize('create', Order::class);
        $arr = $request->only(
            'shipping_email',
            'shipping_notes',
            'shipping_first_name',
            'shipping_last_name',
            'shipping_address',
            'shipping_city',
            'shipping_country',
            'shipping_company',
            'shipping_state',
            'shipping_zip',
            'shipping_phone',
            'billing_first_name',
            'billing_last_name',
            'billing_company',
            'billing_email',
            'billing_phone',
            'billing_country',
            'billing_state',
            'billing_city',
            'billing_zipcode',
            'billing_address',
        );
        $order = Order::create($arr);
        $total = 0;
        foreach ($request->items as $key => $value) {
            $product = Product::find($value['id']);
            $order->products()->create([
                'product_id' => $product->id,
                'quantity' => $value['quantity'],
                'rowtotal' => ($product->actual_price * $value['quantity'])
            ]);
            $total += ($product->actual_price * $value['quantity']);
        }
        $order->subtotal = $total;
        $total_before_discount = ($total);
        $total_with_discount = ($total_before_discount - $request->discount_amount);
        $tax_amount = (($total_with_discount / 100) * $request->tax_percent);
        $order->discount_amount = $request->discount_amount;
        $order->tax_percent = $request->tax_percent;
        $order->tax_amount = $tax_amount;
        $order->total = ($total_with_discount + $tax_amount);
        $order->save();
        return new OrderResource($order);
    }
    public function update(Request $request, Order $order)
    {
        // Gate::authorize('update', $order);
        $arr = $request->only('order_status');
        $order->update($arr);
        // $total = 0;
        // $order->products()->delete();
        // foreach ($request->items as $key => $value) {
        //     $product = Product::find($value['id']);
        //     $order->products()->create([
        //         'product_id' => $product->id,
        //         'quantity' => $value['quantity'],
        //         'rowtotal' => ($product->price * $value['quantity'])
        //     ]);
        //     $total += ($product->price * $value['quantity']);
        // }
        // $order->total = $total;
        // $order->save();
        return new OrderResource($order);
    }
    public function show(Order $order)
    {
        Gate::authorize('view', $order);
        $order->load('products', 'products.product');
        return new OrderResource($order);
    }
    public function destroy(Order $order)
    {
        Gate::authorize('delete', $order);
        $order->products()->delete();
        $order->delete();
        return response()->json(null, 204);
    }
    public function updateQty(OrderProduct $orderProduct, Request $request){
        if(intval($request->quantity)>0){
            $orderProduct->quantity = intval($request->quantity);
            $orderProduct->rowtotal = ($orderProduct->product->actual_price * intval($request->quantity));
            $orderProduct->save();
        }
        //updating calculations on whole order
        $order_products = OrderProduct::where('order_id',$request->order_id)->get();
        $total = 0;
        foreach($order_products as $order_product){
            $total+=$order_product->rowtotal;
        }
        $order = Order::find($request->order_id);
        $order->subtotal = $total;
        $total_before_discount = ($total);
        $total_with_discount = ($total_before_discount - $order->discount_amount);
        $tax_amount = (($total_with_discount / 100) * $order->tax_percent);
        $order->tax_amount = $tax_amount;
        $order->total = ($total_with_discount + $tax_amount);
        $order->save();
        return $order;
    }
    public function stripedetails(Order $order){
        $stripe = new \Stripe\StripeClient(
            env('STRIPE_SK')
        );
        $intent = $stripe->paymentIntents->retrieve($order->stripe_charge_id, []);
        return $intent;
    }
    public function captureOrder(Order $order){
        try {
            $stripe = new \Stripe\StripeClient(
                env('STRIPE_SK')
            );
            // $intent = $stripe->paymentIntents->confirm($order->stripe_charge_id, []);
            $intent = $stripe->paymentIntents->capture($order->stripe_charge_id, []);
            $order->order_status = 2;
            $order->save();
            return response()->json(['status'=>1,'data'=>$intent]);
        }catch(\Stripe\Exception\CardException $e) {
            return response()->json(['status'=>0,'data'=>$e->getError()->message]);
        }catch (\Stripe\Exception\RateLimitException $e) {
            // Too many requests made to the API too quickly
            return response()->json(['status'=>0,'data'=>$e->getError()->message]);
        } catch (\Stripe\Exception\InvalidRequestException $e) {
            // Invalid parameters were supplied to Stripe's API
            return response()->json(['status'=>0,'data'=>$e->getError()->message]);
        } catch (\Stripe\Exception\AuthenticationException $e) {
            // Authentication with Stripe's API failed
            // (maybe you changed API keys recently)
            return response()->json(['status'=>0,'data'=>$e->getError()->message]);
        } catch (\Stripe\Exception\ApiConnectionException $e) {
            // Network communication with Stripe failed
            return response()->json(['status'=>0,'data'=>$e->getError()->message]);
        } catch (\Stripe\Exception\ApiErrorException $e) {
            // Display a very generic error to the user, and maybe send
            // yourself an email
            return response()->json(['status'=>0,'data'=>$e->getError()->message]);
        } catch (\Exception $e) {
            return response()->json(['status'=>0,'data'=>'Something Happened']);
        }
    }
    public function voidOrder(Order $order){
        try {
            $stripe = new \Stripe\StripeClient(
                env('STRIPE_SK')
            );
            $intent = $stripe->paymentIntents->cancel($order->stripe_charge_id, []);
            $order->order_status = 4;
            $order->save();
            return response()->json(['status'=>1,'data'=>$intent]);
        }catch(\Stripe\Exception\CardException $e) {
            return response()->json(['status'=>0,'data'=>$e->getError()->message]);
        }catch (\Stripe\Exception\RateLimitException $e) {
            // Too many requests made to the API too quickly
            return response()->json(['status'=>0,'data'=>$e->getError()->message]);
        } catch (\Stripe\Exception\InvalidRequestException $e) {
            // Invalid parameters were supplied to Stripe's API
            return response()->json(['status'=>0,'data'=>$e->getError()->message]);
        } catch (\Stripe\Exception\AuthenticationException $e) {
            // Authentication with Stripe's API failed
            // (maybe you changed API keys recently)
            return response()->json(['status'=>0,'data'=>$e->getError()->message]);
        } catch (\Stripe\Exception\ApiConnectionException $e) {
            // Network communication with Stripe failed
            return response()->json(['status'=>0,'data'=>$e->getError()->message]);
        } catch (\Stripe\Exception\ApiErrorException $e) {
            // Display a very generic error to the user, and maybe send
            // yourself an email
            return response()->json(['status'=>0,'data'=>$e->getError()->message]);
        } catch (\Exception $e) {
            return response()->json(['status'=>0,'data'=>'Something Happened']);
        }
    }
}
