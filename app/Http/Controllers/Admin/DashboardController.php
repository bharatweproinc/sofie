<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Repository\CompanyRepository;


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
        $companies = $this->companyRepository->getList();
        return Inertia::render('Landing/Dashboard/View', [
            'companies' => $companies,
        ]);
    }
    public function getList() {
        $companyResponse = $this->companyRepository->getList();
        dd("tets");
        return Inertia::render('Landing/Dashboard/Companies',[
            "company" => $companyResponse,

        ]);
    }
}
