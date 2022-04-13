<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\{Product, Brand, Category};
class SiteMapController extends Controller
{
    public function index(){
        $products = [];//Product::where('is_active',1)->select('slug')->get();
        $categories = Category::select('slug')->get();
        $brands = Brand::where('is_active',1)->select('slug')->get();
        return response()->json(['products'=>$products,'categories'=>$categories,'brands'=>$brands]);
    }
}
