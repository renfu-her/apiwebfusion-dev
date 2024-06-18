<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\MenuController;

Route::get('/{any}', function () {
    return view('layouts.app');
})->where('any', '.*');

Route::resource('api/users', UserController::class);
Route::resource('api/menus', MenuController::class);
