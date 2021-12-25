<?php

namespace App\Models\Productos;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    use HasFactory;

    protected $table = 'productos';
    protected $fillable = ['nombre', 'imagen'];
    protected $hidden = ['created_at','updated_at'];

    public function variedades(){
        return $this->HasMany(Variedad::class, 'producto_id', 'id');
    }

}
