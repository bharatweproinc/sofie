<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mentor extends Model
{
    use HasFactory;
    protected $table = 'mentors';

    protected $fillable = [
        'qualifications',
        'industry_sector',
        'mentored_company',
        'functional_area',
        'hear_about_us',
        'number_of_companies',
        'additional_information'
    ];

    protected $casts = [
        'qualifications' => 'array',
        'industry_sector' => 'array',
        'mentored_company' => 'array',
        'functional_area' => 'array',
        'hear_about_us' => 'array',
        'number_of_companies' => 'array',
        'additional_information' => 'array'
    ];

    /**
     * Get the user associated with the Mentor
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function user()
    {
        return $this->hasOne(User::class, 'functional_id', 'id');
    }
}
