<?php

namespace App\Repository;

use Illuminate\Http\Request;
use App\Models\{
    Testimonial
};
use App\Repository\Interface\TestimonialRepositoryInterface;
use Illuminate\Support\Facades\Auth;

class TestimonialRepository implements TestimonialRepositoryInterface {

    public function getList(){
        $user = Auth::user();
        $testimonial = Testimonial::get()->each(function($t) {
            $t->profile_photo = url("storage/testimonial/{$t->image}");
        });
        return ["list" => [
            "user" => $user,
            "testimonial" => $testimonial
        ]];
    }

    public function get($id) {
        try {
            $logged_user = Auth::user();
            $data = Testimonial::where('id', $id)->first();
            if($data && $data->image != null){
                $data->profile_photo = url("storage/testimonial/{$data->image}");
            }
            $data->logged_user = $logged_user;
            //dd($data);
            return [ 'detail' => $data ];
        }catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
    }

    public function saveData(Request $request)
    {
        //dd($request->all());
        try{
            $fileName = null;
            $data = [
                'name' => $request->name,
                'description' => $request->description
            ];

            if($request->hasFile('profile_photo')){
                $fileName =  $this->uploadFile($request->file('profile_photo'),'testimonial');
            }

                $testimonial = Testimonial::create($data);

            if($fileName != null){
                $testimonial->image = $fileName;
                $testimonial->save();
            }

            // dd($testimonial);
            return [
                'success' => true,
                'data' => $testimonial
            ];


        }catch (\Exception $e) {
            dd($e);
            return [
                'success' => false,
                'error' => $e->getMessage()
            ];
        }
    }

    public function updateData(Request $request, $id)
    {
        try{
            $fileName = null;
            $data = [
                'name' => $request->name,
                'description' => $request->description
            ];

            if($request->hasFile('profile_photo')){
                $fileName =  $this->uploadFile($request->file('profile_photo'),'testimonial');
            }
                $testimonial = Testimonial::where('id', $id)->first();
                $testimonial->update($data);

            if($fileName != null){
                $testimonial->image = $fileName;
                $testimonial->save();
            }
            return [
                'success' => true,
                'data' => $testimonial
            ];

        }catch (\Exception $e) {
            dd($e);
            return [
                'success' => false,
                'error' => $e->getMessage()
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
