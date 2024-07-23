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
        Schema::create('mission_statement_sections', function (Blueprint $table) {
            $table->id();
            $table->text('mission_title')->nullable();
            $table->longText('mission_description')->nullable();
            // $table->longText('images')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mission_statement_sections');
    }
};
