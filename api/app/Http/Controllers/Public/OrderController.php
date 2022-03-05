<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{Order};
use App\Http\Requests\OrderRequest;
class OrderController extends Controller
{
    public function index(Order $order){
        $order->load('products','products.product');
        return response()->json(['data'=>$order]);
    }
    public function store(OrderRequest $request){
        $arr = $request->only('billing_first_name','billing_last_name',
        'billing_address',
        'billing_address_2',
        'billing_city',
        'billing_zip',
        'billing_phone',
        'billing_email',
        'billing_notes',
        'shipping_first_name',
        'shipping_last_name',
        'shipping_address',
        'shipping_address_2',
        'shipping_city',
        'shipping_zip',
        'shipping_phone',
        );
        if($request->same_as_billing===true){
            $arr['shipping_first_name'] = $arr['billing_first_name'];
            $arr['shipping_last_name'] = $arr['billing_last_name'];
            $arr['shipping_address'] = $arr['billing_address'];
            $arr['shipping_address_2'] = $arr['billing_address_2'];
            $arr['shipping_city'] = $arr['billing_city'];
            $arr['shipping_zip'] = $arr['billing_zip'];
            $arr['shipping_phone'] = $arr['billing_phone'];
        }
        $order = Order::create($arr);
        foreach($request->items as $key=>$value){
            $order->products()->create([
                'product_id'=>$value['product']['id'],
                'quantity'=>$value['quantity'],
                'rowtotal'=>($value['product']['price']*$value['quantity'])
            ]);
        }
        return response()->json(['data'=>$order]);
    }
}
