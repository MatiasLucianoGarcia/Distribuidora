<?php

namespace App\Http\Controllers\Lista;

use App\Helpers\Response\Response;
use App\Http\Controllers\Controller;
use App\Repositories\Listas\ListaRepo;
use Illuminate\Http\Request;

class ListaController extends Controller
{
    function all(){
        return Response::success(ListaRepo::all());
    }
}
