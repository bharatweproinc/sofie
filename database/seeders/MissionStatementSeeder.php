<?php

namespace Database\Seeders;

use App\Models\MissionStatementSection;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MissionStatementSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $mission_contents = [
            [
                'id' => 1,
                'mission_title' => 'Mission Statement',
                'mission_description' => 'Our mission is to empower entrepreneurs by connecting them with the right mentors who can provide personalized guidance and support.
                We envision a world where every entrepreneur has the resources and knowledge they need to succeed and make a positive impact on their communities.
                We believe that every entrepreneur, regardless of their background or location, deserves access to high-quality mentorship. By leveraging our extensive network of experienced professionals, we aim to bridge the gap between knowledge and action.',
            ],
        ];
        foreach($mission_contents as $content){
            $existing = MissionStatementSection::where('id', $content['id'])->first();
            if(!$existing){
                MissionStatementSection::create(
                     [
                         'mission_title' => $content['mission_title'],
                         'mission_description' =>$content['mission_description'],
                     ]
                 );
            }else{
             $existing->update([
                 'mission_title' => $content['mission_title'],
                 'mission_description' =>$content['mission_description'],
             ]);
            }
         }
    }
}
