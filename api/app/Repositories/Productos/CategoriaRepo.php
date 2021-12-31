<?php

namespace App\Repositories\Productos;

use App\Models\Productos\Categoria;

class CategoriaRepo
{

    public static function findOne($value, $key = 'id')
    {
        return Categoria::where($key, $value)->first();
    }

    public static function find($value, $key = 'id')
    {
        return Categoria::where($key, $value);
    }

    public static function all()
    {
        return Categoria::orderBy('updated_at', 'DESC')->get();
    }

    public static function insert($data)
    {
        return Categoria::create($data);
    }

    public static function update($id, $data)
    {
        $categoria = self::findOne($id);
        $categoria->update($data);
        return $categoria;
    }

    public static function delete($value, $key = 'id')
    {
        $categoria = self::findOne($value, $key);
        $categoria->delete();
        return $categoria;
    }
}
