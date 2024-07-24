<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\BannerSection;
use App\Models\Company;
use App\Models\JoinOurCommunitySection;
use App\Models\Mentor;
use App\Models\MissionStatementSection;
use App\Models\Testimonial;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Repository\CompanyRepository;
use App\Repository\MentorRepository;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class DashboardController extends Controller
{
    /**
     * load admin dashboard page.
     */
    private CompanyRepository $companyRepository;
    private MentorRepository $mentorRepository;

    public function __construct(CompanyRepository $companyRepository, MentorRepository $mentorRepository ){
        $this->companyRepository = $companyRepository;
        $this->mentorRepository = $mentorRepository;
    }

    public function index() {
        $user = Auth::user();
        $companies = $this->companyRepository->getList();
        $mentors = $this->mentorRepository->getList();
        return Inertia::render('Landing/Dashboard/View', [
            "list" => [
                'companies' => $companies,
                'mentors' => $mentors,
                'user' => $user
            ]
        ]);
    }
    public function getList() {
        $companyResponse = $this->companyRepository->getList();
        return Inertia::render('Landing/Dashboard/Companies',[
            "company" => $companyResponse,

        ]);
    }
    public function acceptedMentorProfile($id){
        try{
            dd("mentor profile",$id);
            $user = User::where('user_role', 'mentor')->where('functional_id', $id)->first();
            if($user){
                $user->is_accepted = 1;
                $user->save();
            }
            $logged_user = Auth::user();
            $companies = $this->companyRepository->getList();
            return Inertia::render('Landing/Dashboard/View', [
            "list" => [
                'companies' => $companies,
                'user' => $logged_user,
                'success' => true,
                'message' => 'Accepted Mentor Profile'
            ]
        ]);
        }catch (\Exception $e) {
            dd($e);
            $response = $e->getMessage();
        }
    }
    public function acceptedCompanyProfile($id){
        try{
            dd("mentor profile",$id);
            $user = User::where('user_role', 'entrepreneur')->where('functional_id', $id)->first();
            if($user){
                $user->is_accepted = 1;
                $user->save();
            }
            $logged_user = Auth::user();
            $companies = $this->companyRepository->getList();
            return Inertia::render('Landing/Dashboard/View', [
            "list" => [
                'companies' => $companies,
                'user' => $logged_user,
                'success' => true,
                'message' => 'Accepted Mentor Profile'
            ]
        ]);
        }catch (\Exception $e) {
            dd($e);
            $response = $e->getMessage();
        }
    }

    public function rejectedMentorProfile($id){
        try{
            dd("mentor profile",$id);
            $user = User::where('user_role', 'mentor')->where('functional_id', $id)->first();
            if($user){
                $user->is_accepted = 0;
                $user->save();
            }
            $logged_user = Auth::user();
            $companies = $this->companyRepository->getList();
            return Inertia::render('Landing/Dashboard/View', [
            "list" => [
                'companies' => $companies,
                'user' => $logged_user,
                'success' => true,
                'message' => 'Rejected Mentor Profile'
            ]
        ]);
        }catch (\Exception $e) {
            dd($e);
            $response = $e->getMessage();
        }
    }
    public function rejectedCompanyProfile($id){
        try{
            dd("mentor profile",$id);
            $user = User::where('user_role', 'entrepreneur')->where('functional_id', $id)->first();
            if($user){
                $user->is_accepted = 0;
                $user->save();
            }
            $logged_user = Auth::user();
            $companies = $this->companyRepository->getList();
            return Inertia::render('Landing/Dashboard/View', [
            "list" => [
                'companies' => $companies,
                'user' => $logged_user,
                'success' => true,
                'message' => 'Rejected Company Profile'
            ]
        ]);
        }catch (\Exception $e) {
            dd($e);
            $response = $e->getMessage();
        }
    }
    public function updateCompanyStatus(Request $request, $id){
        try{
            $user = User::where('user_role', 'entrepreneur')->where('functional_id', $id)->first();
            if($user){
                if($request->userStatus == 0){
                    $user->status = 0;
                }else{
                    $user->status = 1;
                }
                $user->save();
            }
            return Redirect::back();
        }catch (\Exception $e) {
            dd($e);
            $response = $e->getMessage();
        }
    }
    public function updateMentorStatus(Request $request, $id){
        try{
            $user = User::where('user_role', 'mentor')->where('functional_id', $id)->first();
            if($user){
                if($request->userStatus === 0){
                    $user->status = 0;
                }else{
                    $user->status = 1;
                }
                $user->save();
            }
            return Redirect::back();
        }catch (\Exception $e) {
            dd($e);
            $response = $e->getMessage();
        }
    }
    public function sectionOne(){
        $logged_user = Auth::user();
        $banner = BannerSection::where('id',1)->first();
        return Inertia::render('Landing/Dashboard/Content/Banner',[
            'list' => [
                'banner' => $banner,
                'user' => $logged_user
            ]
        ]);
    }

    public function sectionTwo(){
        $logged_user = Auth::user();
        $mission = MissionStatementSection::where('id',1)->first();
        //dd('test',$mission);
        return Inertia::render('Landing/Dashboard/Content/MissionStatement',[
            'list' => [
                'mission' => $mission,
                'user' => $logged_user
            ]
        ]);
    }

    public function sectionThree(){
        $logged_user = Auth::user();
        $community = JoinOurCommunitySection::where('id',1)->first();
        return Inertia::render('Landing/Dashboard/Content/Community',[
            'list' => [
                'community' => $community,
                'user' => $logged_user
            ]
        ]);
    }

    public function saveSectionOne(Request $request){
        $logged_user = Auth::user();
        $images_links = [];
        $banner = BannerSection::where('id',1)->first();
        $data = [
            'banner_title' =>$request->banner_title,
            'banner_description' => $request->banner_description
        ];
        $banner->update($data);
        if($request->banner_images != null){
            foreach($request->banner_images as $image){
                if(is_file($image)){
                    $file = $this->uploadFile($image,'all_banner_images');
                    array_push($images_links, $file);
                }else{
                    array_push($images_links, $image);
                }
            }
            $banner->banner_images = $images_links;
            $banner->save();
        }
        return Inertia::render('Landing/Dashboard/Content/Banner',[
            'list' => [
                'banner' => $banner,
                'user' => $logged_user
            ]
        ]);
    }

    public function saveSectionTwo(Request $request){
        try{
            $mission = MissionStatementSection::where('id',1)->first();
            $logged_user = Auth::user();
            $data = [
                'mission_title' => $request->mission_title,
                'mission_description' => $request->mission_description
            ];

            $mission->update($data);
            return Inertia::render('Landing/Dashboard/Content/MissionStatement',[
            'list' => [
                'mission' => $mission,
                'user' => $logged_user
            ]
        ]);
        }catch(\Exception $e){
            dd($e->getMessage());
        }

    }

    public function saveSectionThree(Request $request){
        $logged_user = Auth::user();
        $community = JoinOurCommunitySection::where('id',1)->first();
        $data = [
            'community_title' => $request->community_title,
            'community_description' => $request->community_description,
            'become_mentor_title' => $request->become_mentor_title,
            'become_mentor_description' => $request->become_mentor_description,
            'become_partner_title' => $request->become_partner_title,
            'become_partner_description' => $request->become_partner_description
        ];
        $community->update($data);
        return Inertia::render('Landing/Dashboard/Content/Community',[
            'list' => [
                'community' => $community,
                'user' => $logged_user
            ]
        ]);
    }

    public function uploadFile($file, $folderName) {
        $fileName = uniqid() . '_' . time() . '_' . $file->getClientOriginalName();
        $fileType = $file->getClientOriginalExtension();
        $file->storeAs("public/{$folderName}", $fileName);
        return url("storage/all_banner_images/{$fileName}");
    }

    public function deleteUser($id){
        //company id or mentor id received
        $user = User::where('functional_id', $id)->first();
        if($user){
            if($user->user_role == "mentor"){
                $mentor = Mentor::where('id', $user->functional_id)->first();
                $mentor->delete();
                $user->delete();
                return Redirect::route('admin.mentor.list',[]);
            }else if($user->user_role == "entrepreneur"){
                $company = Company::where('id', $user->functional_id)->first();
                $company->delete();
                $user->delete();
                return Redirect::route('admin.company.getList',[]);
            }
        }
    }

    public function deleteMentorUser($id){
        $user = User::where('user_role','mentor')->where('functional_id', $id)->first();
        if($user){
            $mentor = Mentor::where('id', $user->functional_id)->first();
            $mentor->delete();
            $user->delete();
      }
}

    public function deleteCompanyUser($id){
        $user = User::where('user_role','entrepreneur')->where('functional_id', $id)->first();
        if($user){
            $company = Company::where('id', $user->functional_id)->first();
            $company->delete();
            $user->delete();
    }
    }
}

