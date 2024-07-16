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
                'position' => 'Founder',
                'founded_year' => 0,
                'profile_photo' => 'https://mail.google.com/mail/u/0?ui=2&ik=3dd596077b&attid=0.6&permmsgid=msg-f:1804643653370617783&th=190b61d761519fb7&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ8TrCvXZD9s0IeWGJiAL6wSrZFimk55U65buMTz9lGQlnz9ZXjfMOt3JmE1bmhzAz2xs4qzOE-dO-9jvMsBdPCDmcZb2Szkt6zQ8qoQUVT-MeohwVQ65QooQIo&disp=emb&realattid=ii_190b61d1796d785ceca6',
                'team_size' => '',
                'current_revenue' => '',
                'current_customers_base_size' => '',
                'industry_sector' => '',
                'company_description' => 'Nestled within nature\'s embrace in Singapore, SCENT JOURNER invite you on a journey to discover a world of uplifting fragrances. At Scent Journer, we care deeply about making a positive impact.',
                'functional_area_1' => '',
                'functional_area_2' => '',
                'functional_area_3' => '',
                'hear_about_us' => '',
                'current_problem' => '',
                'additional_information' => 'This journey has taken her to develop what we now call mindful perfumes,fragrances that inspire to be a constant companion on your wellness journey, in your ups and downs, and in every precious moment.'
            ],

            [
                'company_name' => 'Werms.inc',
                'company_uen' => '',
                'position' => 'Founder',
                'founded_year' => 0,
                'team_size' => '',
                'current_revenue' => '',
                'current_customers_base_size' => '0',
                'industry_sector' => '',
                'company_description' => 'Werms.inc is an Insect farm that upcycles food waste into animal feed and plant fertilisers. ',
                'functional_area_1' => '',
                'functional_area_2' => '',
                'functional_area_3' => '',
                'hear_about_us' => '',
                'current_problem' => '',
                'additional_information' => 'Werms.inc is also an enrichment providor and vendor for sustainability related hands-on workshop. We conduct our workshops at all local and private preschools, MOE schools, IHLs, Universities',
            ],

            [   'company_name' => 'Wake The Crew',
                'company_uen' => '',
                'position' => 'Founder',
                'founded_year' => 2020,
                'team_size' => '0',
                'current_revenue' => '',
                'current_customers_base_size' => '0',
                'industry_sector' => '0',
                'company_description' => 'At Wake The Crew, we understand the struggle of busy professionals who crave a great cup of coffee but are always on the go. ',
                'functional_area_1' => '0',
                'functional_area_2' => '0',
                'functional_area_3' => '0',
                'hear_about_us' => '',
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
