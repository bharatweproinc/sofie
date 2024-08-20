<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Mail\AcceptedMentorProfileMail;
use App\Mail\AcceptedSmeProfileMail;
use App\Mail\ApprovedMentorProfileMail;
use App\Mail\DeclinedMentor;
use App\Mail\DeclinedSME;
use App\Mail\RejectedProfileMail;
use App\Mail\RemovedMentor;
use App\Mail\RemovedSme;
use App\Models\{BannerSection,Company, DeclinedMentorsSme, Deletion, JoinOurCommunitySection, MatchingMentorSme, MatchingQueue, Mentor, MissionStatementSection, RemovedMentorsSmes, User};
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Repository\CompanyRepository;
use App\Repository\MentorRepository;
use App\Services\MatchSmeMentor;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
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

    //Dynamic HomePage rendering and Updating
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
        return Redirect::route('admin.sectionOne', [
            'list' => [
                'banner' => $banner,
                'user' => $logged_user
            ]
        ]);
        // return Inertia::render('Landing/Dashboard/Content/Banner',[
        //     'list' => [
        //         'banner' => $banner,
        //         'user' => $logged_user
        //     ]
        // ]);
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

    // Accepting / Rejecting Mentors Or SME
    public function acceptedMentorProfile($mentor_id){
        //try{
            $user = User::where('user_role', 'mentor')->where('functional_id', $mentor_id)->first();
            if($user){
                $user->is_accepted = 1;
                $user->status = 1;
                $user->save();
                Mail::to($user->email)->send(new ApprovedMentorProfileMail());
                $matches = new MatchSmeMentor();
                $data =  $matches->matchingSme($mentor_id);


                if($data['limit'] == 0){
                    return Redirect::back()->with(['message' => 'Match limit reached']);
                }else if(count($data['matched_smes']) == 0){
                    MatchingQueue::create([
                        'mentor_id' => $mentor_id,
                        'status' => 'not matched'
                   ]);
                }else{
                    Mail::to($user->email)->send(new AcceptedMentorProfileMail($data));
                }
            }else{
                return Redirect::back()->withErrors(['message' => 'Error Sending Email']);
            }
        /*}catch (\Exception $e) {
            return $e->getMessage();
        }*/
    }
    public function acceptedCompanyProfile($sme_id){
        try{
            $user = User::where('user_role', 'entrepreneur')->where('functional_id', $sme_id)->first();
            if($user){
                $user->is_accepted = 1;
                $user->status = 1;
                $user->save();
                Mail::to($user->email)->send(new AcceptedSmeProfileMail($user));
            }else{
                return Redirect::back()->withErrors(['message' => 'Error Sending Email']);
            }
            return Redirect::back();
        }catch (\Exception $e) {
          return $e->getMessage();
        }
    }
    public function rejectedMentorProfile($id){
        try{
            $user = User::where('user_role', 'mentor')->where('functional_id', $id)->first();
            if($user){
                $user->is_accepted = 0;
                $user->status = 0;
                $user->save();
                Mail::to($user->email)->send(new RejectedProfileMail($user->name));
                return Redirect::back()->with(['message' => 'Email sent succesfully']);
            }else{
                return Redirect::back()->with(['message' => 'Error in sending email']);
            }

        }catch (\Exception $e) {
            return $e->getMessage();
        }
    }
    public function rejectedCompanyProfile($id){
        try{
            $user = User::where('user_role', 'entrepreneur')->where('functional_id', $id)->first();
            if($user){
                $user->is_accepted = 0;
                $user->status = 0;
                $user->save();
                Mail::to($user->email)->send(new RejectedProfileMail($user->name));
                return Redirect::back()->with(['message' => 'Email sent succesfully']);
            }else{
                return Redirect::back()->with(['message' => 'Error in sending email']);
            }

        }catch (\Exception $e) {
            $response = $e->getMessage();
            return $response;
        }
    }

    // Is live Status for Mentor and SME
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
            $response = $e->getMessage();
        }
    }

    //Deleting Mentor and SME
    public function deleteMentorUser($id){
        if($id){
            $newDeletion = new Deletion();
            $newDeletion->scheduleMentorDeletion($id);
        }else{
            return Redirect::back()->withError(['msg' => 'Deletion Failed']);
        }
    }

    public function deleteCompanyUser($id){
        if($id){
            $newDeletion = new Deletion();
            $newDeletion->scheduleCompanyDeletion($id);
        }else{
            return Redirect::back()->withError(['msg' => 'Deletion Failed']);
        }
    }

    //Featured mentors and Sme
    public function addFeaturedMentor($id){
        try{
            $mentor = Mentor::where('id',$id)->first();
            if($mentor && $mentor->featured_mentor == "no"){
                $mentor->featured_mentor = "yes";
                $mentor->save();
            }else if($mentor && $mentor->featured_mentor == "yes"){
                $mentor->featured_mentor = "no";
                $mentor->save();
            }
            return Redirect::back();

        }catch(\Exception $e){
            return $e->getMessage();
        }
    }

    public function addFeaturedSme($id){
        try{
            $company = Company::where('id',$id)->first();
            if($company && $company->featured_sme == "no"){
                $company->featured_sme = "yes";
                $company->save();
            }else if($company && $company->featured_sme == "yes"){
                $company->featured_sme = "no";
                $company->save();
            }
            return Redirect::back();

        }catch(\Exception $e){
            return $e->getMessage();
        }
    }

    public function sendCustomDeclineMail($id){
        try{
            $mail = DeclinedMentorsSme::where('id',$id)->first();
            if($mail){
                $type = $mail->decline_type;
                if($type == "Mentee(SME) rejected by Mentor"){
                    $user = User::where('user_role', 'entrepreneur')->where('functional_id',$mail->company_id)->first();
                    if($user){
                        $data = [
                            'username' => $user->name,
                            'reason' => $mail->decline_message
                        ];
                        //mail
                        Mail::to($user->email)->send(new DeclinedSME($data));
                        $mail->delete();
                        return Redirect::route('landing.declineEmails')->with(['msg' => 'Email sent']);
                        //delete entry
                    }
                }else{
                    $user = User::where('user_role', 'mentor')->where('functional_id',$mail->mentor_id)->first();
                    if($user){
                        $data = [
                            'username' => $user->name,
                            'reason' => $mail->decline_message
                        ];
                        //mail
                        Mail::to($user->email)->send(new DeclinedMentor($data));
                        $mail->delete();
                        return Redirect::route('landing.declineEmails')->with(['msg' => 'Email sent']);
                        //delete entry
                    }
                }
            }
        }catch(\Exception $e){
            return $e->getMessage();
        }
    }
    public function sendCustomRemoveMail($id){
        try{
            $mail = RemovedMentorsSmes::where('id',$id)->first();
            $match = MatchingMentorSme::where('mentor_id', $mail->mentor_id)->where('company_id', $mail->company_id)->first();
            $mentor = User::where('user_role', 'mentor')->where('functional_id',$mail->mentor_id)->first();
            if($mail && $match && $mentor){
                $type = $mail->match_end_type;
                if($type == "SME removed by Mentor"){
                    $user = User::where('user_role', 'entrepreneur')->where('functional_id',$mail->company_id)->first();
                    if($user){
                        $data = [
                            'username' => $user->name,
                            'reason' => $mail->match_end_reason,
                            'mentor_name' => $mentor->name,
                            'functional' => $match->functional_area
                        ];
                        //mail
                        Mail::to($user->email)->send(new RemovedSme($data));
                        $mail->delete();
                        $match->delete();
                        return Redirect::route('landing.removeEmails')->with(['msg' => 'Email sent']);
                        //delete entry
                    }
                }else{
                    $user = User::where('user_role', 'mentor')->where('functional_id',$mail->mentor_id)->first();
                    $match = MatchingMentorSme::where('mentor_id', $mail->mentor_id)->where('company_id', $mail->company_id)->first();
                    $company = User::where('user_role', 'mentor')->where('functional_id',$mail->mentor_id)->first();
                    if($user){
                        $data = [
                            'username' => $user->name,
                            'reason' => $mail->match_end_reason,
                            'mentee_name' => $company->name,
                            'functional' => $match->functional_area
                        ];
                        //mail
                        Mail::to($user->email)->send(new RemovedMentor($data));
                        $mail->delete();
                        $match->delete();
                        return Redirect::route('landing.declineEmails')->with(['msg' => 'Email sent']);
                        //delete entry
                    }
                }
            }
        }catch(\Exception $e){
            return $e->getMessage();
        }
    }

    public function deleteCustomDeclineMail($id){
        $mail = DeclinedMentorsSme::where('id',$id)->first();
        if($mail){
            $mail->delete();
            return Redirect::route('landing.declineEmails')->with(['msg' => 'Success']);
        }
        return Redirect::route('landing.declineEmails')->with(['msg' => 'Error deleting']);
    }
    public function deleteCustomRemoveMail($id){
        $mail = RemovedMentorsSmes::where('id',$id)->first();
        if($mail){
            $mail->delete();
            return Redirect::route('landing.removeEmails')->with(['msg' => 'Success']);
        }
        return Redirect::route('landing.removeEmails')->with(['msg' => 'Error deleting']);
    }

}

