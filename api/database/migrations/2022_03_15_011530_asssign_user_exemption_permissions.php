<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Permission;
use App\Models\RolePermission;

class AsssignUserExemptionPermissions extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $permissions = [
            ['id' => 179 , 'name' => 'exemption-list',  'title' =>  'Exemption List'],
            ['id' => 180 , 'name' => 'exemption-view', 'title' =>   'Exemption View'],
            ['id' => 181 , 'name' => 'exemption-create', 'title' => 'Exemption Create'],
            ['id' => 182 , 'name' => 'exemption-edit', 'title' =>   'Exemption Edit'],
            ['id' => 183 , 'name' => 'exemption-delete', 'title' => 'Exemption Delete'],
        ];

        foreach($permissions as $permission ){
        Permission::create(['id' => $permission['id'], 'name' => $permission['name'], 'title' => $permission['title']]);
        }
        $assign_permissions = Permission::where('title', 'like', 'Exemption%')->get();
        foreach($assign_permissions  as $assign_per){
            RolePermission::create([
                    'role_id' => 1,
                    'permission_id' => $assign_per->id
            ]);
        }
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
