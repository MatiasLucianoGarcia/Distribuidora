<?php

namespace App\Http\Controllers\Productos;

use App\Helpers\Response\Response;
use App\Http\Controllers\Controller;
use App\Repositories\Productos\CategoriaRepo;
use Illuminate\Http\Request;

class CategoriaController extends Controller
{

    public function all()
    {
        $categoria = CategoriaRepo::all();
        return Response::success($categoria);
    }

    public function delete(Request $request, $id)
    {
        $user = CategoriaRepo::delete($id);
        return Response::success($user);
    }

    public function update(Request $request)
    {
        $data =  $request->all();
        return Response::success(CategoriaRepo::update($data['id'], $data));
    }

    public function insert(Request $request)
    {
        $data =  $request->all();
        return Response::success(CategoriaRepo::insert($data));
    }
}
