<?php

namespace App\Http\Controllers;

use App\Models\PressContent;
use App\Models\Testimonial;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class PressContentController extends Controller
{
    public function getList(){
        $user = Auth::user();
        $press = PressContent::get();
        //dd('test',$press);
        return Inertia::render('Landing/Press/List',
            [
                "list" => [
                    "user" => $user,
                    "press" => $press
                ]
            ]);
    }
    public function saveData(Request $request){
        try{
            $date = Carbon::parse($request->date);

            $data = [
                'title' => $request->title,
                'date' => $date
            ];

            $press = PressContent::create($data);
            return Redirect::route("admin.press.get",[
                'id' => $press->id
            ]);
        }catch (\Exception $e) {
            return [
                'success' => false,
                'error' => $e->getMessage()
            ];
        }
    }

    public function updateData(Request $request, $id){
        try{
            $date = Carbon::parse($request->date);
            $data = [
                'title' => $request->title,
                'date' => $date
            ];

            $press = PressContent::where('id', $id)->first();
            $press->update($data);

            return Redirect::route("admin.press.get",[
                'id' => $press->id
            ]);

        }catch (\Exception $e) {
            return [
                'success' => false,
                'error' => $e->getMessage()
            ];
        }
    }

    public function pressDetail($id){
        $logged_user = Auth::user();
        $press = PressContent::where('id', $id)->first();

        return Inertia::render('Landing/Press/Edit',[
            'detail' => [
                'id' => $id,
                'logged_user' => $logged_user,
                'press' => $press,
            ],
        ]);
    }
    public function get($id){
        try {
            $logged_user = Auth::user();
            $data = PressContent::where('id', $id)->first();
            $data->logged_user = $logged_user;
        }catch (\Exception $e) {
            $e->getMessage();
        }
        return Inertia::render('Landing/Press/Review',['detail' => $data]);

    }
    public function delete($id){
        $press = PressContent::where('id',$id)->first();
        $press->delete();
        return Redirect::route("admin.press.list",[]);
    }

}
