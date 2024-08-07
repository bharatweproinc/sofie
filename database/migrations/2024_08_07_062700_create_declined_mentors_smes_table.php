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
        Schema::create('declined_mentors_smes', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('mentor_id')->nullable();
            $table->unsignedBigInteger('company_id')->nullable();
            $table->string('decline_type')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('declined_mentors_smes');
    }
};
