<?php

namespace App\Repositories\Productos;

use App\Models\Productos\Variedad;

class VariedadRepo {

    public static function findOne($value, $key = 'id'){
        return Variedad::where($key, $value)->first();
    }

    public static function find($value, $key = 'id'){
        return Variedad::where($key, $value);
    }

    public static function all(){
        return Variedad::orderBy('updated_at','DESC')->get();
    }

    public static function insert($data){
        return Variedad::create($data);
    }

    public static function update($id, $data){
        $variedad = self::findOne($id);
        $variedad->update($data);
        return $variedad;
    }

    public static function delete($value, $key = 'id'){
        $variedad = self::findOne($value, $key);
        $variedad->delete();
        return $variedad;
    }
}
