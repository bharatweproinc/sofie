<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\BannerSection;
use App\Models\Company;
use App\Models\JoinOurCommunitySection;
use App\Models\Mentor;
use App\Models\MissionStatementSection;
use App\Models\Testimonial;
use App\Repository\{MentorRepository, CompanyRepository, TestimonialRepository};
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;


class LandingController extends Controller
{
    private $mentorRepository, $companyRepository, $testimonialRepository;

    public function __construct(MentorRepository $mentorRepository, CompanyRepository $companyRepository, TestimonialRepository $testimonialRepository){
        $this->mentorRepository = $mentorRepository;
        $this->companyRepository = $companyRepository;
        $this->testimonialRepository = $testimonialRepository;
    }

    //
    public function home() {
        $companies = $this->companyRepository->getList();
        $mentors = $this->mentorRepository->getList();
        $testimonials = $this->testimonialRepository->getList();
        $mission_contents = MissionStatementSection::where('id',1)->first();
        $community_contents = JoinOurCommunitySection::where('id',1)->first();
        $banner_contents = BannerSection::where('id',1)->first();
        return Inertia::render('Landing/Home/View',[
            "list" => [
                "banner" => $banner_contents,
                "mission" => $mission_contents,
                "community" => $community_contents,
                "companies" =>  $companies,
                "mentors" => $mentors,
                "testimonials" =>$testimonials
            ]]);
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
        $logged_user = Auth::user();
        $user = User::findOrFail($id);
        $company = Company::where('id', $user->functional_id)->first();
        if($company && $company->profile_photo != null){
            $company->profile_photo = url("storage/company_profile/{$company->profile_photo}");
        }
        if($company && $company->founder_image != null){
            $company->founder_photo = url("storage/company_founder/{$company->founder_image}");
        }
        return Inertia::render('Landing/CompanyDetails/View',[
            'detail' => [
                'logged_user' => $logged_user,
                'user' => $user,
                'company' => $company,
            ],
        ]);
    }

    public function testimonialDetail($id) {
        //id is testimonial id
        $logged_user = Auth::user();
        $testimonial = Testimonial::where('id', $id)->first();
        if($testimonial && $testimonial->image != null){
            $testimonial->profile_photo = url("storage/testimonial/{$testimonial->image}");
        }
        //dd('detail()', $testimonial);
        return Inertia::render('Landing/Testimonials/Edit',[
            'detail' => [
                'id' => $id,
                'logged_user' => $logged_user,
                'testimonial' => $testimonial,
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
        $logged_user = Auth::user();
        $user = User::findOrFail($id);
        $mentor = Mentor::where('id', $user->functional_id)->first();
        if($mentor && $mentor->profile_photo != null){
            $mentor->profile_photo = url("storage/mentor_profile/{$mentor->profile_photo}");
        }
        return Inertia::render('Landing/Mentor/View',[
            'detail' => [
                'logged_user' => $logged_user,
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
    public function findMentors(){
        $response = $this->mentorRepository->getList();
        return Inertia::render('Landing/Home/Components/Mentors',$response);
    }
    public function findCompanies(){
        $response = $this->companyRepository->getList();
        return Inertia::render('Landing/Home/Components/Companies',$response);
    }
    public function adminLogin(){
        if (Auth::user() && Auth::user()->user_role == "admin") {
            return Redirect::route('admin.dashboard');
        }
        return Inertia::render('Landing/AdminLogin/View', []);
    }
    public function userLogin(){
        //Auth::logout();
        if(Auth::user()){
            $role = Auth::user()->user_role;
            if($role == "mentor"){
                return Redirect::route('landing.mentordetail',[
                    'id' => Auth::id()
                ]);

            }else if($role == "entrepreneur"){
                return Redirect::route('landing.companydetail',[
                    'id' => Auth::id()
                ]);
            }
            else if($role == "admin"){
                return Redirect::route('admin.dashboard',[]);
            }
        }else{
            return Inertia::render('Landing/Login/View', []);
        }
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
            if($user->functional_id == null){
                return Redirect::route('landing.mentordetail',[
                    'id' => $user->id
                ]);
            }else{
                $logged_user = Auth::user();
                $data = Mentor::with('user')->where('id', $user->functional_id)->first();
                $data->link = url("storage/mentor_profile/{$data->profile_photo}");
                $data->logged_user = $logged_user;
                return Inertia::render('Landing/Mentor/Review',[
                    'detail' => $data
                ]);
            }

        }else if($role == "entrepreneur"){
            $user = User::findOrFail($user_id);
            return Redirect::route('landing.companydetail',[
                'id' => $user->id
            ]);
        }
    }

    public function notification(){
        $user = Auth::user();
        return Inertia::render('Landing/EmailNotification/view',[
            'user' => $user
        ]);
    }
    public function testimonials(){
        $user = Auth::user();
        return Inertia::render('Landing/Testimonials/Create',[
            'user' => $user
        ]);
    }
    // public function content(){
    //     return Inertia::render('Landing/Dashboard/Content/Banner');
    // }
}
