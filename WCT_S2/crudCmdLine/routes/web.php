<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('categories/{id}/custom-action', [CategoryController::class, 'customAction'])->name('categories.customAction');

Route::resource('categories', CategoryController::class);


Route::resource('categories', 'CategoryController');