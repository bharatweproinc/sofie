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


    /**
     * Create a new message instance.
     */
    public function __construct()
    {
        $this->template = EmailController::where('name',"notification")->first();

    }
         public function build()
    {
        // return  $this->from('support@sofie.com', 'Sofie')->view('email.blade')->subject("Email");
        return  $this->from('support@weareappointments.com', 'WeAreAppointments')->view('emails.notification')->subject("Notification");

    }
}
