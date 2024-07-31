<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class MentorDetailsMail extends Mailable
{
    use Queueable, SerializesModels;

    public $data;

    public function __construct($data)
    {
        $this->data = $data;
    }
    public function build()
    {
        return  $this->from(env('MAIL_FROM_ADDRESS'), env('MAIL_FROM_NAME'))->view('emails.detailsMentor')->subject("Connect with your accepted mentor NOW!");
    }

}
