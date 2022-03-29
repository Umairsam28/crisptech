@component('mail::message')
# Hello

New Quote has been received, Click below link to view

@component('mail::button', ['url' => $quoteurl])
View
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
