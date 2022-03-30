@component('mail::message')
# Hello

New User has subscribed through Newsletter, Click below link to view

@component('mail::button', ['url' => $newsletterurl])
View
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
