<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Mail\Mailable;
use Illuminate\Support\Facades\Mail;
use App\Mail\NotificationEmail;


class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        // dd("Tet");
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        //dd($request->all());
        $validator = Validator::make($request->all(), [
            'full_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email',
            'password' => ['required', Rules\Password::defaults()],
            'phone' => 'required|string|max:20',
            'enterpreneur_or_mentor' =>'required'
        ]);
        if ($validator->fails()) {
            return redirect('signup')->withErrors($validator)->withInput();
        }
        $user = new User;
        $user->name = $request->full_name;
        $user->email = $request->email;
        $user->phone = $request->phone;
        $user->password = Hash::make($request->password);
        $user->user_role = $request->enterpreneur_or_mentor;
        $user->hash_login = md5(time().$user->email);
        $user->save();
        $login_link = url("/verify/".$user->user_role."/".$user->hash_login);

        event(new Registered($user));
        Mail::to($user->email)->send(new NotificationEmail($login_link));
        Auth::login($user);
        return Redirect::route('landing.notification',[]);
        //return Redirect::route('verification.send');
    }

    public function companylogin($id)
    {
        $hash_login = $id;
        $user = User::where('hash_login', $hash_login)->first();
        if($user){
            return Redirect::route('landing.companydetail',[
                'id' => $user->id
            ]);
        }
        return response()->json(['msg' => "Not Found"]);
    }


    public function mentorlogin($id)
    {
        $hash_login = $id;
        $user = User::where('hash_login', $hash_login)->first();
        if($user){
            return Redirect::route('landing.mentordetail',[
                'id' => $user->id
            ]);
        }
        return response()->json(['msg' => "Not Found"]);
    }
}
