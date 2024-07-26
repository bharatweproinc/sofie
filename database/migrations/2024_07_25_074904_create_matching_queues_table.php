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
        Schema::create('matching_queues', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('mentor_id')->nullable();
            $table->string('status')->nullable()->default('not matched');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('matching_queues');
    }
};
