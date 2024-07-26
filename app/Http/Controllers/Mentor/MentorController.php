<?php

namespace App\Http\Controllers\Mentor;

use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Repository\MentorRepository;
use Exception;
use Illuminate\Support\Facades\Auth;
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

    public function getList() {
        $response = $this->mentorRepository->getList();
        return Inertia::render('Landing/Mentor/List',[
            'data' => $response,
            ]
        );
    }

    public function saveDetail(Request $request, $id) {

        $response = $this->mentorRepository->saveData($request, $id);
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
            dd($e);
        }
    }
}
