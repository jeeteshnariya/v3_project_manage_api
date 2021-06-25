<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->all();
});

Route::middleware(['auth', 'second'])->group(function () {
    Route::post('user', 'UserController@index')->name('user');
    Route::post('users/{id}', function ($id) {

    });

});
