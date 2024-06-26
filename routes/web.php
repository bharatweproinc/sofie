<?php

use App\Http\Controllers\LandingController;
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

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


// Route::group(function() {
    Route::get('/', [LandingController::class, 'home']);
    Route::get('/contact-us', [LandingController::class, 'contactUs']);
    Route::get('/login-page', [LandingController::class, 'login']);
    Route::get('/signup', [LandingController::class, 'signup']);

    Route::get('/company-detail', [LandingController::class, 'comapnyDetails']);
    Route::get('/user-detail', [LandingController::class, 'profile']);
    Route::get('/privacy', [LandingController::class, 'privacy']);
    Route::get('/terminology', [LandingController::class, 'terminology']);
    Route::get('/dashboard', [LandingController::class, 'dashBoard']);
// });

require __DIR__.'/auth.php';
