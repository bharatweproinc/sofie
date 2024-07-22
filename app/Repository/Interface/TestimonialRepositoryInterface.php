<?php

namespace App\Repository\Interface;
use Illuminate\Http\Request;
Interface TestimonialRepositoryInterface {
    /**
     * getData function return the data packet of job details
     * @param slug
     * @return array
    */
    public function get($id);
    public function getList();
    public function saveData(Request $data);
}
