<?php

namespace App\Http\Middleware\Producto;

use App\Helpers\Validator\Validator;
use Closure;
use Illuminate\Http\Request;

class Data
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        Validator::validator(
            $request->all(),
            array(
                'nombre'       => 'required|string|unique:productos,nombre|max:40',
                'imagen'       => 'nullable|string',
            )
        );

        return $next($request);
    }
}
