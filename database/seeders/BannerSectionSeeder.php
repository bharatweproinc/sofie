<?php

namespace Database\Seeders;

use App\Models\BannerSection;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BannerSectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $banner_contents = [
            [
                'id' => 1,
                'banner_title' => 'Find the Perfect Business Mentor for Your Success',
                'banner_description' => 'Unlock your business potential with personalized guidance from experienced mentors. Start your journey to success today by connecting with a mentor who understands your unique challenges and goals.',
                'banner_images' => []
            ],
        ];

        foreach($banner_contents as $content){
           $existing = BannerSection::where('id', $content['id'])->first();
           if(!$existing){
                BannerSection::create(
                    [
                        'banner_title' => $content['banner_title'],
                        'banner_description' =>$content['banner_description'],
                        'banner_images' => $content['banner_images']
                    ]
                );
           }else{
            $existing->update([
                'banner_title' => $content['banner_title'],
                'banner_description' =>$content['banner_description'],
                'banner_images' => $content['banner_images']
            ]);
           }
        }
    }
}
