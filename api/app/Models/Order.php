<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $appends = ['created_date_formatted','created_date_formatted_us'];
    protected $fillable = [
        'shipping_email',
        'shipping_notes',
        'shipping_first_name',
        'shipping_last_name',
        'shipping_address',
        'shipping_address_2',
        'shipping_city',
        'shipping_country',
        'shipping_company',
        'shipping_state',
        'shipping_zip',
        'shipping_phone',
        'shipping_notes',
        'subtotal',
        'total',
    ];
    public function products(){
        return $this->hasMany(OrderProduct::class);
    }
    public function getCreatedDateFormattedAttribute(){
        return $this->created_at->diffForHumans();
    }
    public function getCreatedDateFormattedUsAttribute(){
        return date('Y-m-d h:i:s a', strtotime($this->created_at));
    }
}
