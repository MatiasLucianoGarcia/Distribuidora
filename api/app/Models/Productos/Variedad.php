<?php

namespace App\Models\Productos;

use App\Models\Pedidos\Pedido;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Variedad extends Model
{
    use HasFactory;

    protected $table = 'variedades';
    protected $fillable = ['codigo', 'nombre', 'imagen', 'stock', 'categoria_id'];
    protected $hidden = ['created_at', 'updated_at'];

    public function producto()
    {
        return $this->belongsTo(Producto::class, 'producto_id', 'id');
    }

    public function pedidos()
    {
        return $this->belongsToMany(Pedido::class, 'pedidos_variedades');
    }

    public function categoria()
    {
        return $this->belongsTo(Categoria::class, 'categoria_id', 'id');
    }
}
