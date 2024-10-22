<?php

namespace App\Http\Controllers\Company;

use App\Http\Controllers\Controller;
use App\Mail\MentorDetailsMail;
use App\Mail\SmeDetailsMail;
use App\Models\Company;
use App\Models\Deletion;
use App\Models\MatchingMentorSme;
use App\Models\MatchingQueue;
use App\Models\Mentor;
use App\Models\PartialMatch;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Repository\CompanyRepository;
use App\Services\MatchSmeMentor;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;


class CompanyController extends Controller
{
    //
    private CompanyRepository $companyRepository;

    public function __construct(CompanyRepository $companyRepository){
        $this->companyRepository = $companyRepository;
    }

    public function get($id) {
        $response = $this->companyRepository->getData($id);
        return Inertia::render('Landing/CompanyDetails/Review',$response);
    }

    public function getList() {
        $response = $this->companyRepository->getList();
        return Inertia::render('Landing/CompanyDetails/List',$response);
    }

    public function saveData(Request $request, $id){
        // dd($request->all());
        $response = $this->companyRepository->saveData($request, $id);
        return Redirect::route("company.detail",[
            'id' => $response['data']->id
        ]);
    }

    public function deleteCompany($id){
        if($id){
            $newDeletion = new Deletion();
            $newDeletion->scheduleCompanyDeletion($id);
        }else{
            return Redirect::back()->withError(['msg' => 'Deletion Failed']);
        }
    }

    public function resetPassword(Request $request, $id){
        $company_user = User::where('user_role', 'entrepreneur')->where('functional_id', $id)->first();
        if($company_user){
         $company_user->password = Hash::make($request->new_password);
         $company_user->save();
        }
        return Redirect::route("company.detail",[
         'id' => $id
     ]);
     }

     public function sendMentorDetails($company_id, $mentor_id, $area){
        $mentor = Mentor::with('user')->where('id', $mentor_id)->first();
        $company = Company::findOrFail($company_id);
        $user= User::where('functional_id',$company_id)->where('user_role', 'entrepreneur')->first();
        $matches = new MatchSmeMentor();
        $data = $matches->sendMentorDetails($company_id, $mentor_id,$area);
        if($company && $user && $mentor){
            $existing_match = MatchingMentorSme::where('mentor_id', $mentor_id)->where('company_id', $company_id)->where('functional_area', $area)->first();
            if($existing_match){
                $existing_match->update([
                    'mentor_id' =>$mentor_id,
                    'company_id' => $company_id,
                    'functional_area' => $area
                ]);
            }else{
                MatchingMentorSme::create([
                    'mentor_id' =>$mentor_id,
                    'company_id' => $company_id,
                    'functional_area' => $area
                ]);

                $pmatch = PartialMatch::where('mentor_id',$mentor_id)
                ->where('company_id', $company_id)
                ->where('functional_area', $area)->first();

                if($pmatch){
                    $pmatch->delete();
                }
            }
            $not_matched_mentor = MatchingQueue::where('mentor_id',$mentor_id)->where('status', 'not matched')->first();
            if(!$not_matched_mentor){
               MatchingQueue::create([
                    'mentor_id' => $mentor_id,
                    'status' => 'matched'
               ]);
            }else{
                $not_matched_mentor->update(['status' => 'matched']);
            }
            Mail::to($user->email)->send(new MentorDetailsMail($data));

            //send sme details to mentor as well
            $mentorEmail = $mentor->user->email;
            $sme_data = $matches->sendSmeDetails($company_id, $mentor_id);
            Mail::to($mentorEmail)->send(new SmeDetailsMail($sme_data));

            if($company->functional_area_1 == $area){
                $company->update(['assigned_mentor_1' => $mentor_id]);
            }else if($company->functional_area_2 == $area){
                $company->update(['assigned_mentor_2' => $mentor_id]);
            }else{
                $company->update(['assigned_mentor_3' => $mentor_id]);
            }
        
            return Redirect::route("landing.acceptedMailMentor");
        }
    }

    public function removeCompany($mentor_id){
        $matched_sme = MatchingMentorSme::where('mentor_id', $mentor_id)->first();
        $company = Company::where('id', $matched_sme->company_id)->first();
        return Inertia::render('Landing/RemoveDropDown/CompanyView',[
            'details' =>[
                'mentor_id' =>$mentor_id,
                'company_id' => $company->id
            ]]);
    }
}
