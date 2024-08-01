<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use App\Models\EmailController;


class NotificationEmail extends Mailable
{
    use Queueable, SerializesModels;

    public $template;
    public $link;

    /**
     * Create a new message instance.
     */
    public function __construct($link)
    {
        $this->template = EmailController::where('name','notification')->first();
        $this->link = $link;
    }

    public function build()
    {
        return  $this->from(env('MAIL_FROM_ADDRESS'), env('MAIL_FROM_NAME'))->view('emails.notification')->subject("Email Verification");
    }

}
