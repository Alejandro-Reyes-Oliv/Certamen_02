<?php

use Illuminate\Support\Facades\Route;

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

Route::view("/", "home")->name("home");

Route::view("/ver_lecturas", "ver_lecturas")->name("ver_lecturas");

Route::view("/agregar_lectura", "agregar_lectura")->name("agregar_lectura");
