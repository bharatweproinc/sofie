<?php

namespace App\Http\Controllers\Company;

use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Repository\CompanyRepository;
use Illuminate\Support\Facades\Hash;
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
        $company = Company::where('id',$id)->first();
        $user = User::where('user_role','entrepreneur')->where('functional_id', $id)->first();
        if($user && $company){
            $company->delete();
            $user->delete();
        }
        return Redirect::route("admin.dashboard",[]);
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
}
