<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JoinOurCommunitySection extends Model
{
    use HasFactory;
    protected $fillable = [
        'community_title',
        'community_description',
        'become_mentor_title',
        'become_mentor_description',
        'become_partner_title',
        'become_partner_description'
    ];
}
