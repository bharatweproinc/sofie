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
            ['name' => 'User one', 'email' => 'userone@yopmail.com', 'password' => Hash::make('password')],
            ['name' => 'User two', 'email' => 'usertwo@yopmail.com', 'password' => Hash::make('password')],
            ['name' => 'User three', 'email' => 'userthree@yopmail.com' , 'password' => Hash::make('password')],
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
