@php
    $body = $template->body;
    $body = str_replace(":__user_name", $user_name, $body);
@endphp

{!! $body !!}
