<?php

namespace App\Imports;

use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Mail;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class CompaniesImport implements ToCollection, WithHeadingRow
{
    /**
    * @param Collection $collection
    */
    public function collection(Collection $collection)
    {
        $companies = $collection->each(function ($item) {
            Mail::to($item['email'])
                ->cc($moreUsers)
                ->bcc($moreUsers)
                ->queue(new OrderShipped($order));
        });
    }
}
