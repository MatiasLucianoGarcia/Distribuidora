<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class Listas extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('listas', function (Blueprint $table) {
			$table->engine = 'InnoDB';	
			$table->charset = 'utf8';
			$table->collation = 'utf8_general_ci';

            $table->increments('id');
            $table->string('nombre')->unique();
            $table->decimal('descuento', 2, 0)->default(0);
            $table->text('details')->nullable();
            $table->timestamps();
        });

        $this->agregar('Lista 1', 'Lista de prueba');
        $this->agregar('Lista 2', 'Lista de prueba', 10);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('listas');
    }

    private function agregar(string $nombre, string $details, int $descuento = 0): void{
        DB::table('listas')->insert([
            'nombre' => $nombre,
            'descuento' => $descuento,
            'details' => $details,
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}
