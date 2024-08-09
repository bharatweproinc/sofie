<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;
    protected $fillable = [
        'company_name',
        'company_uen',
        'contact_name',
        'phone',
        'position',
        'username',
        'password',
        'founded_year',
        'team_size',
        'current_revenue',
        'current_customers_base_size',
        'industry_sector',
        'company_description',
        'functional_area_1',
        'functional_area_2',
        'functional_area_3',
        'hear_about_us',
        'current_problem',
        'additional_information',
        'profile_photo',
        'assigned_mentor_1',
        'assigned_mentor_2',
        'assigned_mentor_3',
    ];

    protected $casts = [
        'position' => 'array',
        // 'team_size' => 'array',
        // 'current_revenue' => 'array',
        // 'current_customers_base_size' => 'array',
        //'industry_sector' => 'array',
        'hear_about_us' => 'array',
    ];

    public function user()
    {
        return $this->hasOne(User::class, 'functional_id', 'id');
    }

}

