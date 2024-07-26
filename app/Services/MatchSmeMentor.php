<?php

namespace App\Services;

use App\Models\Company;
use App\Models\Mentor;

class MatchSmeMentor{

    public function matchingSme($id){
        $list = [];
        $matched_sme_ids = [];
        $mentor = Mentor::where('id', $id)->first();

        $matched_sme_ids = Company::where('functional_area_1', $mentor->functional_area)
        ->orWhere('functional_area_2', $mentor->functional_area)
        ->orWhere('functional_area_3', $mentor->functional_area)->pluck('id')->toArray();

        $list = Company::with('user')->whereIn('id',$matched_sme_ids)->get()->each(function($m) {
            $m->profile_photo = url("storage/company_profile/{$m->profile_photo}");
            $m->founder_photo = url("storage/company_founder/{$m->founder_image}");
        });

        dd($list);
        return $list;
    }

    public function matchingMentors($id){
        $list_matched_mentors = [];
        $company = Company::where('id', $id)->first();

        $list_matched_mentors = Mentor::where('functional_area', $company->functional_area_1)
        ->orWhere('functional_area', $company->functional_area_2)
        ->orWhere('functional_area', $company->functional_area_3)->pluck('id')->toArray();

        return $list_matched_mentors;
    }

}
