<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\Auth\LoginRequest;
use App\Mail\ForgetPasswordEmail;
use App\Models\BannerSection;
use App\Models\Company;
use App\Models\EmailController;
use App\Models\JoinOurCommunitySection;
use App\Models\Mentor;
use App\Models\MissionStatementSection;
use App\Models\Testimonial;
use App\Repository\{MentorRepository, CompanyRepository, TestimonialRepository};
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;


class LandingController extends Controller
{
    private $mentorRepository, $companyRepository, $testimonialRepository;

    public function __construct(MentorRepository $mentorRepository, CompanyRepository $companyRepository, TestimonialRepository $testimonialRepository){
        $this->mentorRepository = $mentorRepository;
        $this->companyRepository = $companyRepository;
        $this->testimonialRepository = $testimonialRepository;
    }

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
        //dd('test', Auth::user());
        return Inertia::render('Landing/SignUp/View', []);
    }

    public function companyDetails($id) {
        if(Auth::user()){
            $logged_user = Auth::user();
        }else{
            $logged_user = User::where('user_role','entrepreneur')->where('functional_id', $id)->first();
        }
        $user = User::findOrFail($id);
        $user->status = 1;
        $user->save();
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
        if(Auth::user()){
            $logged_user = Auth::user();
        }else{
            $logged_user = User::where('user_role','mentor')->where('functional_id', $id)->first();
        }
        //dd($id,$logged_user);
        $user = User::findOrFail($id);
        $user->status = 1;
        $user->save();
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
        $response = $this->companyRepository->getList();
        return Inertia::render('Landing/Dashboard/PartialMatched/View', $response);
    }
    public function matched() {
        $response = $this->companyRepository->getList();
       // $response['list']['company']

        $matched = Company::with('user')->whereNotNull('assigned_mentor_1')
        ->whereNotNull('assigned_mentor_2')
        ->whereNotNull('assigned_mentor_3')
        ->get()
        ->each(function($m) {
            $m->profile_photo = url("storage/company_profile/{$m->profile_photo}");
            $m->founder_photo = url("storage/company_founder/{$m->founder_image}");
            $m->assigned_mentor_1 = $this->getMentorName($m->assigned_mentor_1);
            $m->assigned_mentor_2 = $this->getMentorName($m->assigned_mentor_2);
            $m->assigned_mentor_3 = $this->getMentorName($m->assigned_mentor_3);
        });
        $response['list']['company'] = $matched;
        return Inertia::render('Landing/Dashboard/Matched/View', $response);
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

    public function profile() {
        return Inertia::render('Landing/Profile/View',[]);
    }

    public function privacy() {
        return Inertia::render('Landing/Privacy/View',[]);
    }
    public function faq() {
        return Inertia::render('Landing/FAQ/View',[]);
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
        //dd('login check', Auth::user());
        // Auth::logout();
        if(Auth::user()){
            $user = Auth::user();
            $role = Auth::user()->user_role;
            $status = Auth::user()->status;
            if($role == "entrepreneur" && $status == 1){
                if($user->functional_id == null){
                    return Redirect::route('landing.companydetail',[
                        'id' => $user->id
                    ]);
                }else{
                    return Redirect::route('company.detail',[
                        'id' => $user->functional_id
                    ]);
                }
            }else if($role == "mentor" && $status == 1){
                if($user->functional_id == null){
                    return Redirect::route('landing.mentordetail',[
                        'id' => $user->id
                    ]);
                }else if($user->functional_id){
                    return Redirect::route('mentor.detail',[
                        'id' => $user->functional_id
                    ]);
                }
            }else if($role == "admin" ){
                return Redirect::route('admin.dashboard',[]);
            }else if($role == "mentor" && $status == 0){
                Auth::logout();
                return Inertia::render('Landing/Login/View', []);
            }else if($role == "entrepreneur" && $status == 0){
                Auth::logout();
                return Inertia::render('Landing/Login/View', []);
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
            $role = $user->user_role;
            $status = $user->status;
        }else{
            $role = $user->user_role;
            $status = $user->status;
        }
        if($role == "entrepreneur" && $status == 1){
            if($user->functional_id == null){
                return Redirect::route('landing.companydetail',[
                    'id' => $user->id
                ]);
            }else{
                return Redirect::route('company.detail',[
                    'id' => $user->functional_id
                ]);
            }
        }else if($role == "mentor" && $status == 1){
            if($user->functional_id == null){
                return Redirect::route('landing.mentordetail',[
                    'id' => $user->id
                ]);
            }else{
                return Redirect::route('mentor.detail',[
                    'id' => $user->functional_id
                ]);
            }
        }else{
            return Redirect::back()->withErrors(['msg' => 'Your account has been either suspended or under verification by our team.']);
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

    public function forgetPassword(Request $request){
        try{
            //dd($request->all());
            $registered_email = $request->email;
            $existing_user = User::where('email', $registered_email)->first();
            if($existing_user){
                $new_password = $this->passwordGenerator();
                $existing_user->password = Hash::make($new_password);
                $existing_user->save();
                Mail::to($registered_email)->send(new ForgetPasswordEmail($new_password));
            }else{
                Auth::logout();
                return response()->withErrors(['message' => 'Email not registered with Upcie']);
            }
        }catch(\Exception $e){
            return $e->getMessage();
        }

    }

    public function passwordGenerator(){
        $len = 8;
        $sets = array();
        $sets[] = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
        $sets[] = 'abcdefghjkmnpqrstuvwxyz';
        $sets[] = '123456789';
        $sets[]  = '!@#$%&*/?';

        $new_password = '';
        foreach ($sets as $set) {
            $new_password .= $set[array_rand(str_split($set))];
        }

        while(strlen($new_password) < $len) {
            $randomSet = $sets[array_rand($sets)];
            $new_password .= $randomSet[array_rand(str_split($randomSet))];
        }

        return str_shuffle($new_password);
    }
}
