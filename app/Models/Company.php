<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;
    protected $fillable = [
        'company_name',
        'company_uen',
        'phone',
        'position',
        'username',
        'password',
        'founded_year',
        'team_size',
        'current_revenue',
        'current_customers_base_size',
        'industry_sector',
        'description',
        'function_area_1',
        'function_area_2',
        'function_area_3',
        'hear_about_us',
        'current_problem',
        'additional_information'
    ];

    protected $casts = [
        'position' => 'array',
        'team_size' => 'array',
        'current_revenue' => 'array',
        'current_customers_base_size' => 'array',
        'industry_sector' => 'array',
        'function_area_1' => 'array',
        'function_area_2' => 'array',
        'function_area_3' => 'array',
        'hear_about_us' => 'array',
    ];

    public function user()
    {
        return $this->hasOne(User::class, 'functional_id', 'id');
    }
}

