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
            'billing_first_name'=>'required|max:100',
            'billing_last_name'=>'required|max:100',
            'billing_address'=>'required|max:255',
            'billing_address_2'=>'required|max:255',
            'billing_city'=>'required|max:100',
            'billing_zip'=>'required|max:20',
            'billing_phone'=>'required|max:100',
            'billing_email'=>'required|max:255',
            'shipping_first_name'=>'required_if:same_as_billing,false|max:100',
            'shipping_last_name'=>'required_if:same_as_billing,false|max:100',
            'shipping_address'=>'required_if:same_as_billing,false|max:255',
            'shipping_address_2'=>'required_if:same_as_billing,false|max:255',
            'shipping_city'=>'required_if:same_as_billing,false|max:100',
            'shipping_zip'=>'required_if:same_as_billing,false|max:20',
            'shipping_phone'=>'required_if:same_as_billing,false|max:100',
        ];
    }
}
