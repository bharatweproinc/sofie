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
        Schema::create('join_our_community_sections', function (Blueprint $table) {
            $table->id();
            $table->text('community_title')->nullable();
            $table->longText('community_description')->nullable();
            $table->text('become_mentor_title')->nullable();
            $table->longText('become_mentor_description')->nullable();
            //$table->longText('mentor_images')->nullable();
            $table->text('become_partner_title')->nullable();
            $table->longText('become_partner_description')->nullable();
            //$table->longText('company_images')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('join_our_community_sections');
    }
};
