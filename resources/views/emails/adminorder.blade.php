@component('mail::message')
# New Order Received #{{$order->id}}

Click the button below to view invoice

@component('mail::button', ['url' => url('orders/view/'.$order->id)])
View Invoice
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
