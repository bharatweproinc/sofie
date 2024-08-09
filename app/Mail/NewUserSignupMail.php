<?php

namespace App\Mail;

use App\Models\EmailController;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class NewUserSignupMail extends Mailable
{
    use Queueable, SerializesModels;
    public $template;
    public $user_type;

    public function __construct($user_type)
    {
        $this->template = EmailController::where('name','new signup')->first();
        $this->user_type = $user_type;
    }
    public function build()
    {
        return  $this->from(env('MAIL_FROM_ADDRESS'), env('MAIL_FROM_NAME'))->view('emails.newUserSignup')->subject("New Request Received");
    }

}
