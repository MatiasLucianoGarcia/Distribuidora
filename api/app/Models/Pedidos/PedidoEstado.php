<?php

namespace App\Models\Pedidos;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PedidoEstado extends Model
{
    use HasFactory;

    protected $table = 'pedidos_estados';
    protected $fillable = ['name'];

    public function pedidos(){
        return $this->HasMany(Pedido::class, 'estado_id', 'id');
    }

}
