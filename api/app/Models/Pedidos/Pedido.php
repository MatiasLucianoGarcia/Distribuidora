<?php

namespace App\Models\Pedidos;

use App\Models\Users\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pedido extends Model
{
    use HasFactory;

    protected $table = 'pedidos';
    protected $fillable = ['usuario_id', 'estado_id'];


    public function estado(){
        return $this->belongsTo(PedidoEstado::class, 'estado_id', 'id');
    }

    public function usuario(){
        return $this->belongsTo(User::class, 'usuario_id', 'id');
    }
    
}
