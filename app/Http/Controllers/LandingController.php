<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\Auth\LoginRequest;
use App\Mail\ContactUsMail;
use App\Mail\DeclinedMentor;
use App\Mail\DeclinedSME;
use App\Mail\ForgetPasswordEmail;
use App\Mail\RemovedMentor;
use App\Mail\RemovedSme;
use App\Models\BannerSection;
use App\Models\Company;
use App\Models\DeclinedMentorsSme;
use App\Models\EmailController;
use App\Models\JoinOurCommunitySection;
use App\Models\MatchingMentorSme;
use App\Models\MatchingQueue;
use App\Models\Mentor;
use App\Models\MissionStatementSection;
use App\Models\RemovedMentorsSmes;
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
        $companies = $this->companyRepository->getListLimit();
        $mentors = $this->mentorRepository->getListLimit();
        $testimonials = $this->testimonialRepository->getListLimit();
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

    public function contact(Request $request) {
        try{
            $data = [
                'name' => $request->name,
                'email' => $request->email,
                'message' => $request->message,
                'company' => $request->company
            ];
            Mail::to("hello@upcie.net")->send(new ContactUsMail($data));
            return redirect::route('landing.home')->with(['msg'=> 'Email Sent Successfully']);
            //return Inertia::render('Landing/Contact/View',[]);
        }catch(\Exception $e){
            return $e->getMessage();
        }
    }

    public function termsconditions(){
        return Inertia::render('Landing/TermsAndConditions/View',[]);
    }

    public function login() {
        if (Auth::user() && Auth::user()->user_role == "admin") {
            return Redirect::route('admin.dashboard');
        }
        return Inertia::render('Landing/Login/View',[]);
    }

    public function signup() {
        if(Auth::user()){
           Auth::logout();
           return Inertia::render('Landing/SignUp/View', []);
        }
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
        $response = $this->mentorRepository->getListFindMentors();
        //dd($response);
        return Inertia::render('Landing/Home/Components/Mentors',$response);
    }
    public function findCompanies(){
        $response = $this->companyRepository->getListBrowseCompanies();
        return Inertia::render('Landing/Home/Components/Companies',$response);
    }
    public function adminLogin(){
        if (Auth::user() && Auth::user()->user_role == "admin") {
            return Redirect::route('admin.dashboard');
        }
        return Inertia::render('Landing/AdminLogin/View', []);
    }
    public function userLogin(){
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
            //dd(Auth::attempt());
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

    public function notification($id, $user_role){
        //$user = Auth::user();
        if($user_role == "mentor"){
            $user = User::where('user_role', 'mentor')->where('id',$id)->first();
        }else{
            $user = User::where('user_role', 'entrepreneur')->where('id',$id)->first();
        }
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

    public function pressContent(){
        $user = Auth::user();
        return Inertia::render('Landing/Press/Create',[
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

    public function declineSme($mentor_id, $company_id){
        try{
            return Inertia::render('Landing/DeclineDropDown/CompanyView',[
                'details' =>[
                    'mentor_id' =>$mentor_id,
                    'company_id' => $company_id
                ]
            ]);
        }catch(\Exception $e){
            return $e->getMessage();
        }
    }
    public function declineMentor($mentor_id, $company_id){
        try{
            return Inertia::render('Landing/DeclineDropDown/MentorView',[
                'details' =>[
                    'mentor_id' =>$mentor_id,
                    'company_id' => $company_id
                ]
            ]);
        }catch(\Exception $e){
            return $e->getMessage();
        }
    }

    // public function removeMentor($mentor_id, $company_id){
    //     try{
    //         return Inertia::render('Landing/RemoveDropDown/MentorView',[
    //             'details' =>[
    //                 'mentor_id' =>$mentor_id,
    //                 'company_id' => $company_id
    //             ]
    //         ]);
    //     }catch(\Exception $e){
    //         return $e->getMessage();
    //     }
    // }

    public function declineMentorReason(Request $request){
        $data = [
            'mentor_id' => $request->mentor_id,
            'company_id' => $request->company_id,
            'decline_type' => "Mentor rejected by Mentee(SME)",
            'decline_message' => $request->reason
        ];
        $decline = DeclinedMentorsSme::where('mentor_id', $request->mentor_id)->where('company_id', $request->company_id)->where('decline_type', 'Mentor rejected by SME')->first();
        $decline_user = User::where('user_role','mentor')->where('functional_id', $request->mentor_id)->first();
        if($decline){
            $decline->update($data);
        }else{
            $decline2 = new DeclinedMentorsSme();
            $decline2->create($data);
        }
        //mail to mentor
        if($decline_user && ($request->reason == "Mismatch of specific expertise" || $request->reason == "Personality fit and communication style")){
            $data = [
                'username' => $decline_user->name,
                'reason' => $request->reason
            ];
            //dd($decline_user->email);
            Mail::to($decline_user->email)->send(new DeclinedMentor($data));
        }
        return Redirect::route('landing.home');
    }

    public function removeMentorReason(Request $request){
        $match = MatchingMentorSme::where('mentor_id', $request->mentor_id)->first();
        $removed_user = User::where('user_role', 'mentor')->where('functional_id', $request->mentor_id)->first();
        $matched_area = $match->functional_area;
        $company = Company::where('id', $request->company_id)->first();
        if($company && $company->functional_area_1 == $matched_area){
            $company->assigned_mentor_1 = null;
            $company->save();
        }else if($company && $company->functional_area_2 == $matched_area){
            $company->assigned_mentor_2 = null;
            $company->save();
        }else if($company && $company->functional_area_3 == $matched_area){
            $company->assigned_mentor_3 = null;
            $company->save();
        }
        $matched_table = MatchingMentorSme::where('mentor_id', $request->mentor_id)->where('company_id', $company->id)->where('functional_area', $matched_area)->first();
        $matched_table->delete();
        $matchingqueue = MatchingQueue::where('mentor_id', $request->mentor_id)->where('status', 'matched')->first();
        $matchingqueue->status = 'not matched';
        $matchingqueue->save();

        $removeTable = RemovedMentorsSmes::where('mentor_id', $request->mentor_id)->where('company_id', $request->company_id)->where('match_end_type', "Mentor removed by SME")->first();
        if($removeTable){
            $removeTable->match_end_reason = $request->reason;
            $removeTable->save();
        }else{
            $removeTable = new RemovedMentorsSmes();
            $removeTable->mentor_id = $request->mentor_id;
            $removeTable->company_id = $request->company_id;
            $removeTable->match_end_type = "Mentor removed by SME";
            $removeTable->match_end_reason = $request->reason;
            $removeTable->save();
        }
        $data = [
            'username' => $removed_user->name,
            'mentee_name' => $company->company_name,
            'functional' => $matched_area,
            'reason' => $request->reason
        ];

        if($removed_user && ($request->reason == "Goal/set target has been achieved" || $request->reason == "Difference in personalities, no chemistry" || $request->reason == "Lack of commitment/lack of progress")){
            Mail::to($removed_user->email)->send(new RemovedMentor($data));
        }
    }

    public function removeSmeReason(Request $request){
        $match = MatchingMentorSme::where('mentor_id', $request->mentor_id)->first();
        $mentor = User::where('user_role', 'mentor')->where('functional_id', $request->mentor_id)->first();
        $removed_user = User::where('user_role', 'entrepreneur')->where('functional_id', $request->company_id)->first();
        $matched_area = $match->functional_area;
        $company = Company::where('id', $request->company_id)->first();
        if($company && $company->functional_area_1 == $matched_area){
            $company->assigned_mentor_1 = null;
            $company->save();
        }else if($company && $company->functional_area_2 == $matched_area){
            $company->assigned_mentor_2 = null;
            $company->save();
        }else if($company && $company->functional_area_3 == $matched_area){
            $company->assigned_mentor_3 = null;
            $company->save();
        }
        $matched_table = MatchingMentorSme::where('mentor_id', $request->mentor_id)->where('company_id', $company->id)->where('functional_area', $matched_area)->first();
        $matched_table->delete();
        $matchingqueue = MatchingQueue::where('mentor_id', $request->mentor_id)->where('status', 'matched')->first();
        $matchingqueue->status = 'not matched';
        $matchingqueue->save();
        $data = [
            'username' => $removed_user->name,
            'mentor_name' => $mentor->name,
            'functional' => $matched_area,
            'reason' => $request->reason
        ];

        if($removed_user && ($request->reason == "Goal/set target has been achieved" || $request->reason == "Difference in personalities, no chemistry" || $request->reason == "Lack of commitment/lack of progress")){
            Mail::to($removed_user->email)->send(new RemovedSme($data));
        }
        $removeTable = RemovedMentorsSmes::where('mentor_id', $request->mentor_id)->where('company_id', $request->company_id)->where('match_end_type', "SME removed by Mentor")->first();
        if($removeTable){
            $removeTable->match_end_reason = $request->reason;
            $removeTable->save();
        }else{
            $removeTable = new RemovedMentorsSmes();
            $removeTable->mentor_id = $request->mentor_id;
            $removeTable->company_id = $request->company_id;
            $removeTable->match_end_type = "SME removed by Mentor";
            $removeTable->match_end_reason = $request->reason;
            $removeTable->save();
        }
    }
    public function declineSmeReason(Request $request){
        $data = [
            'mentor_id' => $request->mentor_id,
            'company_id' => $request->company_id,
            'decline_type' => "Mentee(SME) rejected by Mentor",
            'decline_message' => $request->reason
        ];
        $declined_user = User::where('user_role','entrepreneur')->where('functional_id', $request->company_id)->first();
        $decline = DeclinedMentorsSme::where('mentor_id', $request->mentor_id)->where('company_id', $request->company_id)->where('decline_type', 'Mentee(SME) rejected by Mentor')->first();
        if($decline){
            $decline->update($data);
        }else{
            $decline2 = new DeclinedMentorsSme();
            $decline2->create($data);
        }
        if($declined_user && ($request->reason == "Lack of experience in mentoring" || $request->reason == "Conflict of interest")){
            //mail to sme
            $data = [
                'username' => $declined_user->name,
                'reason' => $request->reason
            ];
            //dd($declined_user->email);
            Mail::to($declined_user->email)->send(new DeclinedSME($data));
        }
        //dd('success');
        return Redirect::route('landing.home');
    }

}
