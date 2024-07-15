<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('companies', function (Blueprint $table) {
            $table->renameColumn('function_area_1', 'functional_area_1');
            $table->renameColumn('function_area_2', 'functional_area_2');
            $table->renameColumn('function_area_3', 'functional_area_3');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('companies', function (Blueprint $table) {
            $table->renameColumn('functional_area_1', 'function_area_1');
            $table->renameColumn('functional_area_2', 'function_area_2');
            $table->renameColumn('functional_area_3', 'function_area_3');
        });
    }
};
