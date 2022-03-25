<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{Brand, Category};
use DB;
class BrandController extends Controller
{
    public function index(Request $request){
        $brands = Brand::orderBy('name','asc')->where('is_active',1);
        if(!empty($_GET['filter'])){
            if(strtolower($_GET['filter'])!='all'){
                $brands = $brands->whereRaw("LEFT(name,1) = '".$request->filter."'");
            }
        }
        if(!empty($_GET['q'])){
            $searchTerm = $request->q;
            $brands = $brands->where('name', 'LIKE', "%{$searchTerm}%");
        }
        $brands = $brands->get();
        return response()->json(['brands'=>$brands]);
    }
    public function products(Request $request, $slug){
        $brand = Brand::where('slug',$slug)->firstOrfail();
        $products = $brand->products()->where('is_active',1);
        $filter_for_categories = $brand->products()->where('is_active',1);
        if($request->cat_id){
            $products = $products->where('category_id', $request->cat_id);
            $filter_for_categories = $filter_for_categories->where('category_id', $request->cat_id);
        }
        $categories = Category::whereIn('id',$filter_for_categories->select('category_id')->distinct()->get()->pluck('category_id'))
        ->withCount('products')->get();
        $products = $products->paginate(16);
        return response()->json(['products'=>$products,'categories'=>$categories, 'brand'=>$brand]);
    }
}
