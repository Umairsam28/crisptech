<?php

if (!function_exists('get_ids')) {
    function get_ids($collections)
    {
        $array =[];
        foreach($collections as $collection){
            array_push($array, $collection->id);
        }
        return $array;
    }
}
