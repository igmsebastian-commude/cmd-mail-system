<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('auth.login');
});

Auth::routes();

Route::get('/', 'HomeController@index')->middleware('auth')->name('home');
Route::post('/import', 'HomeController@import')->middleware('auth')->name('import');

Route::get('/mail', function () {
    $company['name'] = 'ALCOSHOP';
    return view('mails.rawpartner')->with(compact('company'));
})->middleware('auth');
