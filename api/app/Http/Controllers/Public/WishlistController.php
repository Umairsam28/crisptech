<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Http\Requests\WishlistRequest;
use App\Http\Resources\WishlistResource;
use App\Models\User;
use App\Models\Wishlist;
use App\Repositories\FileRepository;
use App\Repositories\ListRepository;
use Illuminate\Http\Request;

class WishlistController extends Controller
{
    protected $listRep;
    protected $file;
    public function __construct(ListRepository $listRep, FileRepository $file)
    {
        $this->listRep = $listRep;
        $this->listRep->bindModel(Wishlist::class);
        $this->file = $file;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $query = $this->listRep->listFilteredQuery(['user_id', 'product_id','users.name','products.name'])
        ->leftJoin('users','users.id','=','wishlists.user_id')
        ->leftJoin('products','products.id','=','wishlists.product_id')
        ->select('wishlists.*')->with('products.image');
            $query=$query->where('user_id', auth('api')->user()->id)->get();
        return WishlistResource::collection($query);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = User::with('wishlist')->find($request->user_id);
        $wishlist = $user->wishlist()->where('product_id', $request->product_id);
        if($wishlist->count() > 0){
                $wishlist->delete();
        }else{
            $wishlist->create($request->only('user_id','product_id','variation_id'));
        }
        return response()->json(true,200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Wishlist $wishlist)
    {
        return response()->json(['wishlist' =>$wishlist]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Wishlist $wishlist)
    {
        $wishlist->delete();
        return response()->json(true,200);
    }
}
