<?php

use Illuminate\Support\Facades\Route;

/** -----------------------------------------
 * --------------- Producto -----------------
 * -------------------------------------- **/
Route::group(['prefix' => 'producto'], function () {
    Route::get('', 'Productos\ProductoController@all');
    Route::get('only', 'Productos\ProductoController@onlyProducts');

    Route::group(['middleware' => ['auth:api','auth.isAdmin']], function () {
       // Route::put('', 'Productos\DistribuidoraController@update');
    });
});
