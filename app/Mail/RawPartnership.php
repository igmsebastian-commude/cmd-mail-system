<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Storage;

class RawPartnership extends Mailable
{
    use Queueable, SerializesModels;

    private $company;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($company)
    {
        //
        $this->company = $company;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $company = $this->company->toArray();
        return $this->subject('Business Partnership Proposal From Commude Philippines, Inc.')->view('mails.rawpartner')->with(compact('company'));
    }
}
