<?php

namespace App\Mail;

use App\Models\EmailController;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ForgetPasswordEmail extends Mailable
{
    use Queueable, SerializesModels;

    public $template;
    public $new_password;

    public function __construct($new_password)
    {
        $this->template = EmailController::where('name','forget password')->first();
        $this->new_password = $new_password;
    }

    public function build()
    {
        return  $this->from(env('MAIL_FROM_ADDRESS'), env('MAIL_FROM_NAME'))->view('emails.forgetPassword')->subject("Forget Password");
    }
}
