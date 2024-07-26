<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MatchingMentorSme extends Model
{
    use HasFactory;
    protected $fillable = [
        'mentor_id',
        'company_id',
        'functional_area'
    ];
}
