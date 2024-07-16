<?php

namespace Database\Seeders;

use App\Models\Company;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $companies = [
            [
                'company_name' => 'Scent Journer Pte Ltd',
                'company_uen' => '',
                'position' => ['Founder'],
                'founded_year' => 0,
                'profile_photo' => 'https://mail.google.com/mail/u/0?ui=2&ik=3dd596077b&attid=0.6&permmsgid=msg-f:1804643653370617783&th=190b61d761519fb7&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ8TrCvXZD9s0IeWGJiAL6wSrZFimk55U65buMTz9lGQlnz9ZXjfMOt3JmE1bmhzAz2xs4qzOE-dO-9jvMsBdPCDmcZb2Szkt6zQ8qoQUVT-MeohwVQ65QooQIo&disp=emb&realattid=ii_190b61d1796d785ceca6',
                'team_size' => [],
                'current_revenue' => [],
                'current_customers_base_size' => [],
                'industry_sector' => [],
                'company_description' => 'Nestled within nature\'s embrace in Singapore, SCENT JOURNER invite you on a journey to discover a world of uplifting fragrances. At Scent Journer, we care deeply about making a positive impact.',
                'functional_area_1' => [],
                'functional_area_2' => [],
                'functional_area_3' => [],
                'hear_about_us' => [],
                'current_problem' => '',
                'additional_information' => 'This journey has taken her to develop what we now call mindful perfumes,fragrances that inspire to be a constant companion on your wellness journey, in your ups and downs, and in every precious moment.'
            ],

            [
                'profile_photo' => 'https://mail.google.com/mail/u/0?ui=2&ik=3dd596077b&attid=0.9&permmsgid=msg-f:1804643694681782763&th=190b61e0ffa7f9eb&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ8YId2StPC5kfQyThO3rkwzjlcfqp0XsHLsCg8ZT6cF0wQyrKnMAhlXe384QwJfZfOsUbucmMw_jiOWTm1iFlvvrg6LqYh22LbB4MhSuOf6bG_cxI96-j3Nyhg&disp=emb&realattid=ii_190b61d5fc03161b5159',
                'company_name' => 'Werms.inc',
                'company_uen' => '',
                'position' => ['Founder'],
                'founded_year' => 0,
                'team_size' => [],
                'current_revenue' => [],
                'current_customers_base_size' => [],
                'industry_sector' => [],
                'company_description' => 'Werms.inc is an Insect farm that upcycles food waste into animal feed and plant fertilisers. ',
                'functional_area_1' => [],
                'functional_area_2' => [],
                'functional_area_3' => [],
                'hear_about_us' => [],
                'current_problem' => '',
                'additional_information' => 'Werms.inc is also an enrichment providor and vendor for sustainability related hands-on workshop. We conduct our workshops at all local and private preschools, MOE schools, IHLs, Universities',
            ],

            [   'profile_photo' => 'https://mail.google.com/mail/u/0?ui=2&ik=3dd596077b&attid=0.1&permmsgid=msg-f:1804643727896082342&th=190b61e8bb61f7a6&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ9-i7vb1S9eag5J5KB0sxA4yAz_8lb0QGbw8wEGLvrt1dYCIfYQEcay1w8Xne2X51OHbqsccylgPQ34Gl9UKRS3mj-7qxf1kbxNwQTcXi8BU_WRiQPP0xZYCkc&disp=emb&realattid=ii_190b61e0e605ddc28ba1',
                'company_name' => 'Wake The Crew',
                'company_uen' => '',
                'position' => ['Founder'],
                'founded_year' => 2020,
                'team_size' => [],
                'current_revenue' => [],
                'current_customers_base_size' => [],
                'industry_sector' => [],
                'company_description' => 'At Wake The Crew, we understand the struggle of busy professionals who crave a great cup of coffee but are always on the go. As working professionals ourselves, we experienced firsthand the challenges of finding time to brew a good cup of coffee at home and constantly resorting to buying from cafes near the office. That\'s when the idea for Wake The Crew was born.
                Wake The Crew was established in 2020, and a year later in 2021, we set up our first manufacturing facility in Singapore. With growing sales and a growing demand for coffee in the region, we established our 2nd manufacturing facility in Johor, Malaysia, in 2023 to cater to the Malaysian market and aid our export sales.
                With a strong commitment to maintaining high quality products at accessible prices for all our customers, all our production operations are completely in-house, under our direct ownership and management. We are also in the process of achieving HACCP and Halal certification as a testament to our unwavering commitment to the highest manufacturing standards and product quality. As a holistic coffee company, we are working towards taking ownership of the farm to cup process including roasting of our own coffee beans.
                We believe that coffee should be accessible to everyone, anytime, anywhere with our coffee concentrates or through our mobile coffee cart. It\'s a comfort in tough moments and a companion in the best ones. Our Coffee Concentrates were created with the busy consumer in mind – the hustlers, the caffeine addicts, and those who want to start their day right. We\'ve made it easy for you. Just pour, mix, and drink.',

                'functional_area_1' => [],
                'functional_area_2' => [],
                'functional_area_3' => [],
                'hear_about_us' => [],
                'current_problem' => '',
                'additional_information' => 'With a strong commitment to high quality products for all our customers, all our production operations are completely in-house, under our direct ownership and management. We are also in the process of achieving HACCP and Halal certification '
        ]]
        ;
        foreach ($companies as $company) {
           // $existingUser = Company::where('qualifications', $mentor['qualifications'])->first();
            //if (!$existingUser) {
                Company::create([
                    'company_name' => $company['company_name'],
                    'company_uen' => $company['company_uen'],
                    'founded_year' => $company['founded_year'],
                    'team_size' => $company['team_size'],
                    'current_revenue' => $company['current_revenue'],
                    'current_customers_base_size' => $company['current_customers_base_size'],
                    'industry_sector' => $company['industry_sector'],
                    'company_description' => $company['company_description'],
                    'functional_area_1' => $company['functional_area_1'],
                    'functional_area_2' => $company['functional_area_2'],
                    'functional_area_3' => $company['functional_area_3'],
                    'hear_about_us' => $company['hear_about_us'],
                    'current_problem' => $company['current_problem'],
                    'additional_information' => $company['additional_information'],
                ]);
           // }
        }
    }
}
