<?php

namespace App\Repositories\Listas;

use App\Models\Listas\Lista;

class ListaRepo {

    public static function findOne($value, $key = 'id'){
        return Lista::where($key, $value)->first();
    }

    public static function find($value, $key = 'id'){
        return Lista::where($key, $value);
    }

    public static function all(){
        return Lista::orderBy('nombre','ASC')->get();
    }

    public static function insert($data){
        return Lista::create($data);
    }

    public static function update($id, $data){
        $lista = self::find($id);
        $lista->update($data);
        return $lista;
    }

    public static function delete($value, $key = 'id'){
        $lista = self::findOne($value, $key);
        $lista->delete();
        return $lista;
    }
}
