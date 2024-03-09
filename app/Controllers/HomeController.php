<?php

namespace App\Controllers;

use App\Controllers\BaseController;

class HomeController extends BaseController
{
    public function index()
    {
        return view('user/index');
        // return 'Halo, ini adalah halaman utama pengguna.';
    }
}
