<?php
use App\Http\Controllers\LandingController;
use App\Http\Controllers\Mentor\MentorController;
use App\Http\Controllers\Company\CompanyController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\PressContentController;
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
    Route::post('/reset-password', [DashboardController::class, 'resetAdminPassword'])->name('resetAdminPassword');

    Route::get('/partial-matched', [LandingController::class, 'partialMatched'])->name('partialMatched');
    Route::get('/matched', [LandingController::class, 'matched'])->name('matched');

    Route::get('/profile-setting', [LandingController::class, 'profileSetting'])->name('profileSetting');
    Route::get('/account-setting', [LandingController::class, 'accountSetting'])->name('accountSetting');

    //Declined Custom Emails
    Route::get('/{id}/send-custom-mail', [DashboardController::class, 'sendCustomDeclineMail'])->name('sendCustomDeclineMail');
    Route::get('/{id}/delete-custom-mail', [DashboardController::class, 'deleteCustomDeclineMail'])->name('deleteCustomDeclineMail');

    //Removed (End of match) Custom Emails
    Route::get('/{id}/send-mail', [DashboardController::class, 'sendCustomRemoveMail'])->name('sendCustomRemoveMail');
    Route::get('/{id}/delete-mail', [DashboardController::class, 'deleteCustomRemoveMail'])->name('deleteCustomRemoveMail');

    //delete a user
    Route::post('/{id}/delete', [DashboardController::class, 'deleteUser'])->name('deleteUser');
    Route::post('/{id}/delete-mentor', [DashboardController::class, 'deleteMentorUser'])->name('deleteMentorUser');
    Route::post('/{id}/delete-company', [DashboardController::class, 'deleteCompanyUser'])->name('deleteCompanyUser');

    Route::post('/{id}/dashboard-company/delete', [CompanyController::class, 'deleteCompany'])->name('deleteDashCompany');

    //Create new testimonial..
    Route::get('/testimonials', [LandingController::class, 'testimonials'])->name('testimonials');

    //update user status active/ inactive
    Route::post('/update-company-status/{id}', [DashboardController::class, 'updateCompanyStatus'])->name('updateCompanyStatus');
    Route::post('/update-mentor-status/{id}', [DashboardController::class, 'updateMentorStatus'])->name('updateMentorStatus');

    //accepted/rejected
    Route::post('/approved-company/{id}', [DashboardController::class, 'acceptedCompanyProfile'])->name('acceptedCompanyProfile');
    Route::post('/approved-mentor/{id}', [DashboardController::class, 'acceptedMentorProfile'])->name('acceptedMentorProfile');
    Route::post('/rejected-mentor/{id}', [DashboardController::class, 'rejectedCompanyProfile'])->name('rejectedCompanyProfile');
    Route::post('/rejected-company/{id}', [DashboardController::class, 'rejectedMentorProfile'])->name('rejectedMentorProfile');


    //Sections for Home
    Route::get('/section-one', [DashboardController::class, 'sectionOne'])->name('sectionOne');
    Route::get('/section-two', [DashboardController::class, 'sectionTwo'])->name('sectionTwo');
    Route::get('/section-three', [DashboardController::class, 'sectionThree'])->name('sectionThree');

    Route::post('/saveSectionOne', [DashboardController::class, 'saveSectionOne'])->name('saveSectionOne');
    Route::post('/saveSectionTwo', [DashboardController::class, 'saveSectionTwo'])->name('saveSectionTwo');
    Route::post('/saveSectionThree', [DashboardController::class, 'saveSectionThree'])->name('saveSectionThree');

    //Featured Section
    Route::post('/featured-mentor/{id}', [DashboardController::class, 'addFeaturedMentor'])->name('addFeaturedMentor');
    Route::post('/featured-sme/{id}', [DashboardController::class, 'addFeaturedSme'])->name('addFeaturedSme');

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
        Route::post('/{id}/delete', [TestimonialController::class, 'deleteTestimonial'])->name('deleteTestimonial');
    });

    //press component
    Route::prefix('press')->name('press.')->group(function() {
        Route::get('/list', [PressContentController::class, 'getList'])->name('list');
        Route::post('/saveData', [PressContentController::class, 'saveData'])->name('saveData');
        Route::post('/updateData/{id}', [PressContentController::class, 'updateData'])->name('updateData');
        Route::get('/detail/{id}', [PressContentController::class, 'pressDetail'])->name('detail');
        Route::get('/view/{id}', [PressContentController::class, 'get'])->name('get');
        Route::post('/{id}/delete', [PressContentController::class, 'delete'])->name('delete');
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
    Route::get('/faq', [LandingController::class, 'faq'])->name('faq');
    Route::get('/terms-conditions', [LandingController::class, 'termsconditions'])->name('termsconditions');
    Route::get('/terminology', [LandingController::class, 'terminology'])->name('terminology');
    Route::get('/signup', [LandingController::class, 'signup'])->name('signup');
    Route::get('/admin/login', [LandingController::class, 'adminLogin'])->name('login');
    Route::get('/user/login', [LandingController::class,'userLogin'])->name('userlogin');
    Route::post('/users/login', [LandingController::class,'usersLogin'])->name('userslogin');
    Route::get('/notification/{id}/{user_role}', [LandingController::class,'notification'])->name('notification');
    Route::get('/find-mentors', [LandingController::class,'findMentors'])->name('findmentors');
    Route::get('/find-companies', [LandingController::class,'findCompanies'])->name('findcompanies');
    Route::post('/forget-password', [LandingController::class,'forgetPassword'])->name('forgetPassword');
    Route::post('/contact', [LandingController::class,'contact'])->name('contact');
    Route::get('/press', [LandingController::class, 'pressContent'])->name('pressContent');
    Route::get('/press-content', [LandingController::class, 'pressRelease'])->name('pressRelease');

    Route::get('/declined-mails', [LandingController::class, 'declineEmails'])->name('declineEmails');
    Route::get('/match-end-mails', [LandingController::class, 'removeEmails'])->name('removeEmails');


    Route::get('/decline/{mentor_id}/request/{company_id}',[LandingController::class,'declineMentor'])->name('declineMentor');
    Route::get('/sme-decline/{mentor_id}/request/{company_id}',[LandingController::class,'declineSme'])->name('declineSme');
    Route::post('/decline-mentor-reason',[LandingController::class,'declineMentorReason'])->name('declineMentorReason');
    Route::post('/decline-mentee-reason',[LandingController::class,'declineSmeReason'])->name('declineSmeReason');

    Route::post('/remove-mentor-reason',[LandingController::class,'removeMentorReason'])->name('removeMentorReason');
    Route::post('/remove-sme-reason',[LandingController::class,'removeSmeReason'])->name('removeSmeReason');


    Route::post('/{id}/delete', [DashboardController::class, 'deleteUser'])->name('deleteUser');
    Route::post('/{id}/delete-mentor', [DashboardController::class, 'deleteMentorUser'])->name('deleteMentorUser');
    Route::post('/{id}/delete-company', [DashboardController::class, 'deleteCompanyUser'])->name('deleteCompanyUser');

    //accepted mails pop up
    Route::get('/accepted-mail-sme', [LandingController::class, 'acceptedMailSme'])->name('acceptedMailSme');
    Route::get('/accepted-mail-mentor', [LandingController::class, 'acceptedMailMentor'])->name('acceptedMailMentor');
    Route::get('/not-accepted-mail-mentor', [LandingController::class, 'notAcceptedMailMentor'])->name('not.acceptedMailMentor');


});

