<?php

namespace App\Http\Requests;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserExemptionRequest extends FormRequest
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
        $id = $request->route('exemption')->id;
        return [
            'state_id'=>['required',Rule::unique('user_exemptions')->where(function($query) use ($request){
                return $query->where('user_id', $request->user_id)->where('state_id', $request->state_id);
            })->ignore($id, 'id')],
            'file'=>'required',
        ];
    }
    public function messages()
    {
        return [
            'state_id.unique' => 'user id and state id already exist',
        ];
    }
}
