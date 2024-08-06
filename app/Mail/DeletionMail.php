<?php

namespace App\Mail;

use App\Models\EmailController;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class DeletionMail extends Mailable
{
    use Queueable, SerializesModels;
    public $template;
    public $user_name;

    public function __construct($user_name)
    {
        $this->template = EmailController::where('name','deleted profile')->first();
        $this->user_name = $user_name;
    }

    public function build()
    {
        return  $this->from(env('MAIL_FROM_ADDRESS'), env('MAIL_FROM_NAME'))->view('emails.deletionMail')->subject("Fellow Member Account Discontinued");
    }

}
