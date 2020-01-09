<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use App\Imports\CompaniesImport;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }

    /**
     * Show the application import page.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function import(Request $request)
    {
        $validatedData = $request->validate([
            'file' => 'required|mimes:csv,txt',
        ]);

        if ($request->file('file')->getClientOriginalExtension() != 'csv') {
            return back()->withErrors('file', 'File is not csv');
        }

        Excel::import(new CompaniesImport, $request->file('file'));

        return back();
    }
}
