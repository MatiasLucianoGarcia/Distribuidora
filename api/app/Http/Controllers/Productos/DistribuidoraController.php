<?php

namespace App\Http\Controllers\Productos;

use App\Helpers\Response\Response;
use App\Http\Controllers\Controller;
use App\Http\DataSources\Productos\DistribuidoraDataSource;
use App\Models\DistribuidaDB\ArticuloDist;
use App\Repositories\DistribuidaDB\ArticuloDistRepo;

class DistribuidoraController extends Controller
{
    private $distribuidoraDataSource;
  
    public function __construct(){
        $this->distribuidoraDataSource = new DistribuidoraDataSource();
    }


    public function all() {
        $articulos = ArticuloDistRepo::all();
        return Response::success($articulos);
    }

    public function update() {
        $result = $this->distribuidoraDataSource->update();
        return Response::success($result);        
    }



}
