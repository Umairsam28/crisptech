@component('mail::message')
# Guest User Registered

Dear Mr {{ucfirst($request->billing_first_name)}} {{ucfirst($request->billing_last_name)}},
Thank you for your order.

Your login credential are given below
@component('mail::table')
| Email    | Password       |
|:------:   |:-----------   |
|{{$request->billing_email}}  |{{$request->billing_phone}}  |
@endcomponent

Click on button below for login
@component('mail::button', ['url' => env('MIX_FRONT_WEBSITE_URL').'/login'])
Login Here
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
