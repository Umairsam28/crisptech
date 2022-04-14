<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\{Product, Brand, Category};
class SiteMapController extends Controller
{
    public function index(){
        $categories = Category::select('slug')->get();
        $brands = Brand::where('is_active',1)->select('slug')->get();
        return response()->json(['categories'=>$categories,'brands'=>$brands]);
    }
    public function products(){
        $products = Product::where('is_active',1)->select('slug')->paginate(20000);
        return response()->json(['products'=>$products]);
    }
}
