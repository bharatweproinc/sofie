<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Repository\CompanyRepository;
use Illuminate\Support\Facades\Auth;

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
        $user = Auth::user();
        $companies = $this->companyRepository->getList();
        return Inertia::render('Landing/Dashboard/View', [
            "list" => [
                'companies' => $companies,
                'user' => $user
            ]
        ]);
    }
    public function getList() {
        $companyResponse = $this->companyRepository->getList();
        return Inertia::render('Landing/Dashboard/Companies',[
            "company" => $companyResponse,

        ]);
    }

    public function goLive($id){
        try{
            $user = User::findOrFail($id);
            if($user){
                $user->is_live = 1;
            }
            $response = 'Is live success';
        }catch (\Exception $e) {
            dd($e);
            $response = $e->getMessage();
        }
        return Inertia::render('Landing/Dashboard/View',$response);
    }

    public function delete($id){
        $user = User::findOrFail($id);
        if($user){
            $user->delete();
        }
    }
}
