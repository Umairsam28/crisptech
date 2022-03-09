<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OrderRequest extends FormRequest
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
    public function rules()
    {
        return [
            'shipping_email'=>'required|max:255',
            'shipping_notes'=>'max:555',
            'shipping_first_name'=>'required|max:100',
            'shipping_last_name'=>'required|max:100',
            'shipping_address'=>'required|max:255',
            // 'shipping_address_2'=>'required|max:255',
            'shipping_city'=>'required|max:100',
            'shipping_state'=>'required|max:100',
            'shipping_country'=>'required|max:255',
            'shipping_company'=>'required|max:255',
            'shipping_zip'=>'required|max:20',
            'shipping_phone'=>'required|max:100',
        ];
    }
}
