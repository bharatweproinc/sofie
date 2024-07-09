<?php

namespace App\Repository;

use App\Repository\Interface\CompanyRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use App\Models\{
    Company,
};
class CompanyRepository implements CompanyRepositoryInterface {

    public function getList(){
        //$list = Company::select('id','company_name','company_uen','created_at')->get();
        $list = Company::with('user')->select('id','company_name','company_uen', 'function_area_1',
            'username', 'position', 'founded_year', 'team_size', 'current_revenue', 'current_customers_base_size',
            'industry_sector', 'description', 'function_area_2', 'function_area_3', 'hear_about_us', 'current_problem', 'additional_information')->get();
            return ["list" => $list];
    }

    public function saveData(Request $request){
        try {
            $data["company_name"] = $request['company_name'];
            $data['email'] = $request['email'];
            $data["company_uen"] = $request['company_uen'];
            $data["phone"] = $request['phone'];
            $data["username"] = $request['username'];
            $data["password"] = $request['password'];
            $data["mobile_number"] = $request['mobile_number'];
            $data["position"] = $request['position'];
            $data["founded_year"] = $request['founded_year'];
            $data["team_size"] = $request['team_size'];
            $data["current_revenue"] = $request['current_revenue'];
            $data["current_customers_base_size"] = $request['current_customers_base_size'];
            $data["industry_sector"] = $request['industry_sector'];
            $data["description"] = $request['description'];
            $data["function_area_1"] = $request['function_area_1'];
            $data["function_area_2"] = $request['function_area_2'];
            $data["function_area_3"] = $request['function_area_3'];
            $data["hear_about_us"] = $request['hear_about_us'];
            $data["current_problem"] = $request['current_problem'];
            $data["additional_information"] = $request['additional_information'];
            if(isset($data['id'])){
                $job = Company::findOrFail($data['id']);
                $job->update($data);
            } else {
                $job = Company::create($data);
            }
            $user = new User;
            $user->name = $request->name;
            $user->phone = $request->phone;
            $user->email = $request->email;
            $user->user_name = $request->username;
            $user->password = Hash::make($request->password);
            $user->functional_id = $mentor->id;
            $user->save();
            return [
                'success' => true,
                'data' => $job,
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
