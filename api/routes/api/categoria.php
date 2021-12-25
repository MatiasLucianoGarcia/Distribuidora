<?php

use Illuminate\Support\Facades\Route;

/** -----------------------------------------
 * --------------- Categoria ----------------
 * -------------------------------------- **/
Route::group(['prefix' => 'categorias'], function () {
    Route::get('', 'Productos\CategoriaController@all');

    Route::group(['middleware' => ['auth:api','auth.isAdmin']], function () {
        Route::post('', 'Productos\CategoriaController@insert')->middleware('categoria.data');
        Route::put('', 'Productos\CategoriaController@update')->middleware('categoria.data');
        Route::delete('/{id}', 'Productos\CategoriaController@delete')->middleware('categoria.email');
    });
});
