<?php

//use Illuminate\Support\Facades\Route;

//Route::get('/', function () {
//    return view('welcome');
//});


use Illuminate\Support\Facades\Route;

Route::get('/home', function () {
    return view('users.home');
});
Route::get('/product', function () {
    return view('users.product');
});
Route::get('/profile', function () {
    return view('users.profile');
});
