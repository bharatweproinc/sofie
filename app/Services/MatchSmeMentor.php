<?php

namespace App\Services;

use App\Models\Company;
use App\Models\Mentor;

class MatchSmeMentor{

    public function matchingSme($id){
        $data = [];
        $matched_sme_ids = [];
        $mentor = Mentor::where('id', $id)->first();

        $matched_sme_ids = Company::where('functional_area_1', $mentor->functional_area)
        ->orWhere('functional_area_2', $mentor->functional_area)
        ->orWhere('functional_area_3', $mentor->functional_area)->pluck('id')->toArray();

        $matched_sme_names = Company::whereIn('id',$matched_sme_ids)->pluck('company_name')->toArray();
        $matched_sme_person = Company::whereIn('id',$matched_sme_ids)->pluck('contact_name')->toArray();
        $matched_sme_image = Company::whereIn('id',$matched_sme_ids)->pluck('profile_photo')->toArray();

        $data = [
            'matched_sme_ids' => $matched_sme_ids,
            'matched_sme_names' => $matched_sme_names,
            'matched_sme_person' => $matched_sme_person,
            'matched_sme_image' => $matched_sme_image,
        ];
        return $data;
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
