<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
			$table->engine = 'InnoDB';	
			$table->charset = 'utf8';
			$table->collation = 'utf8_general_ci';
            
            $table->increments('id');
            $table->string('nombre');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->enum('role',['admin','cliente']);
            $table->integer('lista_id')->unsigned()->nullable();
            $table->rememberToken();
            $table->timestamps();

            
            $table->foreign('lista_id')
                ->references('id')->on('listas')
                ->onDelete('restrict')
                ->onUpdate('restrict');
        });

        $this->agregar('User 1', 'germang08@hotmail.com', '$2y$10$mSy4qpcpW/nGCXiYi8ZBFOv9y1AVUUFOEyZcvxD86CeH.rVEaFV0a', 'admin');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }

    private function agregar(string $nombre, string $email, string $password, string $tipo): void{
        DB::table('users')->insert([
            'nombre' => $nombre,
            'email' => $email,
            'password' => $password,
            'role' => $tipo,
            'lista_id' => 1,
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}
