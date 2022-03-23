<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $appends = ['image_url','home_image','detail_image', 'actual_price', 'discount_amount'];
    protected $with = ['image'];
    protected $fillable = [
        'name','slug','price','description','short_description',
        'is_featured','category_id','sale_price','brand_id',
        'crawl_url','crawl_site','in_stock','manage_stock','stock_qty',
        'part_number','condition','sku',
        'is_active','weight','google_feed'
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
    public function wishlist(){
        return $this->belongsTo(Wishlist::class,'id','product_id');
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
        return $this->sale_price;
    }
    public function getDiscountAmountAttribute(){
        return ($this->price-$this->sale_price);
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
