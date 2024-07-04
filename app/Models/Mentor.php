<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mentor extends Model
{
    use HasFactory;
    protected $table = 'mentors';

    protected $fillables = [
        'name',
        'email',
        'password',
        'email_verified_at',
        'password',
        'phone',
        'username',
        'qualifications',
        'industry_sector',
        'mentored_company',
        'functional_area',
        'hear_about_us',
        'number_of_companies',
        'additional_information'
    ];
}
