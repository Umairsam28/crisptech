<?php

namespace App\Models;
use App\Models\File;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserExemption extends Model
{
    use HasFactory;
    protected $fillable = ['user_id', 'state_id'];

    public function file(){
        return $this->morphOne(File::class,'fileable');
    }

    public function user(){
        return $this->hasMany(User::class, 'user_id');
    }
}
