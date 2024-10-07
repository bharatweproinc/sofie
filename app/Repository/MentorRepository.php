<?php

namespace App\Repository;

use App\Mail\NewUserSignupMail;
use App\Mail\PendingProfileMail;
use App\Mail\RecommendedMentorMail;
use App\Repository\Interface\MentorRepositoryInterface;
use Illuminate\Http\Request;
use App\Models\{
    Company,
    MatchingMentorSme,
    User,Mentor,
    PartialMatch
};
use App\Services\MatchSmeMentor;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;

class MentorRepository implements MentorRepositoryInterface {

    public function getList(){
        $user = Auth::user();
        $mentor = Mentor::with('user')->select('id', 'qualifications','industry_sector','mentored_company','functional_area', 'hear_about_us',
        'number_of_companies', 'additional_information', 'experience', 'profile_photo')
        ->get()->each(function($m) {
            $m->profile_photo = url("storage/mentor_profile/{$m->profile_photo}");
        });
        //dd('test', $mentor);
        return ["list" => [
            "user" => $user,
            "mentor" => $mentor
        ]];
    }

    public function getListFindMentors(){
        $user = Auth::user();
        $mentor = Mentor::whereHas('user', function ($query){
            $query->where('status',1);
        })->with('user')->select('id', 'qualifications','industry_sector','mentored_company','functional_area', 'hear_about_us',
            'number_of_companies', 'additional_information', 'experience', 'profile_photo')
            ->get()->each(function($m) {
                $m->profile_photo = url("storage/mentor_profile/{$m->profile_photo}");
            });
        return ["list" => [
            "user" => $user,
            "mentor" => $mentor
        ]];
    }

    public function getListLimit(){
        $user = Auth::user();
        $mentor = Mentor::with('user')->where('featured_mentor','yes')->select('id', 'qualifications','industry_sector','mentored_company','functional_area', 'hear_about_us',
            'number_of_companies', 'additional_information', 'experience', 'profile_photo','featured_mentor')
            ->take(5)->get()->each(function($m) {
                $m->profile_photo = url("storage/mentor_profile/{$m->profile_photo}");
            });
        return ["list" => [
            "user" => $user,
            "mentor" => $mentor
        ]];
    }

    public function get($id) {
        try {
            //dd('review', Auth::user());
            if(Auth::user()){
                $logged_user = Auth::user();
            }else{
                $logged_user = User::where('user_role','mentor')->where('functional_id', $id)->first();
            }
            $data = Mentor::with('user')->where('id', $id)->first();
            $data->profile_photo = url("storage/mentor_profile/{$data->profile_photo}");
            $data->logged_user = $logged_user;
            $matches = MatchingMentorSme::where('mentor_id', $id)->pluck('company_id')->toArray();
            $companies = Company::with('user')->whereIn('id', $matches)
            ->get()->each(function($m) {
                $m->profile_photo = url("storage/company_profile/{$m->profile_photo}");
            });
            $data->companies = $companies;
            //dd($data);
            return [
                'detail' => $data
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
    }

    public function connectedSme($company_id, $mentor_id, $area) {
        try {
            $mentor = Mentor::findOrFail($mentor_id);
            if($mentor){
                $limit = $mentor->number_of_companies;
                $currently_mentoring = MatchingMentorSme::where('mentor_id',$mentor_id)->get();
                //mentor is already mentoring enough sme
                if($limit == count($currently_mentoring)){
                  return Redirect::route('landing.home');
                }else{
                $data = [];
                $company = Company::findOrFail($company_id);
                $user= User::where('functional_id',$company_id)->where('user_role', 'entrepreneur')->first();
                $matches = new MatchSmeMentor();
                $data =  $matches->recommendedMentor($company_id, $mentor_id);
                $data['matched_area'] = $area;
                if($company && $user){
                    Mail::to($user->email)->send(new RecommendedMentorMail($data));
                    $pmatch = PartialMatch::where('mentor_id',$mentor_id)
                    ->where('company_id', $company_id)
                    ->where('functional_area', $area)->first();
                    if(!$pmatch){
                        PartialMatch::create([
                            "mentor_id" => $mentor_id,
                            "company_id" => $company_id,
                            "functional_area" => $area
                        ]);
                    }
                }
                return [
                    'success' => true,
                    'message' => 'Email sent!'
                ];
            }
            }
            //Show a notifier that company has been notified about the connect request
        }catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
    }


    public function saveData(Request $request, $id)
    {
        //dd($request->experience);
        try{
            $fileName = null;
            $diff_in_days = 0;
            $user = User::findOrfail($id);
            
            $qualifications = $request->qualifications;
            $words = explode(' ', $qualifications);
            if (count($words) > 40) {
                $words = array_slice($words, 0, 40);
                $qualifications = implode(' ', $words);
            }
            $data = [
                'qualifications' => $qualifications,
                'industry_sector' => $request->industry_sector,
                'functional_area' => $request->functional_area,
                'mentored_company' => $request->mentored_company,
                'hear_about_us' =>$request->hear_about_us,
                'number_of_companies' => $request->number_of_companies,
                'additional_information' => $request->additional_information,
                'experience' => $request->experience
            ];

            $user_data = [
                'name' => $request->name,
                'email' => $request->email,
                'phone' => $request->phone
            ];
            //saving image in db
            if($request->hasFile('profile_photo')){
                $fileName =  $this->uploadFile($request->file('profile_photo'),'mentor_profile');
            }

            $mentor = Mentor::where('id', $user->functional_id)->first();
            if($mentor && $mentor->updated_at != null){
                $current_day = Carbon::now();
                $updated_at = Carbon::parse($mentor->updated_at);
                $diff_in_days = $updated_at->diffInDays($current_day);
                if($diff_in_days >= 7 || (Auth::user() && Auth::user()->user_role =="admin") || (Auth::user() && Auth::user()->user_role =="entrepreneur")){
                    $mentor->update($data);
                    $user->update($user_data);
                }
            }else {
                $mentor = Mentor::create($data);
                if($fileName != null){
                    $mentor->profile_photo = $fileName;
                    $mentor->save();
                }
                $user->functional_id = $mentor->id;
                $user->status = 0;
                $user->save();
                $user_type = "Mentor";
                Mail::to($user->email)->send(new PendingProfileMail($user_type));
                Mail::to("hello@upcie.net")->send(new NewUserSignupMail($user_type));
                //Mail::to("abcd@yopmail.com")->send(new NewUserSignupMail($user_type));

            }

            if(($fileName != null && $diff_in_days >= 7) || ($fileName != null && Auth::user() && Auth::user()->user_role =="admin")  || (Auth::user() && Auth::user()->user_role =="mentor")){
                $mentor->profile_photo = $fileName;
                $mentor->save();
            }

            return [
                'success' => true,
                'data' => $mentor
            ];
        }catch (\Exception $e) {
            return [
                'success' => false,
                'error' => $e->getMessage()
            ];
        }
    }

    public function uploadFile($file, $folderName) {
        $fileName = uniqid() . '_' . time() . '_' . $file->getClientOriginalName();
        $fileType = $file->getClientOriginalExtension();
        $file->storeAs("public/{$folderName}", $fileName);
        return $fileName;
    }
}
