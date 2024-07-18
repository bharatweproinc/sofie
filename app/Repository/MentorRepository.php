<?php

namespace App\Repository;

use App\Repository\Interface\MentorRepositoryInterface;
use Illuminate\Http\Request;
use App\Models\{
    User,Mentor
};
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;


class MentorRepository implements MentorRepositoryInterface {

    public function getList(){
        $user = Auth::user();
        $mentor = Mentor::with('user')->select('id', 'qualifications','industry_sector','mentored_company','functional_area', 'hear_about_us',
            'number_of_companies', 'additional_information', 'experience', 'profile_photo')
            ->get()->each(function($m) {
                $m->link = url("storage/mentor_profile/{$m->profile_photo}");
            });
        return ["list" => [
            "user" => $user,
            "mentor" => $mentor
        ]];
    }

    public function get($id) {
        try {
            $logged_user = Auth::user();
            $data = Mentor::with('user')->where('id', $id)->first();
            $data->link = url("storage/mentor_profile/{$data->profile_photo}");
            $data->logged_user = $logged_user;
            return [ 'detail' => $data ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
    }

    public function saveData(Request $request, $id)
    {
        // dd($request->all());
        try{
            $fileName = null;
            $diff_in_days = 0;
            $user = User::findOrfail($id);
            $data = [
                'qualifications' => $request->qualifications,
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

            $user->update($user_data);

            //saving image in db
            if($request->hasFile('profile_photo')){
                $fileName =  $this->uploadFile($request->file('profile_photo'),'mentor_profile');
            }

            $mentor = Mentor::where('id', $user->functional_id)->first();
            if($mentor && $mentor->updated_at != null){
                $current_day = Carbon::now();
                $updated_at = Carbon::parse($mentor->updated_at);
                $diff_in_days = $updated_at->diffInDays($current_day);
                if($diff_in_days >= 7 || Auth::user()->user_role =="admin"){
                    $mentor->update($data);
                }
            }else {
                $mentor = Mentor::create($data);
                $user->functional_id = $mentor->id;
                $user->save();
            }

            if(($fileName != null && $diff_in_days >= 7) || ($fileName != null && Auth::user()->user_role =="admin")){
                $mentor->profile_photo = $fileName;
                $mentor->save();
            }
            return [
                'success' => true,
                'data' => $mentor
            ];
        }catch (\Exception $e) {
            dd($e);
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
