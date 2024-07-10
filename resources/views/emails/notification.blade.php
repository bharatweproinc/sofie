@php
    $body = $template->body;
    $body = str_replace(":__verification_link", '<a href="' . $link . '">' . $link . '</a>', $body);
@endphp

{!! $body !!}
