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
            ['name' => 'Joyce Lian', 'description' => 'Working with my mentor was a transformative experience.', 'image' => '6697637767be4_1721197431_julia.jpg'],
            ['name' => 'Aaron Chen', 'description' => 'The mentors guidance and insights have broadened my perspectives', 'image' => '6697637767be4_1721197431_julia.jpg'],
            ['name' => 'Alex Lim', 'description' => 'Their insights helped me grow both personally and professionally', 'image' => '6697637767be4_1721197431_julia.jpg'],
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
