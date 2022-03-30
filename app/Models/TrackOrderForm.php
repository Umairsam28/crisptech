<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TrackOrderForm extends Model
{
    use HasFactory;
    protected $fillable = [
        'name','email','phone','order_id','description','is_new',
    ];
}
