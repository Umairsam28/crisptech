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
        );
        $order = Order::create($arr);
        $total = 0;
        foreach($request->items as $key=>$value){
            $order->products()->create([
                'product_id'=>$value['product']['id'],
                'quantity'=>$value['quantity'],
                'rowtotal'=>($value['product']['price']*$value['quantity'])
            ]);
            $total+=($value['product']['price']*$value['quantity']);
        }
        $order->total = $total;
        $order->save();
        return response()->json(['data'=>$order]);
    }
}
