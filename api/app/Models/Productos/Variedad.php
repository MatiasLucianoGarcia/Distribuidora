<?php

namespace App\Models\Productos;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Variedad extends Model
{
    use HasFactory;

    protected $table = 'variedades';
    protected $fillable = ['codigo', 'nombre', 'imagen', 'stock'];
    protected $hidden = ['created_at','updated_at'];
    
    public function producto(){
        return $this->belongsTo(Producto::class, 'producto_id', 'id');
    }

}
