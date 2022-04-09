<?php

use Illuminate\Support\Facades\Route;

/** -----------------------------------------
 * --------------- Lista----------------------
 * -------------------------------------- **/
Route::group(['prefix' => 'lista'], function () {
    Route::get('', 'Lista\ListaController@all');
});
