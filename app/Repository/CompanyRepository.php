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
class CompanyRepository implements CompanyRepositoryInterface {

    public function getList(){
        //$list = Company::select('id','company_name','company_uen','created_at')->get();
        $list = Company::with('user')->select('id','company_name','company_uen', 'function_area_1',
            'username', 'position', 'founded_year', 'team_size', 'current_revenue', 'current_customers_base_size',
            'industry_sector', 'description', 'function_area_2', 'function_area_3', 'hear_about_us', 'current_problem', 'additional_information')->get();
            return ["list" => $list];
    }

    public function saveData(Request $request, $id){
        try {

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
                'description' => $request->description,
                'functional_area_1' => $request->functional_area_1,
                'functional_area_2' => $request->functional_area_2,
                'functional_area_3' => $request->functional_area_3,
                'hear_about_us' => $request->hear_about_us,
                'current_problem' => $request->current_problem,
                'additional_information' => $request->additional_information,
                'contact_name' => $request->contact_name
            ];
            $company = Company::where('id', $user->functional_id)->first();
            //dd($request->contact_name, $company->contact_name);

            if($company){
                $company->update($data);
            }else {
                $company = Company::create($data);
                $user->functional_id = $company->id;
                $user->save();
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
        try {
            $data = Company::with('user')->find($id);
            return [ 'detail' => $data ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
    }
}
