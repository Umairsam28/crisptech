<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Permission;

class RequestForQuotes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Permission::create([
            'name'=>'quoteform-list',
            'title'=>'QuoteForm List',
        ]);
        Permission::create([
            'name'=>'quoteform-view',
            'title'=>'QuoteForm View',
        ]);
        Permission::create([
            'name'=>'quoteform-delete',
            'title'=>'QuoteForm delete',
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
