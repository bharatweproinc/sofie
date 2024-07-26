<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MatchingQueue extends Model
{
    use HasFactory;
    protected $fillable = [
        'mentor_id',
        'status'
    ];
}
