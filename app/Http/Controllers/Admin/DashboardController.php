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
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class DashboardController extends Controller
{
    /**
     * load admin dashboard page.
     */
    private CompanyRepository $companyRepository;

    public function __construct(CompanyRepository $companyRepository){
        $this->companyRepository = $companyRepository;
    }

    public function index() {
        $user = Auth::user();
        $companies = $this->companyRepository->getList();
        return Inertia::render('Landing/Dashboard/View', [
            "list" => [
                'companies' => $companies,
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
    // public function goLive($id){
    //     try{
    //         $user = User::where('id', $id)->first();
    //         if($user){
    //             if($user->status = 0){
    //                 $user->status = 1;
    //             }else{
    //                 $user->status = 0;
    //             }
    //             $user->save();
    //         }
    //         $logged_user = Auth::user();
    //         $companies = $this->companyRepository->getList();
    //         return Inertia::render('Landing/Dashboard/View', [
    //         "list" => [
    //             'companies' => $companies,
    //             'user' => $logged_user,
    //             'success' => true,
    //             'message' => 'Account status updated'
    //         ]
    //     ]);
    //     }catch (\Exception $e) {
    //         dd($e);
    //         $response = $e->getMessage();
    //     }
    // }

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
        //dd($request->banner_images);
        $images = [];
        $data = [
            'banner_title' =>$request->banner_title,
            'banner_description' => $request->banner_description
        ];
        $banner = BannerSection::where('id',1)->update($data);
        if($request->banner_images != null){
            $images = $this->uploadFile($request->file('banner_images'),'all_banner_images');
            $banner->banner_images = $images;
            $banner->save();
        }
        $user = Auth::user();
            $companies = $this->companyRepository->getList();
            return Inertia::render('Landing/Dashboard/View', [
            "list" => [
                'companies' => $companies,
                'user' => $user,
                'success' => true,
                'message' => 'Banner section saved'
            ]
        ]);
    }

    public function saveSectionTwo(Request $request){
        try{
            $data = [
                'mission_title' => $request->mission_title,
                'mission_description' => $request->mission_description
            ];
            $mission_stmt = MissionStatementSection::where('id',1)->update($data);
            $user = Auth::user();
            $companies = $this->companyRepository->getList();
            return Inertia::render('Landing/Dashboard/View', [
            "list" => [
                'companies' => $companies,
                'user' => $user,
                'success' => true,
                'message' => 'Mission section saved'
            ]
        ]);
        }catch(\Exception $e){
            dd($e->getMessage());
        }

    }

    public function saveSectionThree(Request $request){
        $data = [
            'community_title' => $request->community_title,
            'community_description' => $request->community_description,
            'become_mentor_title' => $request->become_mentor_title,
            'become_mentor_description' => $request->become_mentor_description,
            'become_partner_title' => $request->become_partner_title,
            'become_partner_description' => $request->become_partner_description
        ];
        $community = JoinOurCommunitySection::where('id',1)->update($data);
        $user = Auth::user();
        $companies = $this->companyRepository->getList();
        return Inertia::render('Landing/Dashboard/View', [
            "list" => [
                'companies' => $companies,
                'user' => $user,
                'success' => true,
                'message' => 'Community section saved'
            ]
        ]);
    }

    public function uploadFile($files, $folderName) {
        $images = [];
        foreach($files as $file){
            $fileName = uniqid() . '_' . time() . '_' . $file->getClientOriginalName();
            $fileType = $file->getClientOriginalExtension();
            $file->storeAs("public/{$folderName}", $fileName);
            $link = url("storage/all_banner_images/{$fileName}");
            array_push($images, $link);
        }
        return $images;
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

}

