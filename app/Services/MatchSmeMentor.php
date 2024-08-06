<?php

namespace App\Services;

use App\Models\Company;
use App\Models\MatchingMentorSme;
use App\Models\Mentor;
use App\Models\User;
use Illuminate\Support\Facades\Redirect;

class MatchSmeMentor{

    public function matchingSme($id){
        try{
            $data = [];
            $mentor = Mentor::findOrFail($id);
            if($mentor){
                $user = User::where('user_role','mentor')->where('functional_id',$id)->select('name')->first();
                $accepted_sme = User::where('user_role', 'entrepreneur')->where('is_accepted',1)->pluck('functional_id')->toArray();
                $companies = Company::whereIn('id', $accepted_sme)->where('assigned_mentor_1', null)->where('functional_area_1' , $mentor->functional_area)
                ->orWhere('assigned_mentor_2',null)->where('functional_area_2', $mentor->functional_area)
                ->orWhere('assigned_mentor_3',null)->where('functional_area_3', $mentor->functional_area)->get()->each(function($sme) {
                        $sme->profile_photo = url("storage/company_profile/{$sme->profile_photo}");
                        $sme->link = url("/connect/company/".$sme->id);
                    });
                $data = [
                    'matched_smes' => $companies,
                    'user_name' => $user->name,
                    'mentor_id' => $id
                ];
                return $data;
            }else{
                return [
                    'msg' => 'No mentor found',
                    'success' => false
                ];
            }
        }catch(\Exception $e){
            return $e->getMessage();
        }
    }

    public function recommendedMentor($company_id, $mentor_id){
        $data = [];
        $user = User::where('user_role','entrepreneur')->where('functional_id',$company_id)->select('name')->first();
        $recomm_mentor = Mentor::findOrFail($mentor_id);
        if($recomm_mentor && $recomm_mentor->profile_photo != null){
            $recomm_mentor->profile_photo = url("storage/mentor_profile/{$recomm_mentor->profile_photo}");
            $recomm_mentor->name = $this->getName($mentor_id);
        }

        $data = [
            'mentor' => $recomm_mentor,
            'user_name' => $user->name,
            'company_id' => $company_id
        ];
        return $data;
    }

    public function sendMentorDetails($company_id, $mentor_id){
        $data = [];
        $recomm_mentor = Mentor::with('user')->findOrFail($mentor_id);
        $user = User::where('user_role','entrepreneur')->where('functional_id',$company_id)->select('name')->first();
        if($recomm_mentor && $recomm_mentor->profile_photo != null){
            $recomm_mentor->profile_photo = url("storage/mentor_profile/{$recomm_mentor->profile_photo}");
            $recomm_mentor->name = $this->getName($mentor_id);
            $recomm_mentor->email = $recomm_mentor->user->email;
            $recomm_mentor->phone = $recomm_mentor->user->phone;
        }

        $data = [
            'mentor' => $recomm_mentor,
            'user_name' => $user->name
        ];
        return $data;
    }

    public function sendSmeDetails($company_id, $mentor_id){
        $data = [];
        $mentor = Mentor::with('user')->where('id',$mentor_id)->first();
        $recomm_sme = Company::findOrFail($company_id);
        if($recomm_sme && $recomm_sme->profile_photo != null){
            $recomm_sme->profile_photo = url("storage/company_profile/{$recomm_sme->profile_photo}");
            $recomm_sme->name = $recomm_sme->user->name;
            $recomm_sme->email = $recomm_sme->user->email;
            $recomm_sme->phone = $recomm_sme->user->phone;
        }
        $data = [
            'company' => $recomm_sme,
            'user_name' => $mentor->user->name,
            'functional_area' =>$mentor->functional_area
        ];
        return $data;
    }

    public function getName($id){
        $user = User::where('user_role', 'mentor')->where('functional_id', $id)->select('name')->first();
        return $user->name;
    }

}
