<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVariedadesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('variedades', function (Blueprint $table) {
			$table->engine = 'InnoDB';	
			$table->charset = 'utf8';
			$table->collation = 'utf8_general_ci';

            $table->increments('id');
            $table->string('nombre');
            $table->integer('producto_id')->unsigned();
            $table->string('codigo')->unique();
            $table->string('stock')->default(0);
            $table->timestamps();

            $table->foreign('producto_id')
                ->references('id')->on('productos')
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
        Schema::dropIfExists('variedades');
    }
}
