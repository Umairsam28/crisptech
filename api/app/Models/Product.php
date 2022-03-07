<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $appends = ['image_url','actual_price','discount_amount','home_image','detail_image'];
    protected $with = ['image'];
    protected $fillable = [
        'name','slug','price','description','short_description',
        'is_featured','category_id','discount','brand_id',
        'crawl_url','crawl_site','in_sstock','manage_stock','stock_qty',
        'part_number','condition','sku'
    ];
    public function related(){
        return $this->hasMany(RelatedProduct::class);
    }
    public function category(){
        return $this->belongsTo(Category::class);
    }
    public function brand(){
        return $this->belongsTo(Brand::class);
    }
    public function image(){
        return $this->morphOne(File::class,'fileable');
    }
    public function getImageUrlAttribute(){
        if($this->image){
            return $this->image->full_url;
        }else{
            return config('app.noimage');
        }
    }
    public function getActualPriceAttribute(){
        $price = $this->price;
        if($this->discount>0){
            $price = ($price-(($price/100)*$this->discount));
        }
        return $price;
    }
    public function getDiscountAmountAttribute(){
        $discount = 0;
        $price = $this->price;
        if($this->discount>0){
            $discount = (($price/100)*$this->discount);
        }
        return $discount;
    }
    public function getHomeImageAttribute(){
        if($this->image){
            return asset('resized/'.$this->image->id.'-264x264.'.$this->image->extension);
        }
        return $this->image_url;
    }
    public function getDetailImageAttribute(){
        if($this->image){
            return asset('resized/'.$this->image->id.'-344x456.'.$this->image->extension);
        }
        return $this->image_url;
    }
}
