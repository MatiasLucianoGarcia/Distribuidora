<?php

namespace App\Http\DataSources\Productos;

use App\Http\Dtos\ProductoDTO;
use App\Http\Dtos\VariedadDTO;
use App\Repositories\Productos\ProductoRepo;
use App\Repositories\Productos\VariedadRepo;

class ProductosDataSource
{
    public function getProductos() {
        $productos = ProductoRepo::all()->load('variedades');
        $variedades = VariedadRepo::all()->load('producto');

        return array_merge(
            $this->parseProductosWithVariedades($productos),
            $this->parseVariedadesWithoutProducto($variedades)
        );
    }

    private function parseProductosWithVariedades($productos){
        if(count($productos)===0){
            return [];
        }

        $array = [];
        foreach($productos as $producto) {
            if(count($producto->variedades)===0)
                continue;

            $p = new ProductoDTO();
            $p->id = $producto->id;
            $p->nombre = $producto->nombre;
            $p->imagen = $producto->imagen;
            $vAux = [];

            foreach($producto->variedades as $variedad){
                $v = new VariedadDTO();
                $v->id = $variedad->id;
                $v->codigo = $variedad->codigo;
                $v->imagen = $variedad->imagen;
                $v->nombre = $variedad->nombre;
                $v->stock = $variedad->stock;
                $v->precio = $variedad->precio;
                array_push($vAux, $v);
            }
            $p->variedades = $vAux;
            array_push($array, $p);
        }
        return $array;
    }

    private function parseVariedadesWithoutProducto($variedades){
        if(count($variedades)===0){
            return [];
        }

        $array = [];
        foreach($variedades as $variedad) {
            if(!is_null($variedad->producto))
                continue;

            $p = new ProductoDTO();
            $p->id = $variedad->id;
            $p->nombre = $variedad->nombre;
            $p->imagen = $variedad->imagen;

            $v = new VariedadDTO();
            $v->id = $variedad->id;
            $v->codigo = $variedad->codigo;
            $v->imagen = $variedad->imagen;
            $v->nombre = $variedad->nombre;
            $v->stock = $variedad->stock;
            $v->precio = $variedad->precio;

            $p->variedades = [$v];

            array_push($array, $p);
        }
        return $array;
    }

}

