@component('mail::message')
# Hello

New Request for Order tracking has been received, Click the link below to view it

@component('mail::button', ['url' => $trackorderurl])
View
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
