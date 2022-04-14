@component('mail::message')
# Order Received

##### **Dear Mr, {{ucfirst($request->billing_first_name)}} {{ucfirst($request->billing_last_name)}}**,
Thank you for your order.

### Your login credential are given below
@component('mail::table')

| Email    | {{$request->billing_email}}  |
|----------|--------------------------------|
| Password |  {{$request->billing_phone}}             |
@endcomponent

@component('mail::button', ['url' => env('MIX_FRONT_WEBSITE_URL').'/login'])
Login Here
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
