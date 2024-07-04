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
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;

class MentorRepository implements MentorRepositoryInterface {

    public function getList(){
        $list = User::select('id','email','phone','created_at')->get();
        return $list;
    }

    public function get($id) {
        try {
            $data = User::find($id);

            return [
                'success' => true,
                'data' => $data,
                'message' => "Get mentor details successfully",
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
    }

    public function saveData(Request $request): RedirectResponse
    {
        return Redirect::route('landing.login-page');

        dd($request->all());
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email',
            'password' => ['required', Rules\Password::defaults()],
            'username' => 'required|string|max:255',
            'phone' => 'required|string|max:20',
            'qualifications' => 'required|string|max:255',
            'industry_sector' => 'required|string|max:255',
            'mentored_company' => 'required|string|max:255',
            'functional_area' => 'required|string|max:255',
            'hear_about_us' => 'required|string|max:255',
            'number_of_companies' => 'required|integer|min:1',
        ]);
        try{
            $mentor = Mentor::create([
                'industry_sector' => $request->industry_sector,
                'qualifications' => $request->qualifications,
                'mentored_company' => $request->mentored_company,
                'functional_area' => $request->functional_area,
                'hear_about_us' => $request->hear_about_us,
                'number_of_companies' => $request->number_of_companies,
                'number_of_companies' => $request->number_of_companies,
            ]);
    
            $user = new User;
            $user->name = $request->name;
            $user->phone = $request->phone;
            $user->email = $request->email;
            $user->user_name = $request->username;
            $user->password = Hash::make($request->password);
            $user->user_role = 'mentor';
            $user->functional_id = $mentor->id;
            $user->save();
    
            return Redirect::route('login-page');

        }catch(\Exception $e){
            return response()->json([
                'msg' => $e->getMessage(),
                'success' => false
            ]);
        }
    }


}
