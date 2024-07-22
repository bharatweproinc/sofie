<?php

use App\Http\Controllers\LandingController;
use App\Http\Controllers\Mentor\MentorController;
use App\Http\Controllers\Company\CompanyController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TestimonialController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::prefix('admin')->name('admin.')->middleware(['auth', 'role:admin'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/partial-matched', [LandingController::class, 'partialMatched'])->name('partialMatched');
    Route::get('/matched', [LandingController::class, 'matched'])->name('matched');
    // Route::get('/go-live/{id}', [DashboardController::class, 'goLive'])->name('goLive');
    Route::get('/profile-setting', [LandingController::class, 'profileSetting'])->name('profileSetting');
    Route::get('/account-setting', [LandingController::class, 'accountSetting'])->name('accountSetting');

    //Create new testimonial..
    Route::get('/testimonials', [LandingController::class, 'testimonials'])->name('testimonials');

    Route::prefix('company')->name('company.')->group(function(){
        Route::post('/saveData', [CompanyController::class, 'saveData'])->name('saveData');
        Route::get('/list', [CompanyController::class, 'getList'])->name('getList');
        Route::get('/detail-review/{id}', [CompanyController::class, 'get'])->name('get');
        Route::get('/detail/{id}', [LandingController::class, 'companyDetails'])->name('companydetail');
    });

    Route::prefix('mentor')->name('mentor.')->group(function() {
        Route::get('/list', [MentorController::class, 'view'])->name('list');
        Route::post('/saveDetail', [MentorController::class, 'saveDetail'])->name('saveDetail');
        Route::get('/{id}/detail', [MentorController::class, 'get'])->name('detail');
        Route::get('/mentor-detail/{id}', [LandingController::class, 'mentorDetails'])->name('mentordetail');
    });

    //existing testimonial
    Route::prefix('testimonial')->name('testimonial.')->group(function() {
        Route::get('/list', [TestimonialController::class, 'getList'])->name('list');
        Route::post('/saveData', [TestimonialController::class, 'saveData'])->name('saveData');
        Route::post('/updateData/{id}', [TestimonialController::class, 'updateData'])->name('updateData');
        Route::get('/detail/{id}', [LandingController::class, 'testimonialDetail'])->name('detail');
        Route::get('/view/{id}', [TestimonialController::class, 'get'])->name('get');
    });
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'role:admin', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });


Route::name('landing.')->group(function() {
    Route::get('/', [LandingController::class, 'home'])->name('home');
    Route::get('/contact-us', [LandingController::class, 'contactUs'])->name('contactus');
    Route::get('/company-detail/{id}', [LandingController::class, 'companyDetails'])->name('companydetail');
    Route::get('/mentor-detail/{id}', [LandingController::class, 'mentorDetails'])->name('mentordetail');
    Route::get('/company-list', [LandingController::class, 'companyList'])->name('companyList');
    Route::get('/company-detail-review',[LandingController::class, 'companyReview'])->name('companyReview');
    Route::get('/mentor-list', [LandingController::class, 'mentorList'])->name('mentorList');
    Route::get('/mentor-detail-review', [LandingController::class, 'mentorReview'])->name('mentorReview');
    Route::get('/partial-matched', [LandingController::class, 'partialMatched'])->name('partialMatched');
    Route::get('/matched', [LandingController::class, 'matched'])->name('matched');
    Route::get('/privacy', [LandingController::class, 'privacy'])->name('privacy');
    Route::get('/terminology', [LandingController::class, 'terminology'])->name('terminology');
    Route::get('/signup', [LandingController::class, 'signup'])->name('signup');
    Route::get('/admin/login', [LandingController::class, 'adminLogin'])->name('login');
    Route::get('/user/login', [LandingController::class,'userLogin'])->name('userlogin');
    Route::post('/users/login', [LandingController::class,'usersLogin'])->name('userslogin');
    Route::get('/notification', [LandingController::class,'notification'])->name('notification');
    Route::get('/find-mentors', [LandingController::class,'findMentors'])->name('findmentors');
    Route::get('/find-companies', [LandingController::class,'findCompanies'])->name('findcompanies');
});

Route::prefix('mentor')->name('mentor.')->group(function() {
    Route::get('/signup', [MentorController::class, 'signup'])->name('signup');
    Route::post('/saveDetail/{id}', [MentorController::class, 'saveDetail'])->name('saveDetail');
    Route::get('/{id}/detail', [MentorController::class, 'get'])->name('detail');

});

Route::prefix('company')->name('company.')->group(function(){
    Route::get('/signup', [CompanyController::class, 'signup'])->name('signup');
    Route::post('/saveData/{id}', [CompanyController::class, 'saveData'])->name('saveData');
    Route::get('/detail/{id}', [CompanyController::class, 'get'])->name('detail');

});

// Email Verify
Route::prefix('verify')->group(function(){
    Route::get('/entrepreneur/{id}', [RegisteredUserController::class, 'companylogin'])->name('companylogin');
    Route::get('/mentor/{id}', [RegisteredUserController::class, 'mentorlogin'])->name('mentorlogin');
});


require __DIR__.'/auth.php';
