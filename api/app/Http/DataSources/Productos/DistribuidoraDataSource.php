<?php

namespace App\Http\DataSources\Productos;

use App\Repositories\DistribuidaDB\ArticuloDistRepo;
use App\Repositories\Productos\CategoriaRepo;
use App\Repositories\Productos\VariedadRepo;

class DistribuidoraDataSource
{
    
    private $productosDataSource;
  
    public function __construct(){
        $this->productosDataSource = new ProductosDataSource();
    }


    public function update()
    {
        $success = []; 
        $errors = []; 
        $articulos = ArticuloDistRepo::all();


        foreach ($articulos as $articulo) {
            // obtengo la categoria
            $categoria_id = $this->createOrUpdate($articulo->Categoria);

            // obtengo la variedad
            $variedad = VariedadRepo::findOne($articulo->Codigo, 'codigo');

            // genero 
            $data = [
                'codigo' => $articulo->Codigo,
                'nombre' => $articulo->Nombre,
                'stock' => $articulo->Cantidad > 0 ? $articulo->Cantidad : 0,
                'precio' => $articulo->Precio,
                'categoria_id' => $categoria_id
            ];

            $result = is_null($variedad) ? $this->insertProduct($data) :  $this->updateProduct($variedad->id, $data);

            if($result) {
                array_push($success, $articulo->Nombre);
            }else{
                array_push($errors, $articulo->Nombre);
            }
        }

        return array(
            'success' => array(
                'count' => count($success),
                'names' => $success
            ),
            'errors' => array(
                'count' => count($errors),
                'names' => $errors
            ),
            'productos' => $this->productosDataSource->getProductos(),
        );
    }

    private function createOrUpdate(string $nombre): int
    {
        $categoria = CategoriaRepo::findOne($nombre, 'nombre');
        if (is_null($categoria)) {
            $categoria = CategoriaRepo::insert(['nombre' => $nombre]);
            return $categoria->id;
        } else {
            $categoria = CategoriaRepo::update($categoria->id, ['nombre' => $nombre]);
            return $categoria->id;
        }
    }

    private function insertProduct(array $articulo): bool
    {
        VariedadRepo::insert($articulo);
        return true;
    }

    private function updateProduct(int $id, array $articulo): bool
    {
        VariedadRepo::update($id, $articulo);
        return true;
    }
}
