<?php

namespace App\Http\Controllers\Mentor;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Repository\MentorRepository;
use Illuminate\Support\Facades\Redirect;


class MentorController extends Controller
{
    //
    private $mentorRepository;

    public function __construct(MentorRepository $mentorRepository){
        $this->mentorRepository = $mentorRepository;
    }

    public function get($id) {
        $response = $this->mentorRepository->get($id);
        return Inertia::render('Landing/Mentor/View',[
            'data' => $response['data'],
            ]
        );
    }

    public function getList() {
        $response = $this->mentorRepository->getList();
        return Inertia::render('Landing/Mentor/List',[
            'data' => $response,
            ]
        );
    }

    public function saveDetail(Request $request) {
        $response = $this->mentorRepository->saveData($request);
        return Inertia::render('Landing/Login/View',[
            'data' => $response['data'],
            ]
        );
    }

}
