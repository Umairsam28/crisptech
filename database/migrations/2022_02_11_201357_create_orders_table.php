<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('billing_first_name',100);
            $table->string('billing_last_name',100);
            $table->string('billing_address',255);
            $table->string('billing_address_2',255);
            $table->string('billing_city',100);
            $table->string('billing_zip',20);
            $table->string('billing_phone',100);
            $table->string('billing_email',255);
            $table->string('billing_notes',555);

            $table->string('shipping_first_name',100);
            $table->string('shipping_last_name',100);
            $table->string('shipping_address',255);
            $table->string('shipping_address_2',255);
            $table->string('shipping_city',100);
            $table->string('shipping_zip',20);
            $table->string('shipping_phone',100);

            $table->float('subtotal');
            $table->float('total');

            $table->timestamps();
        });

        Schema::create('order_products', function (Blueprint $table) {
            $table->id();
            $table->integer('order_id');
            $table->integer('product_id');
            $table->integer('quantity');
            $table->float('rowtotal');
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
        Schema::dropIfExists('orders');
        Schema::dropIfExists('order_products');
    }
}
