<?php

namespace App\Http\Dtos\Productos;

class VariedadDTO
{
    public $id;
    public $codigo;
    public $imagen;
    public $categoria;
    public $nombre;
    public $stock;
    public $precio;
    public $type = 'product';
}
