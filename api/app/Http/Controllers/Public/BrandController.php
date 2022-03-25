<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{Brand};
use DB;
class BrandController extends Controller
{
    public function index(Request $request){
        $brands = Brand::orderBy('name','asc');
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
}
