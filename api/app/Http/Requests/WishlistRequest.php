<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class WishlistRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(Request $request)
    {

        return [
            'user_id' => 'required',
            'product_id' => Rule::unique('wishlists')->where(function ($query) use ($request){
                return $query->where('user_id',$request->user_id)->where('product_id', $request->product_id);
            }),
        ];
    }

    public function messages()
    {
        return [
                'product_id.unique' => 'Product already exist in wishlist',
      ];
    }
}
