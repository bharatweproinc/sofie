<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DeclinedMentorsSme extends Model
{
    use HasFactory;
    protected $fillable = [
        'mentor_id',
        'company_id',
        'decline_type'
    ];
}
