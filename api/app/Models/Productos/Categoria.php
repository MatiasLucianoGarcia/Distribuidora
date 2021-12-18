<?php

namespace App\Models\Productos;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    use HasFactory;

    protected $table = 'categorias';
    protected $fillable = ['nombre'];
    protected $hidden = ['details', 'created_at','updated_at'];


    public function productos(){
        return $this->HasMany(Producto::class, 'categoria_id', 'id');
    }


}
