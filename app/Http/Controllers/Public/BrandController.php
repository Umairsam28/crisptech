<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{Brand, Category, Product};
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
        $products = $brand->products()->orderBy($request->sortBy,$request->orderBy)->where('is_active',1);
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
    public function search(Request $request){
        $products = $this->searchQuery($request)->orderBy($request->sortBy,$request->orderBy)->paginate(16);
        $categories = Category::whereIn('id',$this->searchQuery($request)->select('category_id')->distinct()->get()->pluck('category_id'))
        ->withCount('products')->get();
        $brands = Brand::whereIn('id',$this->searchQuery($request)->select('brand_id')->distinct()->get()->pluck('brand_id'))
        ->withCount('products')->get();
        return response()->json(['products'=>$products,'categories'=>$categories, 'brands'=>$brands]);
    }
    public function searchQuery(Request $request){
        $baseQuery = Product::where('is_active',1);
        if($request->q){
            $filter_columns = ['name','slug','part_number','sku'];
            $q = implode('|',explode(' ',trim($request->q)));
            $baseQuery = $baseQuery->Where(
                function($query) use ($filter_columns, $q) {
                foreach($filter_columns as $filter_column){
                    $dataSearch = explode('|',trim($q));
                    foreach($dataSearch as $k=>$dataSearc){
                        if($k==0){
                            $query->OrWhere($filter_column, 'like', "%$dataSearc%");                            
                        }else{
                            $query->Where($filter_column, 'like', "%$dataSearc%");
                        }
                    }
                }
            });
        }
        return $baseQuery;
    }
}
