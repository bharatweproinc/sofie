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
            [
                'qualifications' => 'Steven is based in the Bay Area and has a passion for driving innovation and strategic growth at groundbreaking startups, especially in AI.',
                'industry_sector' => ['Innovation and strategic growth '],
                'mentored_company' => 'Yes',
                'functional_area' => 'global market dynamics',
                'hear_about_us' => [],
                'experience' => 20,
                'number_of_companies' => 0,
                'additional_information' => 'Steven Kim is an experienced executive with a diverse academic background and extensive professional experience in both the US and Asia. He holds two engineering master\'s degrees from the University of Michigan and an MBA from Columbia University. His career began as an engineer at Intel, where he worked from 2000 to 2007, honing his technical skills and gaining valuable industry insights.
                In 2009, Steven transitioned to a strategic role at Samsung Electronics, where he contributed to the Corporate Strategy team until 2016. This role allowed him to develop a deep understanding of global market dynamics and strategic planning. After leaving Samsung, he shifted his focus to the dynamic world of startups, taking on executive roles and driving innovation and growth in various high-tech companies.
                Currently, Steven serves as the Chief Executive Officer at NOTA America Inc, a leading edge AI Software startup. In this role, he leverages his extensive experience in engineering, strategy, and executive leadership to drive the company’s vision and growth. Steven is passionate about mentoring and sharing his knowledge, aiming to guide the next generation of leaders in navigating the complexities of the tech industry.'

            ],

            [
                'qualifications' => 'Julia is based in Singapore and has worked as a finance professional in New York, Hong Kong, and Singapore.  In addition to ESG topics, her interests include musical theater, ceramic art, and skiing.',
                'industry_sector' => ['Investment banking','Corporate M&A'],
                'mentored_company' => 'yes',
                'functional_area' => 'financings',
                'hear_about_us' => [],
                'number_of_companies' => 0,
                'experience' => 20,
                'additional_information' => 'Julia is a seasoned finance executive with over 20 years of experience from investment banking and corporate M&A.  She has executed sales, acquisitions, mergers, partnerships, and financings across Asia, the U.S., and Europe.  She is well-versed in cross-border deals and thrives in high-pressure environments, bringing an analytical approach to solving complex problems.
                At Allianz, she oversaw corporate development for Asia and was a member of the Asia Pacific Executive Board of Management, the governing body for Allianz business units in Asia.  She was also the Board Sponsor for Allianz\'s Sustainability agenda for Asia.  Prior to Allianz, she spent 10 years in the Investment Banking Division of Goldman Sachs in New York and Hong Kong.  During this time, she advised companies across the Financial Institutions industry, including banks, insurance companies, asset managers, and fintech firms. '
            ],

            [
                'qualifications' => ' Soon Yu is a best-selling author and expert on innovation and design.',
                'industry_sector' => ['Innovation', 'Design'],
                'mentored_company' => 'yes',
                'experience' => 20,
                'functional_area' => 'exclusivity',
                'hear_about_us' => [],
                'number_of_companies' => 0,
                'additional_information' => 'Soon Yu is a best-selling author and expert on innovation and design.  His latest book, Friction, asks businesses to consider adding MORE friction for their customers and employees in order to create greater engagement, meaning, belonging, rapport, assurance, competence, and exclusivity.
                He most recently served as the Global VP of Innovation and Officer at VF Corporation, parent organization to over 30 global apparel companies, including The North Face, Vans, Timberland, Nautica and Wrangler.  Prior to this, he worked as a general manager at The Clorox Company and Chiquita Brands, as a consultant at Bain and Company, and as a founder for numerous venture-backed startups.'
            ],

            [
                'qualifications' => 'Saira is based in Singapore and has extensive experience in multiple industries in APAC and Europe. She is an avid problem solver and interested in startups, technology and strategy.',
                'industry_sector' => ['Engineering', 'Technology', 'FMCG'],
                'mentored_company' => 'yes',
                'functional_area' => 'Internal consulting',
                'hear_about_us' => [],
                'number_of_companies' => 0,
                'experience' => 20,
                'additional_information' => 'Saira is a Senior Manager, in Global Operations at Meta, with over 16 years of international experience in internal consulting, business development, and general management. She has a strong focus on engineering, technology, FMCG, and non-profit sectors, where she has created and achieved change within high pressure environments, hierarchical organizations while building new partnerships.
                Saira has an MBA from IMD Business School, a BE in Mechanical Engineering from Nanyang Technological University, and a Diploma in Mechatronics. She is a driven, creative, and proficient communicator with more than a decade of C-suite presentation and engagement experience.
                Saira specializes in strategy formulation and implementation, stakeholder management, consultative selling, government relations, partner management, and geographic expansion. She is passionate about empowering and leading cross-functional teams, delivering innovative solutions, and building long-term relationships.
                Saira is also a startup judge at Mass Challenge, a global non-profit startup accelerator.'
            ],
        ];
        foreach ($mentors as $mentor) {
            Mentor::create([
                'qualifications' => $mentor['qualifications'],
                'industry_sector' => $mentor['industry_sector'],
                'mentored_company' => $mentor['mentored_company'],
                'functional_area' => $mentor['functional_area'],
                'hear_about_us' => $mentor['hear_about_us'],
                'number_of_companies' => $mentor['number_of_companies'],
                'additional_information' => $mentor['additional_information'],
                'experience' => $mentor['experience']
            ]);
        }
    }
}
