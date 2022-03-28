<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterOrdersTable17322 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->string('billing_first_name',100);
            $table->string('billing_last_name',100);
            $table->string('billing_company',255)->nullable();
            $table->string('billing_email',255);
            $table->string('billing_phone',100);
            $table->string('billing_country',255);
            $table->string('billing_state',255);
            $table->string('billing_city',255);
            $table->string('billing_zipcode',255);
            $table->string('billing_address',255);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->dropColumn('billing_first_name');
            $table->dropColumn('billing_last_name');
            $table->dropColumn('billing_email');
            $table->dropColumn('billing_phone');
            $table->dropColumn('billing_country');
            $table->dropColumn('billing_state');
            $table->dropColumn('billing_city');
            $table->dropColumn('billing_zipcode');
            $table->dropColumn('billing_address');
        });
    }
}
