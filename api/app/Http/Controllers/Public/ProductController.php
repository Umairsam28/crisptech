<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{Product, Category};
class ProductController extends Controller
{
    public function categories(){
        $categories = Category::orderBy('id','desc');
        if(isset($_GET['featured'])){
            $categories = $categories->where('is_featured',1);
        }
        if(isset($_GET['perpage'])&&intval($_GET['perpage'])>0){
            $categories = $categories->paginate(18);
        }else{
            $categories=$categories->get();
        }
        return response()->json(['categories'=>$categories]);
    }
    public static function childs($category, $arr = []){
        $arr[] = $category->id;
        foreach($category->child as $child){
            $arr = self::childs($child, $arr);
        }
        return $arr;
    }
    public function getViaSlug(Request $request){
        $arr =  explode('/',$request->slug);
        $lastSlug = $arr[(count($arr)-1)];
        $products = Product::orderBy('id','desc');
        if($lastSlug!='all'){
            $category = Category::where('slug',$lastSlug)->first();
            $ids = $this->childs($category);
            $products = $products->whereIn('category_id',$ids);
        }
        $products=$products->get();
        return response()->json(['products'=>$products]);
    }
    public function index(){
        $products = Product::orderBy('id','desc');
        if(isset($_GET['featured'])){
            $products = $products->where('is_featured',1);
        }
        if(isset($_GET['category_id'])&&intval($_GET['category_id'])>0){
            $products = $products->where('category_id',intval($_GET['category_id']));
        }
        if(isset($_GET['perpage'])&&intval($_GET['perpage'])>0){
            $products = $products->paginate(18);
        }else{
            $products=$products->get();
        }
        return response()->json(['products'=>$products]);
    }
    public function get($slug){
        $product = Product::where('slug',$slug)->with('related')->firstOrfail();
        $product->load('category','category.parent','category.parent.parent','category.parent.parent.parent');
        return response()->json(['product'=>$product]);
    }
    public function category(Category $category){
        return response()->json(['category'=>$category]);
    }
}
