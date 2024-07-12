<?php

namespace App\Repository;

use App\Repository\Interface\MentorRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use App\Models\{
    User,
};

use App\Models\{
    Mentor,
};
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;

class MentorRepository implements MentorRepositoryInterface {

    public function getList(){
        //$list = Mentor::select('id','email','phone','created_at')->get();
        $list = Mentor::with('user')->select('id', 'qualifications','industry_sector','mentored_company','functional_area', 'hear_about_us',
            'number_of_companies', 'additional_information')->get();
        // $userlist = User::select('phone', 'email')->get();
        // dd($userlist);
        return ["list" => $list];
    }

    public function get($id) {
        try {
            $data = Mentor::with('user')->find($id);
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
        try{
            $user = User::findOrfail($id);
            // $validator = Validator::make($request->all(), [
            //     'name' => 'required|string|max:255',
            //     'email' => 'required|string|email|max:255|unique:users,email',
            //     'password' => ['required', Rules\Password::defaults()],
            //     'username' => 'required|string|max:255',
            //     'phone' => 'required|string|max:20',
            //     'qualifications' => 'required|string|max:255',
            //     'industry_sector' => 'required|string|max:255',
            //     'mentored_company' => 'required|string|max:255',
            //     'functional_area' => 'required|string|max:255',
            //     'hear_about_us' => 'required|string|max:255',
            //     'number_of_companies' => 'required|integer|min:1',
            // ]);
            // if($validator->fails()){
            //     return [
            //         'success' => false,
            //         'data' => "validation error occured"
            //     ];
            // }
            $data = [
                'qualifications' => $request->qualifications,
                'industry_sector' => $request->industry_sector,
                'functional_area' => $request->functional_area,
                'mentored_company' => $request->mentored_company,
                'hear_about_us' =>$request->hear_about_us,
                'number_of_companies' => $request->number_of_companies,
                'additional_information' => $request->additional_information
            ];

            $mentor = Mentor::where('id', $user->functional_id)->first();
            if($mentor){
                $mentor->update($data);
            }else {
                $mentor = Mentor::create($data);
                $user->functional_id = $mentor->id;
                $user->save();
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
}
