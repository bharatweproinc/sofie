<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RemovedMentorsSmes extends Model
{
    use HasFactory;
    protected $fillable = [
        'mentor_id',
        'company_id',
        'match_end_type',
        'match_end_reason'
    ];
}
