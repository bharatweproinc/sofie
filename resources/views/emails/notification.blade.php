@php
    $body = $template->body;
    $body = str_replace(":__verification_link", $link, $body);
@endphp

{!! $body!!}
