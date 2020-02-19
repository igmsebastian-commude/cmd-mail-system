<?php

namespace App\Imports;

use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Mail;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use App\Mail\PartnershipOffer;
use App\Mail\RawPartnership;

class CompaniesImport implements ToCollection, WithHeadingRow
{
    /**
    * @param Collection $collection
    */
    public function collection(Collection $collection)
    {
        $companies = $collection->each(function ($item) {
            // Mail::to('ian_sebastian@commude.ph')
            Mail::to($item['email'])
                ->cc(['group@commude.co.jp', 'marketing@commude.ph'])
                ->queue(new RawPartnership($item));
        });
    }
}
