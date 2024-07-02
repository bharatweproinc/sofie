<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class LandingController extends Controller
{
    //
    public function home() {
        return Inertia::render('Landing/Home/View',[]);
    }

    public function contactUs() {
        return Inertia::render('Landing/Contact/View',[]);
    }

    public function login() {
        // dd(12);
        return Inertia::render('Landing/Login/View',[]);
    }

    public function signup() {
        return Inertia::render('Landing/SignUp/View',[]);
    }

    public function companyDetails() {
        return Inertia::render('Landing/CompanyDetails/View',[]);
    }

    public function partialMatched() {
        return Inertia::render('Landing/Dashboard/PartialMatched/View' , []);
    }
    public function matched() {
        return Inertia::render('Landing/Dashboard/Matched/View', []);
    }
    public function mentor() {
        return Inertia::render('Landing/Mentor/View',[]);
    }
    public function mentorReview(){
        return Inertia::render('Landing/Mentor/Review',[]);
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
        return Inertia::render('Landing/Dashboard/Settings/ProfileSettings/View',[]);
    }
    public function accountSetting() {
        return Inertia::render('Landing/Dashboard/Settings/AccountSettings/View',[]);
    }
    public function companyReview(){
        return Inertia::render('Landing/CompanyDetails/Review',[]);
    }
}
