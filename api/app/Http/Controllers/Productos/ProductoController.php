<?php

namespace App\Http\Controllers\Productos;

use App\Helpers\Response\Response;
use App\Http\Controllers\Controller;
use App\Http\DataSources\Productos\ProductoDataSource;

class ProductoController extends Controller
{
  
    private $productosDataSource;
  
    public function __construct(){
        $this->productosDataSource = new ProductoDataSource();
    }


    public function all()
    {
        $productos = $this->productosDataSource->getProductos();
        return Response::success($productos);
    }

    public function onlyProducts()
    {
        $productos = $this->productosDataSource->getOnlyProductos();
        return Response::success($productos);
    }
}
