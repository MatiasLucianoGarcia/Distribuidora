<?php

namespace App\Models\DistribuidaDB;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ArticuloDist extends Model
{
    use HasFactory;
    protected $connection = 'mysql2';
    protected $table = 'art_dldistri';

    protected $fillable = [
        'Codigo', 'Nombre', 'Precio', 'TabIVA', 'Moneda', 'NroGru', 'Categoria', 'NroSub', 'NroMar', 'Novedades', 'Observ', 'Cantidad'
    ];

}
