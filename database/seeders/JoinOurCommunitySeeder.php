<?php

namespace Database\Seeders;

use App\Models\JoinOurCommunitySection;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class JoinOurCommunitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $community_contents = [
            [
                'id' => 1,
                'community_title' => 'Join Our Community',
                'community_description' => 'Become a part of our dynamic and supportive community, where experienced mentors and ambitious businesses come together to achieve success.',
                'become_mentor_title' => 'Become a Mentor and Inspire Success',

                'become_mentor_description' => 'Join our mentorship program and share your valuable experience to help entrepreneurs succeed. As a mentor, you\'ll provide guidance, support, and insights to aspiring business owners.
                Your mentorship can make a significant impact, helping entrepreneurs overcome challenges and achieve their business goals.',

                'become_partner_title' => 'Partner with Us and Empower Your Business',
                'become_partner_description' => 'Collaborate with our platform to gain access to expert mentors who can help your business thrive. Our mentors provide personalized guidance and strategic advice tailored to your specific needs and challenges.
                By partnering with us, you\'ll be equipped with the tools and knowledge necessary to drive growth and innovation within your company.'
            ],
        ];

        foreach($community_contents as $content){
            $existing = JoinOurCommunitySection::where('id', $content['id'])->first();
            if(!$existing){
                JoinOurCommunitySection::create(
                     [
                        'community_title' => $content['community_title'],
                        'community_description' =>$content['community_description'],
                        'become_mentor_title' => $content['become_mentor_title'],
                        'become_mentor_description' => $content['become_mentor_description'],
                        'become_partner_title' => $content['become_partner_title'],
                        'become_partner_description' => $content['become_partner_description'],
                     ]
                 );
            }else{
             $existing->update([
                'community_title' => $content['community_title'],
                'community_description' =>$content['community_description'],
                'become_mentor_title' => $content['become_mentor_title'],
                'become_mentor_description' => $content['become_mentor_description'],
                'become_partner_title' => $content['become_partner_title'],
                'become_partner_description' => $content['become_partner_description'],
             ]);
            }
         }
    }
}
