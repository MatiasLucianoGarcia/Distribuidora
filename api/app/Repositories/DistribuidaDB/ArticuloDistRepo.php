<?php

namespace App\Repositories\DistribuidaDB;

use App\Models\DistribuidaDB\ArticuloDist;

class ArticuloDistRepo {

    public static function findOne($value, $key = 'id'){
        return ArticuloDist::where($key, $value)->first();
    }

    public static function find($value, $key = 'id'){
        return ArticuloDist::where($key, $value);
    }

    public static function all(){
        return ArticuloDist::orderBy('nombre','ASC')->get();
    }
}
