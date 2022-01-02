<?php

namespace App\Http\DataSources\Productos;

use App\Http\Dtos\Productos\ProductoDTO;
use App\Http\Dtos\Productos\VariedadDTO;
use App\Repositories\Productos\ProductoRepo;
use App\Repositories\Productos\VariedadRepo;

class ProductoDataSource
{

    /**
     * Retorna un arreglo de tipo ProductoDTO
     * @return {Array<ProductoDTO>} Retorn un arreglo de tipo ProductoDTO 
     */
    public function getProductos(): Array {
        $productos = ProductoRepo::all()->load('variedades');
        $variedades = VariedadRepo::all()->load('producto', 'categoria');

        return array_merge(
            $this->parseProductosWithVariedades($productos),
            $this->parseVariedadesWithoutProducto($variedades)
        );
    }

    /**
     * Retorna los productos sin sus variedades
     */
    public function getOnlyProductos(): Array {
        return ProductoRepo::all()->toArray();
    }


    private function parseProductosWithVariedades($productos): Array{
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
                $v = new ProductoDTO();
                $v->id = $variedad->id;
                $v->codigo = $variedad->codigo;
                $v->categoria = $variedad->categoria->nombre;
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

    private function parseVariedadesWithoutProducto($variedades): Array{
        if(count($variedades)===0){
            return [];
        }

        $array = [];
        foreach($variedades as $variedad) {
            if(!is_null($variedad->producto))
                continue;

            $v = new VariedadDTO();
            $v->id = $variedad->id;
            $v->codigo = $variedad->codigo;
            $v->imagen = $variedad->imagen;
            $v->categoria = $variedad->categoria->nombre;
            $v->nombre = $variedad->nombre;
            $v->stock = $variedad->stock;
            $v->precio = $variedad->precio;
            $v->variedades = null;

            array_push($array, $v);
        }
        return $array;
    }

}

