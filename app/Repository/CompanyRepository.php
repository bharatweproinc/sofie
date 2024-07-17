<?php

namespace App\Repository;

use App\Repository\Interface\CompanyRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use App\Models\{
    Company,
    User,
};
use Illuminate\Support\Facades\Auth;

class CompanyRepository implements CompanyRepositoryInterface {

    public function getList(){
        $user = Auth::user();
        //$list = Company::select('id','company_name','company_uen','created_at')->get();
        $company = Company::with('user')->select('id','company_name','company_uen', 'functional_area_1',
            'username', 'position', 'founded_year', 'team_size', 'current_revenue', 'current_customers_base_size',
            'industry_sector', 'company_description', 'functional_area_2', 'functional_area_3', 'hear_about_us', 'current_problem', 'additional_information', 'profile_photo')
            ->get()->each(function($m) {
                $m->link = url("storage/company_profile/{$m->profile_photo}");
            });
            return ["list" => [
                "user" => $user,
                "company" => $company
            ]];
    }

    public function saveData(Request $request, $id){
        try {
            //dd($request->all());
            $fileName = null;
            $user = User::findOrfail($id);
            $data = [
                'company_name' => $request->company_name,
                'email' => $request->email,
                'company_uen' => $request->company_uen,
                'phone' => $request->phone,
                'username' =>$request->username,
                'mobile_number' => $request->mobile_number,
                'position' => $request->position,
                'founded_year' => $request->founded_year,
                'team_size' => $request->team_size,
                'current_revenue' => $request->current_revenue,
                'current_customers_base_size' => $request->current_customers_base_size,
                'industry_sector' => $request->industry_sector,
                'company_description' => $request->company_description,
                'functional_area_1' => $request->functional_area_1,
                'functional_area_2' => $request->functional_area_2,
                'functional_area_3' => $request->functional_area_3,
                'hear_about_us' => $request->hear_about_us,
                'current_problem' => $request->current_problem,
                'additional_information' => $request->additional_information,
                'contact_name' => $request->contact_name
            ];

            //saving image in db
            if($request->hasFile('profile_photo')){
                $fileName =  $this->uploadFile($request->file('profile_photo'),'company_profile');
            }

            $company = Company::where('id', $user->functional_id)->first();

            if($company){
                $company->update($data);
            }else {
                $company = Company::create($data);
                $user->functional_id = $company->id;
                $user->save();
            }
            if($fileName != null){
                $company->profile_photo = $fileName;
                $company->save();
            }
            return [
                'success' => true,
                'data' => $company
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'error' => $e->getMessage()
            ];
        }
    }

    public function getData($id) {
        $logged_user = Auth::user();
        try {
            $data = Company::with('user')->where('id',$id)->first();
            $data->link = url("storage/company_profile/{$data->profile_photo}");
            $data->logged_user = $logged_user;
            return [ 'detail' => $data ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
    }
    public function uploadFile($file, $folderName) {
        $fileName = uniqid() . '_' . time() . '_' . $file->getClientOriginalName();
        $fileType = $file->getClientOriginalExtension();
        $file->storeAs("public/{$folderName}", $fileName);
        return $fileName;
    }
}
