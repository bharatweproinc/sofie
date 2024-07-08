<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\{
    User,
};

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            ['name' => 'Admin', 'email' => 'admin@gmail.com', 'password' => Hash::make('password'), 'user_role' => 'admin'],
        ];
        foreach ($users as $user) {
            $existingUser = User::where('email', $user['email'])->first();
            if (!$existingUser) {
                User::create([
                    'name' => $user['name'],
                    'email' => $user['email'],
                    'password' => $user['password']
                ]);
            }
        }
    }
}
