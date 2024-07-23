<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MissionStatementSection extends Model
{
    use HasFactory;
    protected $fillable = [
        'mission_title',
        'mission_description',
        // 'images'
    ];
}