Route::prefix('mentor')->name('mentor.')->group(function() {
    // Route::get('/signup', [MentorController::class, 'signup'])->name('signup');
    Route::post('/saveDetail/{id}', [MentorController::class, 'saveDetail'])->name('saveDetail');
    Route::get('/{id}/detail', [MentorController::class, 'get'])->name('detail');
    Route::post('/reset-password/{id}', [MentorController::class, 'resetPassword'])->name('resetPassword');
    Route::get('/remove/{mentor_id}', [MentorController::class, 'removeMentor'])->name('removeMentor');
});

Route::prefix('company')->name('company.')->group(function(){
    // Route::get('/signup', [CompanyController::class, 'signup'])->name('signup');
    Route::post('/saveData/{id}', [CompanyController::class, 'saveData'])->name('saveData');
    Route::get('/detail/{id}', [CompanyController::class, 'get'])->name('detail');
    Route::post('/reset-password/{id}', [CompanyController::class, 'resetPassword'])->name('resetPassword');
    Route::get('/remove/{mentor_id}', [CompanyController::class, 'removeCompany'])->name('removeCompany');

});

// Email Verify
Route::prefix('verify')->group(function(){
    Route::get('/entrepreneur/{id}', [RegisteredUserController::class, 'companylogin'])->name('companylogin');
    Route::get('/mentor/{id}', [RegisteredUserController::class, 'mentorlogin'])->name('mentorlogin');
});

Route::prefix('connect')->name('connect.')->group(function(){
    Route::get('/{company_id}/and/{mentor_id}/{area}', [MentorController::class, 'connectedSme'])->name('connectedSme');
    Route::get('/{company_id}/matched/{mentor_id}', [MentorController::class, 'recommendedMentor'])->name('recommendedMentor');
    Route::get('/{company_id}/{mentor_id}/{area}', [CompanyController::class, 'sendMentorDetails'])->name('sendMentorDetails');
});

require __DIR__.'/auth.php';
