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
        return Inertia::render('Landing/CompanyDetails/List',$response);
    }

    public function saveData(Request $request, $id){
        $response = $this->companyRepository->saveData($request, $id);
        //dd("company save success",$response);
        //return Inertia::render('Landing/CompanyDetails/View',$response);
        return Redirect::route("company.detail",[
            'id' => $response['data']->id
        ]);
    }
}
