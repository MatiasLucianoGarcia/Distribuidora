<?php

use Illuminate\Support\Facades\Route;

/** -----------------------------------------
 * --------------- Producto -----------------
 * -------------------------------------- **/
Route::group(['prefix' => 'producto'], function () {
    Route::get('all', 'Productos\ProductoController@all');
    Route::get('', 'Productos\ProductoController@onlyProducts');

    Route::group(['middleware' => ['auth:api','auth.isAdmin']], function () {
        Route::post('', 'Productos\ProductoController@insert')->middleware('producto.data');
        Route::put('', 'Productos\ProductoController@update')->middleware('producto.data','producto.id');
        Route::delete('/{id}', 'Productos\ProductoController@delete')->middleware('producto.id', 'producto.delete');
    });
});
