@php
    $body = $template->body;
    $body = str_replace(":__user_type", $user_type, $body);
@endphp

{!! $body !!}
