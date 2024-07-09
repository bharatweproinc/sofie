<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repository\{MentorRepository, CompanyRepository};
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;


class LandingController extends Controller
{
    private $mentorRepository, $companyRepository;

    public function __construct(MentorRepository $mentorRepository, CompanyRepository $companyRepository){
        $this->mentorRepository = $mentorRepository;
        $this->companyRepository = $companyRepository;
    }

    //
    public function home() {
        return Inertia::render('Landing/Home/View',[]);
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
        // $data = $request->only(['name', 'email', 'phone', 'username', 'password', 'qualifications', 'industry_sector',
        // 'mentored_compnay','functional_area','hear_about_us','number_of_companies','additional_information']);
        return Inertia::render('Landing/SignUp/View', [
            // "formData" => $data
        ]);
    }

    public function companyDetails() {
        return Inertia::render('Landing/CompanyDetails/View',[]);
    }
    public function companyList() {
        return Inertia::render('Landing/CompanyDetails/List',[]);
    }
    public function companyReview() {
        return Inertia::render('Landing/CompanyDetails/Review',[]);
    }
    // public function mentor() {
    //     $response = $this->mentorRepository->getList();
    //     // dd($response);
    //     return Inertia::render('Landing/Mentor/List',$response);
    //     // return Inertia::render('Landing/Mentor/View',[

    //     // ]);
    // }
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

}
