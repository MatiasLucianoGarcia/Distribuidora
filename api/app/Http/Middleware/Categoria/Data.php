<?php

namespace App\Http\Middleware\Investigators;

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
                'nombre'       => 'required|string|unique:categorias,nombre|max:40',
            )
        );

        return $next($request);
    }
}
