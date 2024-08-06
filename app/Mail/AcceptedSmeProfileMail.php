<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class AcceptedSmeProfileMail extends Mailable
{
    use Queueable, SerializesModels;
    public $data;
    public function __construct($data)
    {
        $this->data = $data;
    }

    public function build()
    {
        return  $this->from(env('MAIL_FROM_ADDRESS'), env('MAIL_FROM_NAME'))->view('emails.acceptedSme')->subject("We are delighted to have you onboard as our Mentee!");
    }

}
