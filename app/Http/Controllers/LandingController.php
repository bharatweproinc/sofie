<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\Company;
use App\Models\Mentor;
use App\Repository\{MentorRepository, CompanyRepository};
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;


class LandingController extends Controller
{
    private $mentorRepository, $companyRepository;

    public function __construct(MentorRepository $mentorRepository, CompanyRepository $companyRepository){
        $this->mentorRepository = $mentorRepository;
        $this->companyRepository = $companyRepository;
    }

    //
    public function home() {
        return Inertia::render('Landing/Home/View',[]);
    }

    public function contactUs() {
        return Inertia::render('Landing/Contact/View',[]);
    }

    public function login() {
        if (Auth::user() && Auth::user()->user_role == "admin") {
            return Redirect::route('admin.dashboard');
        }
        return Inertia::render('Landing/Login/View',[]);
    }

    public function signup() {
        return Inertia::render('Landing/SignUp/View', []);
    }

    public function companyDetails($id) {
        $user = User::findOrFail($id);
        $company = Company::where('id', $user->functional_id)->first();
        return Inertia::render('Landing/CompanyDetails/View',[
            'detail' => [
                'user' => $user,
                'company' => $company
            ],
        ]);
    }
    public function companyList() {
        return Inertia::render('Landing/CompanyDetails/List',[]);
    }
    public function companyReview() {
        return Inertia::render('Landing/CompanyDetails/Review',[]);
    }

    public function mentorDetails($id) {
        $user = User::findOrFail($id);
        $mentor = Mentor::where('id', $user->functional_id)->first();
        return Inertia::render('Landing/Mentor/View',[
            'detail' => [
                'user' => $user,
                'mentor' => $mentor
            ],
        ]);
    }
    public function mentorList() {
        return Inertia::render('Landing/Mentor/List',[]);
    }
    public function mentorReview() {
        return Inertia::render('Landing/Mentor/Review',[]);
    }
    public function partialMatched() {
        return Inertia::render('Landing/Dashboard/PartialMatched/View');
    }
    public function matched() {
        return Inertia::render('Landing/Dashboard/Matched/View');
    }
    public function profile() {
        return Inertia::render('Landing/Profile/View',[]);
    }

    public function privacy() {
        return Inertia::render('Landing/Privacy/View',[]);
    }

    public function terminology() {
        return Inertia::render('Landing/Terminology/View',[]);
    }

    public function dashBoard() {
        return Inertia::render('Landing/Dashboard/View',[]);
    }

    public function profileSetting() {
        return Inertia::render('Landing/Dashboard/Settings/ProfileSettings/View', []);
    }
    public function accountSetting() {
        return Inertia::render('Landing/Dashboard/Settings/AccountSettings/View',[]);
    }
    public function adminLogin(){
        if (Auth::user() && Auth::user()->user_role == "admin") {
            return Redirect::route('admin.dashboard');
        }
        return Inertia::render('Landing/AdminLogin/View', []);
    }

    public function userLogin(){
        // Auth::logout();
        // return Inertia::render('Landing/Home/View', []);
        return Inertia::render('Landing/Login/View', []);
    }

    public function usersLogin(LoginRequest $request){
        $user = Auth::user();
        if(!$user){
            $request->authenticate();
            $request->session()->regenerate();
            $user = Auth::user();
            $user_id = Auth::id();
        }

        $user_id = $user->id;
        $role = $user->user_role;

        if($role == "mentor"){
            $user = User::findOrFail($user_id);
            return Redirect::route('landing.mentordetail',[
                'id' => $user->id
            ]);

        }else if($role == "entrepreneur"){
            $user = User::findOrFail($user_id);
            return Redirect::route('landing.companydetail',[
                'id' => $user->id
            ]);

        //     return Inertia::render('Landing/CompanyDetails/View',[
        //     'detail' => [
        //         'user' => $user,
        //         'company' => $company
        //     ],
        // ]);
        }


        if($user->functional_id && $role == "mentor"){
            $existing_mentor = Mentor::where('id',$user->functional_id)->first();
            if(!$existing_mentor || !$existing_mentor){
                $first_login_mentor = true;
            }else{
                $first_login_mentor = false;
            }
        }else if($user->functional_id && $role == "entrepreneur"){
            $existing_company = Company::where('id',$user->functional_id)->first();
            if(!$existing_company){
                $first_login_company = true;
            }else{
                $first_login_company = false;
            }
        }
        // return Inertia::render('Landing/Login/View', []);
    }

    public function notification(){
        $user = Auth::user();
        return Inertia::render('Landing/EmailNotification/view',[
            'user' => $user
        ]);
    }
}
