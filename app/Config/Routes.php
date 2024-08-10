<?php

use App\Controllers\Home;
use App\Controllers\PoiController;
use App\Controllers\DataController;
use App\Controllers\HomeController;
use App\Controllers\AdminController;
use CodeIgniter\Router\RouteCollection;
use Myth\Auth\Controllers\AuthController;
use App\Controllers\Admin\DataKotaController;

/**
 * @var RouteCollection $routes
 */
// $routes->get('/', 'Home::index');
$routes->get('/', 'HomeController::index');

$routes->get('admin/dashboard', 'Admin\AdminController::index'); 
// $routes->get('admin/edit', 'Admin\AdminController::edit'); 

$routes->group('admin', ['namespace' => 'App\Controllers\Admin'], function(RouteCollection $routes){
    $routes->get('data-kabupaten', 'DataController::index');
    $routes->get('data-kabupaten/edit/(:num)', 'DataController::edit/$1');
    $routes->post('data/update/(:num)', 'DataController::update/$1');

    $routes->get('data-kota', 'DataKotaController::index');
    $routes->get('data-kota/edit/(:num)', 'DataKotaController::edit/$1');
    $routes->post('data-kota/update/(:num)', 'DataKotaController::update/$1');

    $routes->get('data-poi', 'PoiController::index');
    $routes->get('data-poi/create', 'PoiController::create');
    $routes->post('data-poi/store', 'PoiController::store');
    $routes->get('data-poi/edit/(:num)', 'PoiController::edit/$1');
    $routes->post('data-poi/update/(:num)', 'PoiController::update/$1');
    $routes->get('data-poi/delete/(:num)', 'PoiController::delete/$1');

});

$routes->get('/tes', 'Admin\AdminController::test'); 