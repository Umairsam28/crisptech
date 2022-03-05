<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $fillable = [
        'billing_first_name',
        'billing_last_name',
        'billing_address',
        'billing_address_2',
        'billing_city',
        'billing_zip',
        'billing_phone',
        'billing_email',
        'billing_notes',
        'shipping_first_name',
        'shipping_last_name',
        'shipping_address',
        'shipping_address_2',
        'shipping_city',
        'shipping_zip',
        'shipping_phone',
        'shipping_notes',
        'subtotal',
        'total',
    ];
    public function products(){
        return $this->hasMany(OrderProduct::class);
    }
}
