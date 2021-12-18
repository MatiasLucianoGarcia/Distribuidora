<?php

namespace App\Models\Listas;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lista extends Model
{
    use HasFactory;

    protected $table = 'listas';
    protected $fillable = ['nombre, descuento'];
    protected $hidden = ['details','created_at','updated_at'];

}
