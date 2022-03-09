<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->integer('order_status')->index()->default(1);//1 = pending, 2 = processing, 3 = holded, 4 = canceled, 5 = complete/delivered
            //processing comes when user has paid through stripe
            $table->string('stripe_charge_id',255)->nullable();
            $table->string('fedex_tracking_id',255)->nullable();
            $table->string('coupon_code',255)->nullable();
            $table->float('discount')->default(0);
            $table->float('discount_amount')->default(0);
            $table->float('tax_percent')->default(0);
            $table->float('tax_amount')->default(0);
            $table->integer('user_id')->index()->default(0);
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
            $table->dropColumn('order_status');
            $table->dropColumn('stripe_charge_id');
            $table->dropColumn('fedex_tracking_id');
            $table->dropColumn('coupon_code');
            $table->dropColumn('discount');
            $table->dropColumn('discount_amount');
            $table->dropColumn('tax_percent');
            $table->dropColumn('tax_amount');
            $table->dropColumn('user_id');
        });
    }
}
