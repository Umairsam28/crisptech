<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{Country, State, City};
class CountryCityStateController extends Controller
{
    public function countries(){
        $countries = Country::all();
        return response()->json(['countries'=>$countries]);
    }
    public function states(Country $country){
        $states = $country->states;
        return response()->json(['states'=>$states]);
    }
    public function cities(State $state){
        $cities = $state->cities;
        return response()->json(['cities'=>$cities]);
    }
}
