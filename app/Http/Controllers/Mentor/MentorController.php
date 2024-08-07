<?php

namespace App\Http\Controllers\Mentor;

use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Models\MatchingMentorSme;
use App\Models\MatchingQueue;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Repository\MentorRepository;
use Exception;
use Hamcrest\Arrays\MatchingOnce;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;


class MentorController extends Controller
{
    //
    private $mentorRepository;

    public function __construct(MentorRepository $mentorRepository){
        $this->mentorRepository = $mentorRepository;
    }
    public function view() {
        $response = $this->mentorRepository->getList();
        return Inertia::render('Landing/Mentor/List',$response);
    }

    public function get($id) {
        $response = $this->mentorRepository->get($id);
        return Inertia::render('Landing/Mentor/Review',$response);
    }

    public function connectedSme($company_id, $mentor_id){
        $response = $this->mentorRepository->connectedSme($company_id, $mentor_id);
        return Redirect::back();
    }

    public function getList() {
        $response = $this->mentorRepository->getList();
        return Inertia::render('Landing/Mentor/List',['data' => $response]
        );
    }

    public function saveDetail(Request $request, $id) {
        $response = $this->mentorRepository->saveData($request, $id);
        //dd($response);
        return Redirect::route("mentor.detail",[
            'id' => $response['data']->id
        ]);
    }

    public function resetPassword(Request $request, $id){
        try{
            $mentor_user = User::where('user_role', 'mentor')->where('functional_id', $id)->first();
            if($mentor_user){
             $mentor_user->password = Hash::make($request->new_password);
             $mentor_user->save();
            }
            return Redirect::route("mentor.detail",[
             'id' => $id
         ]);
        }catch(Exception $e){
            return $e->getMessage();
            //dd($e);
        }
    }
    public function removeMentor($mentor_id){
        $matched_sme = MatchingMentorSme::where('mentor_id', $mentor_id)->first();
        $matched_area = $matched_sme->functional_area;
        $company = Company::where('id', $matched_sme->company_id)->first();
        if($company->functional_area_1 == $matched_area){
            $company->assigned_mentor_1 = null;
            $company->save();
        }else if($company->functional_area_2 == $matched_area){
            $company->assigned_mentor_2 = null;
            $company->save();
        }else if($company->functional_area_3 == $matched_area){
            $company->assigned_mentor_3 = null;
            $company->save();
        }
        $matched_table = MatchingMentorSme::where('mentor_id', $mentor_id)->where('company_id', $company->id)->where('functional_area', $matched_area)->first();
        $matchingqueue = MatchingQueue::where('mentor_id', $mentor_id)->where('status', 'matched')->first();
        $matched_table->delete();
        $matchingqueue->status = 'not matched';
        $matchingqueue->save();

       return Redirect::back();
    }

}
