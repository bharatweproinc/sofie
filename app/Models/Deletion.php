<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Deletion extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'user_role',
        'scheduled_deletion_at'
    ];

    public function scheduleMentorDeletion($id){
        $user = User::where('user_role', 'mentor')->where('functional_id', $id)->first();
        if ($user) {
            $existing_req = Deletion::where('user_id', $user->id)->first();
            if(!$existing_req){
                Deletion::create([
                    'user_id' => $user->id,
                    'user_role' => 'mentor',
                    'scheduled_deletion_at' => now()->addHours(72),
                ]);
            }
        }
    }

    public function scheduleCompanyDeletion($id){
        $user = User::where('user_role', 'entrepreneur')->where('functional_id', $id)->first();
        if($user) {
            $existing_req = Deletion::where('user_id', $user->id)->first();
            if(!$existing_req){
                Deletion::create([
                    'user_id' => $user->id,
                    'user_role' => 'entrepreneur',
                    'scheduled_deletion_at' => now()->addHours(72),
                ]);
            }
        }
    }
}
