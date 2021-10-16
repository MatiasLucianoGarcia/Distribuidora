<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePedidosVariedadesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pedidos_variedades', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->charset = 'utf8';
            $table->collation = 'utf8_general_ci';

            $table->increments('id');
            $table->integer('variedad_id')->unsigned();
            $table->integer('pedido_id')->unsigned();
            $table->timestamps();

            $table->foreign('variedad_id')
                ->references('id')->on('variedades')
                ->onDelete('restrict')
                ->onUpdate('cascade');

            $table->foreign('pedido_id')
                ->references('id')->on('pedidos')
                ->onDelete('restrict')
                ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pedidos_variedades');
    }
}
