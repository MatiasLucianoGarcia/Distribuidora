<?php

use Illuminate\Support\Facades\Route;

/** -----------------------------------------
 * ---------- distribuidora ----------------
 * -------------------------------------- **/
Route::group(['prefix' => 'distribuidora'], function () {
    Route::get('', 'Productos\DistribuidoraController@all');
    Route::get('update', 'Productos\DistribuidoraController@update');

    Route::group(['middleware' => ['auth:api','auth.isAdmin']], function () {
       // Route::put('', 'Productos\DistribuidoraController@update');
    });
});
