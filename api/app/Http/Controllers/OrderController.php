<?php

namespace App\Http\Controllers;

use App\Http\Requests\OrderRequest;
use App\Http\Resources\OrderResource;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use App\Repositories\ListRepository;

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
        Gate::authorize('viewAny',Order::class);
        $query = $this->listRep->listFilteredQuery(['shipping_email', 'shipping_company','shipping_state','shipping_country','shipping_phone','shipping_city','shipping_zip','shipping_address','shipping_first_name','shipping_last_name'])
        ->select('orders.*');
        if(isset($_GET['perpage'])&&intval($_GET['perpage'])>0){
            $query=$query->paginate($_GET['perpage']);
        }else{
            $query=$query->get();
        }
        return OrderResource::collection($query);
    }
    public function show(Order $order)
    {
        Gate::authorize('view',$order);
        $order->load('products','products.product');
        return new OrderResource($order);
    }
}
