<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('address')->nullable();
            $table->string('gender')->nullable();
            $table->string('email')->unique();
            $table->biginteger('phone')->nullable();
            // $table->date('birthdate');
            // $table->string('city');
            // $table->string('state');
            // $table->string('country');
            $table->integer('semester')->nullable();
            $table->string('course')->nullable();
            $table->string('college_name')->nullable();
            $table->string('technology')->nullable();
            $table->string('qualification')->nullable();
            $table->string('cover')->nullable();
            $table->string('avtar')->nullable();
            $table->string('status')->nullable();
            $table->integer('user_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('profiles');
    }
}
