<?php

namespace App\Models\Pedidos;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PedidoVariedad extends Model
{
    use HasFactory;

    protected $table = 'pedidos_variedades';
    protected $fillable = ['cantidad', 'precio'];

}
