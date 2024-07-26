<?php

namespace App\Mail;

use App\Models\EmailController;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;

use Illuminate\Queue\SerializesModels;

class AcceptedMentorProfileMail extends Mailable
{
    use Queueable, SerializesModels;
    public $template;
    public $user_name;
    public $data;
    public function __construct($user_name, $data)
    {
        $this->template = EmailController::where('name','accepted mentor profile')->first();
        $this->user_name = $user_name;
        $this->data = $data;
    }
    public function build()
    {
        return  $this->from(env('MAIL_FROM_ADDRESS'), env('MAIL_FROM_NAME'))->view('emails.acceptedMentor')->subject("We are delighted to have you onboard as our Mentor!");
    }


}
