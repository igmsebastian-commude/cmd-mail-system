<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Storage;

class PartnershipOffer extends Mailable
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
        return $this->attach(Storage::disk('attachments')->get('company_profile_commude_2019.pdf'))->subject('Business Partnership Proposal From Commude Philippines')->view('mails.partner')->with(compact('company'));
    }
}
