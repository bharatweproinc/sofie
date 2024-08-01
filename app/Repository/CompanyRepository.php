<?php

namespace App\Repository;

use App\Mail\PendingProfileMail;
use App\Repository\Interface\CompanyRepositoryInterface;
use Illuminate\Http\Request;
use App\Models\{
    Company,
    MatchingMentorSme,
    Mentor,
    User,
};
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

class CompanyRepository implements CompanyRepositoryInterface {

    public function getList(){
        $user = Auth::user();
        $company = Company::with('user')->get()->each(function($m) {
            $m->profile_photo = url("storage/company_profile/{$m->profile_photo}");
            $m->founder_photo = url("storage/company_founder/{$m->founder_image}");
            $m->assigned_mentor_1 = $this->getMentorName($m->assigned_mentor_1);
            $m->assigned_mentor_2 = $this->getMentorName($m->assigned_mentor_2);
            $m->assigned_mentor_3 = $this->getMentorName($m->assigned_mentor_3);
        });
        // dd($company);
        return ["list" => [
            "user" => $user,
            "company" => $company
        ]];
    }

    public function getMentorName($mentor_id){
        $name = null;
        if($mentor_id != null){
            $mentor = User::where('user_role', 'mentor')->where('functional_id', $mentor_id)->select('name')->first();
            if($mentor){
                $name = $mentor->name;
            }
            return $name;
        }else{
            return null;
        }
    }

    public function saveData(Request $request, $id){
        try {
           // dd($request->all());
            $fileName = null;
            $founderImage = null;
            $diff_in_days = 0;
            $user = User::findOrfail($id);
            $data = [
                'company_name' => $request->company_name,
                'company_uen' => $request->company_uen,
                'phone' => $request->phone,
                'email' => $request->email,
                'position' => $request->position,
                'username' => $user->name,
                'password' => $user->password,
                'founded_year' => $request->founded_year,
                'team_size' => $request->team_size,
                'current_revenue' => $request->current_revenue,
                'current_customers_base_size' => $request->current_customers_base_size,
                'industry_sector' => $request->industry_sector,
                'company_description' => $request->company_description,
                'functional_area_1' => $request->functional_area_1,
                'functional_area_2' => $request->functional_area_2,
                'functional_area_3' => $request->functional_area_3,
                'hear_about_us' => $request->hear_about_us,
                'current_problem' => $request->current_problem,
                'additional_information' => $request->additional_information,
                'contact_name' => $request->contact_name
            ];

            $user_data = [
                'name' => $request->name,
                'email' => $request->email,
                'phone' => $request->phone
            ];

            //saving image in db
            if($request->hasFile('profile_photo')){
                $fileName =  $this->uploadFile($request->file('profile_photo'),'company_profile');
            }
            if($request->hasFile('founder_photo')){
                $founderImage =  $this->uploadFile($request->file('founder_photo'),'company_founder');
            }
            //dd($fileName, $founderImage);

            $company = Company::where('id', $user->functional_id)->first();
            if($company && $company->updated_at != null){
                $current_day = Carbon::now();
                $updated_at = Carbon::parse($company->updated_at);
                $diff_in_days = $updated_at->diffInDays($current_day);
                if($diff_in_days >= 7 || Auth::user()->user_role =="admin"){
                    $company->update($data);
                    $user->update($user_data);
                }
            }else {
                $company = Company::create($data);
                if($fileName != null){
                    $company->profile_photo = $fileName;
                    $company->save();
                }
                if($founderImage != null){
                    $company->founder_image = $founderImage;
                    $company->save();
                }
                $user->functional_id = $company->id;
                $user->status = 0;
                $user->save();
                Mail::to($user->email)->send(new PendingProfileMail($user->name));
            }
            if(($fileName != null && $diff_in_days >= 7) || ($fileName != null && Auth::user() && Auth::user()->user_role =="admin")){
                $company->profile_photo = $fileName;
                $company->save();
            }
            if(($founderImage != null && $diff_in_days >= 7) || ($founderImage != null && Auth::user() && Auth::user()->user_role =="admin")){
                $company->founder_image = $founderImage;
                $company->save();
            }
            return [
                'success' => true,
                'data' => $company
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'error' => $e->getMessage()
            ];
        }
    }

    public function getData($id) {
        try {
            if(Auth::user()){
                $logged_user = Auth::user();
            }else{
                $logged_user = User::where('user_role','mentor')->where('functional_id', $id)->first();
            }
            $data = Company::with('user')->where('id',$id)->first();
            if($data->profile_photo != null){
                $data->profile_photo = url("storage/company_profile/{$data->profile_photo}");
            }
            if($data->founder_image != null){
                $data->founder_photo = url("storage/company_founder/{$data->founder_image}");
            }
            $data->logged_user = $logged_user;
            $matches = MatchingMentorSme::where('company_id', $id)->pluck('mentor_id')->toArray();
            $mentors = Mentor::with('user')->whereIn('id', $matches)
            ->get()->each(function($m) {
                $m->profile_photo = url("storage/mentor_profile/{$m->profile_photo}");
            });
            $data->mentors = $mentors;
            return [ 'detail' => $data ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage(),
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
