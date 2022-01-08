<?php

namespace App\Http\Controllers\Productos;

use App\Helpers\Response\Response;
use App\Http\Controllers\Controller;
use App\Http\DataSources\Productos\ProductoDataSource;
use App\Repositories\Productos\ProductoRepo;
use Illuminate\Http\Request;

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

    public function delete(Request $request, $id)
    {
        $user = ProductoRepo::delete($id);
        return Response::success($user);
    }

    public function update(Request $request)
    {
        $data =  $request->all();
        return Response::success(ProductoRepo::update($data['id'], $data));
    }

    public function insert(Request $request)
    {
        $data =  $request->all();
        return Response::success(ProductoRepo::insert($data));
    }
}
