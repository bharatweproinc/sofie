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
            ['name' => 'Steven Kim', 'email'=>'skim@yopmail.com', 'password' => Hash::make('password'), 'user_role' => 'mentor', ],
            ['name' => 'Julia Zheng Kuik', 'email'=>'jkuik@yopmail.com', 'password' => Hash::make('password'), 'user_role' => 'mentor'],
            ['name' => 'Soon Yu', 'email'=>'syu@yopmail.com', 'password' => Hash::make('password'), 'user_role' => 'mentor'],
            ['name' => 'Saira Rajan', 'email'=>'srajan@yopmail.com', 'password' => Hash::make('password'), 'user_role' => 'mentor'],
            ['name' => 'Joyce Lian', 'email'=>'jlian@yopmail.com', 'password' => Hash::make('password'), 'user_role' => 'entrepreneur'],
            ['name' => 'Aaron', 'email'=>'aaron@yopmail.com', 'password' => Hash::make('password'), 'user_role' => 'entrepreneur'],
            ['name' => 'Ting and Bel', 'email'=>'tbel@yopmail.com', 'password' => Hash::make('password'), 'user_role' => 'entrepreneur'],
        ];
        foreach ($users as $user) {
            $existingUser = User::where('email', $user['email'])->first();
            if (!$existingUser) {
                User::create([
                    'name' => $user['name'],
                    'email' => $user['email'],
                    'password' => $user['password'],
                    'user_role' => $user['user_role']
                ]);
            }
        }
    }
}
