@component('mail::message')
# Order Received

##### **Dear Mr, {{ucfirst($user->first_name)}} {{ucfirst($user->last_name)}}**,
Thank you for your order.

### Your login credential are given below
@component('mail::table')

| Email    | {{$user->email}}  |
|----------|--------------------------------|
| Password |  {{$user->phone}}             |
@endcomponent

@component('mail::button', ['url' => env('MIX_FRONT_WEBSITE_URL').'/login'])
Login Here
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
