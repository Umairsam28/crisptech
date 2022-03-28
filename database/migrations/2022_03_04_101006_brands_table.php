<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class BrandsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('brands', function (Blueprint $table) {
            $table->id();
            $table->string('name',255)->index();
            $table->string('slug',255)->index();
            $table->timestamps();
        });
        Schema::table('products', function (Blueprint $table) {
            $table->foreignId('brand_id')->constrained();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('brands');
        Schema::table('products', function (Blueprint $table) {
            $table->dropColumn('brand_id');
        });
    }
}
