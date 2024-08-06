<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CronLog extends Model
{
    use HasFactory;
    protected $fillable = [
        'timestamp',
        'status',
        'mentor_id',
        'company_id',
    ];
}
