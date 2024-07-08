<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    /**
     * load admin dashboard page.
     */
    public function index() {
        return Inertia::render('Landing/Dashboard/View');
    }
}
