## Requirements
- PHP 8.1
- Node 20.12
- NPM 6.14.15
- Apache Server/2.4.52
- MariaDB 10.6.18-MariaDB
- Ubuntu 22.04

## Setup

### Commands
- clone the code from repository
- copy .env-example to .env
- componser install
- npm install
- php artisan key:generate
- php artisan migrate
- php artisan optimize
- php artisan storage:link

## Seeders
UserSeeder: php artisan db:seed --class=UserSeeder
MentorSeeder: php artisan db:seed --class=MentorSeeder
CompanySeeder: php artisan db:seed --class=CompanySeeder
TestimonialSeeder: php artisan db:seed --class=TestimonialSeeder

## 
