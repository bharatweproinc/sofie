<?php

namespace App\Http\Controllers\Company;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Repository\CompanyRepository;
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
        return Inertia::render('Landing/Company/Review',$response);
    }

    public function getList() {
        $response = $this->companyRepository->getList();
        dd("Test1");
        return Inertia::render('Landing/CompanyDetails/List',$response);
    }

    public function saveData(Request $request){
        $response = $this->companyRepository->saveData($request);
        return Inertia::render('Landing/Login/View',$response);
    }
}
