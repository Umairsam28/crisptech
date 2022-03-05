<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $appends = ['image_url'];
    protected $with = ['image'];
    protected $fillable = [
        'name','slug','price','description','short_description',
        'is_featured','category_id','discount','brand_id',
        'crawl_url','crawl_site','in_stock','manage_stock','stock_qty',
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
}
