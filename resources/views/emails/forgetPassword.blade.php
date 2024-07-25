@php
    $body = $template->body;
    $body = str_replace(":__new_password", $new_password, $body);
@endphp

{!! $body !!}
