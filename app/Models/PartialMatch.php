<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PartialMatch extends Model
{
    use HasFactory;
    protected $table = 'partial_matches';
    protected $fillable = [
        'mentor_id',
        'company_id',
        'functional_area'
    ];
}
