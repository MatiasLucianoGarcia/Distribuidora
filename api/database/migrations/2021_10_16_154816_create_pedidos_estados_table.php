<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreatePedidosEstadosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pedidos_estados', function (Blueprint $table) {
			$table->engine = 'InnoDB';	
			$table->charset = 'utf8';
			$table->collation = 'utf8_general_ci';

            $table->increments('id');
            $table->string('nombre')->unique();
            $table->text('details')->nullable();
            $table->timestamps();
        });

        $this->agregar('Carrito', 'El pedido está en el carrito');
        $this->agregar('Terminado', 'El cliente confirmo el pedido');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pedidos_estados');
    }

    private function agregar(string $nombre, string $details): void{
        DB::table('pedidos_estados')->insert([
            'nombre' => $nombre,
            'details' => $details,
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}
