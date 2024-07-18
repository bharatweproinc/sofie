<?php

namespace Database\Seeders;

use App\Models\Testimonial;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TestimonialSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $testimonials = [
            ['name' => 'Joyce Lian', 'description' => 'Working with my mentor was a transformative experience.', 'image' => 'https://upcie.net/storage/mentor_profile/66990c533ee53_1721306195_joyc.jpg'],
            ['name' => 'Aaron Chen', 'description' => 'The mentors guidance and insights have broadened my perspectives', 'image' => 'https://upcie.net/storage/mentor_profile/66990a68479fc_1721305704_aron.jpg'],
            ['name' => 'Alex Lim', 'description' => 'Their insights helped me grow both personally and professionally', 'image' => 'https://upcie.net/storage/mentor_profile/66990aeb79cd7_1721305835_alex.jpg'],
        ];

        foreach ($testimonials as $testimonial) {
                Testimonial::create([
                    'name' => $testimonial['name'],
                    'description' => $testimonial['description'],
                    'image' => $testimonial['image'],
                ]);
        }
    }
}
