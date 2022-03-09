<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DropAdditionalColumnsInOrders extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->dropColumn('billing_first_name');
            $table->dropColumn('billing_address');
            $table->dropColumn('billing_last_name');
            $table->dropColumn('billing_address_2');
            $table->dropColumn('billing_city');
            $table->dropColumn('billing_zip');
            $table->dropColumn('billing_phone');
            $table->dropColumn('billing_email');
            $table->dropColumn('billing_notes');
            $table->string('shipping_email',255);
            $table->string('shipping_notes',555);
        });
    }
}
