<?php

namespace App\Repositories\Productos;

use App\Models\Productos\Producto;

class ProductoRepo {

    public static function findOne($value, $key = 'id'){
        return Producto::where($key, $value)->first();
    }

    public static function find($value, $key = 'id'){
        return Producto::where($key, $value);
    }

    public static function all(){
        return Producto::orderBy('updated_at','DESC')->get();
    }

    public static function insert($data){
        return Producto::create($data);
    }

    public static function update($id, $data){
        $producto = self::findOne($id);
        $producto->update($data);
        return $producto;
    }

    public static function delete($value, $key = 'id'){
        $producto = self::findOne($value, $key);
        $producto->delete();
        return $producto;
    }
}
