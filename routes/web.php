<?php

use App\Http\Controllers\LandingController;
use App\Http\Controllers\Mentor\MentorController;
use App\Http\Controllers\Company\CompanyController;
use App\Http\Controllers\ProfileController;
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
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::name('landing.')->group(function() {
    Route::get('/', [LandingController::class, 'home'])->name('home');
    Route::get('/contact-us', [LandingController::class, 'contactUs'])->name('contactus');
    Route::get('/login-page', [LandingController::class, 'login'])->name('login');
    Route::get('/company-detail', [LandingController::class, 'companyDetails'])->name('companydetail');
    Route::get('/company-list', [LandingController::class, 'companyList'])->name('companyList');
    Route::get('/company-detail-review', [LandingController::class, 'companyReview'])->name('companyReview');
    Route::get('/mentor-list', [LandingController::class, 'mentorList'])->name('mentorList');
    Route::get('/mentor-detail-review', [LandingController::class, 'mentorReview'])->name('mentorReview');
    Route::get('/partial-matched', [LandingController::class, 'partialMatched'])->name('partialMatched');
    Route::get('/matched', [LandingController::class, 'matched'])->name('matched');
    Route::get('/privacy', [LandingController::class, 'privacy'])->name('privacy');
    Route::get('/terminology', [LandingController::class, 'terminology'])->name('terminology');
    Route::get('/dashboard', [LandingController::class, 'dashBoard'])->name('dashboard');
    Route::get('/signup', [LandingController::class, 'signup'])->name('signup');
    Route::get('/profile-setting', [LandingController::class, 'profileSetting'])->name('profileSetting');
    Route::get('/account-setting', [LandingController::class, 'accountSetting'])->name('accountSetting');
    Route::post('/authenticate', [LandingController::class, 'authenticate'])->name('authenticate');
    //Route::post('/register', [LandingController::class, 'store'])->name('store');
    Route::post('/logout', [LandingController::class, 'logout'])->name('logout');
});

Route::prefix('mentor')->name('mentor.')->group(function() {
    Route::get('/list', [MentorController::class, 'view'])->name('list');
    Route::post('/{id}/saveDetail', [MentorController::class, 'saveDetail'])->name('saveDetail');
    Route::get('/{id}/detail', [MentorController::class, 'get'])->name('detail');
});

Route::prefix('company')->name('company.')->group(function(){
    Route::post('/saveData', [CompanyController::class, 'saveData'])->name('saveData');
    Route::get('/list', [CompanyController::class, 'getList'])->name('getList');
    Route::get('/detail-review/{id}', [CompanyController::class, 'get'])->name('get');
});


require __DIR__.'/auth.php';
