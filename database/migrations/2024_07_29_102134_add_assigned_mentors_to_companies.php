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
            $table->unsignedBigInteger('assigned_mentor_1')->nullable();
            $table->unsignedBigInteger('assigned_mentor_2')->nullable();
            $table->unsignedBigInteger('assigned_mentor_3')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('companies', function (Blueprint $table) {
            $table->dropColumn('assigned_mentor_1');
            $table->dropColumn('assigned_mentor_2');
            $table->dropColumn('assigned_mentor_3');
        });
    }
};
