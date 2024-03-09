<?php

use App\Controllers\Home;
use App\Controllers\HomeController;
use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
// $routes->get('/', 'Home::index');
$routes->get('/', 'HomeController::index');
// $routes->get('/', function () {
//     return 'Halo, ini adalah halaman utama pengguna.';
// });

