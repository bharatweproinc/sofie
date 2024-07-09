<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmailController extends Model
{
    use HasFactory;
    protected $table = 'email_controllers';
    protected $fillable = [
        'name',
        'title',
        'subject',
        'body',
        'type',
        'value'
    ];
}
