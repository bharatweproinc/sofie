<?php

namespace App\Http\Controllers;

use App\Models\Testimonial;
use Illuminate\Http\Request;
use App\Repository\TestimonialRepository;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class TestimonialController extends Controller
{
    private TestimonialRepository $testimonialRepository;

    public function __construct(TestimonialRepository $testimonialRepository){
        $this->testimonialRepository = $testimonialRepository;
    }

    public function get($id) {
        $response = $this->testimonialRepository->get($id);
        return Inertia::render('Landing/Testimonials/Review',$response);
    }

    public function getList() {
        $response = $this->testimonialRepository->getList();
        return Inertia::render('Landing/Testimonials/List',$response);
    }

    public function saveData(Request $request){
        try{
            $testimonial = $this->testimonialRepository->saveData($request);
            return Redirect::route("admin.testimonial.get",[
                'id' => $testimonial['data']->id
            ]);
        }catch(\Exception $e){
            dd($e->getMessage());
        }
    }

    public function updateData(Request $request, $id){
        try{
            // dd('update', $id);
            $testimonial = $this->testimonialRepository->updateData($request, $id);
            return Redirect::route("admin.testimonial.get",[
                'id' => $testimonial['data']->id
            ]);
        }catch(\Exception $e){
            dd($e->getMessage());
        }
    }
    public function deleteTestimonial($id){
        $testimonial = Testimonial::where('id',$id)->first();
        $testimonial->delete();
        return Redirect::route("admin.testimonial.list",[]);

    }
}
