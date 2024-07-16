<?php

namespace Database\Seeders;

use App\Models\Mentor;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MentorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $mentors = [
            ['qualifications' => 'He holds two engineering master degrees from the University of Michigan and an MBA from Columbia University.',
            'industry_sector' => 'Innovation and strategic growth ',
            'mentored_company' => 'Yes',
            'functional_area' => 'global market dynamics and strategic planning. ',
            'hear_about_us' => 'NA',
            'number_of_companies' => '0',
            'additional_information' => 'Currently, Steven serves as the Chief Executive Officer at NOTA America Inc, a leading edge AI Software startup.'
            ],

            ['qualifications' => '',
            'industry_sector' => 'Investment banking and Corporate M&A',
            'mentored_company' => 'yes',
            'functional_area' => 'Sales, acquisitions, mergers, partnerships, and financings ',
            'hear_about_us' => 'NA',
            'number_of_companies' => '0',
            'additional_information' => 'Prior to Allianz, she spent 10 years in the Investment Banking Division of Goldman Sachs in New York and Hong Kong'
            ],

            ['qualifications' => '',
            'industry_sector' => 'Innovation and Design. ',
            'mentored_company' => 'yes',
            'functional_area' => 'Creating greater engagement, meaning, belonging, rapport, assurance, competence, and exclusivity',
            'hear_about_us' => 'NA',
            'number_of_companies' => '0',
            'additional_information' => 'He most recently served as the Global VP of Innovation and Officer at VF Corporation, parent organization to over 30 global apparel companies, including The North Face'
            ],

            ['qualifications' => 'Saira has an MBA from IMD Business School, a BE in Mechanical Engineering from Nanyang Technological University, and a Diploma in Mechatronics.',
            'industry_sector' => 'Engineering, Technology, FMCG, and Non-profit sectors',
            'mentored_company' => 'Meta',
            'functional_area' => 'Internal consulting, Business development, and General management',
            'hear_about_us' => 'NA',
            'number_of_companies' => '0',
            'additional_information' => 'Saira is also a startup judge at Mass Challenge, a global non-profit startup accelerator.'
            ],
        ];
        foreach ($mentors as $mentor) {
           // $existingUser = Mentor::where('qualifications', $mentor['qualifications'])->first();
            //if (!$existingUser) {
                Mentor::create([
                    'qualifications' => $mentor['qualifications'],
                    'industry_sector' => $mentor['industry_sector'],
                    'mentored_company' => $mentor['mentored_company'],
                    'functional_area' => $mentor['functional_area'],
                    'hear_about_us' => $mentor['hear_about_us'],
                    'number_of_companies' => $mentor['number_of_companies'],
                    'additional_information' => $mentor['additional_information'],
                ]);
           // }
        }
    }
}
