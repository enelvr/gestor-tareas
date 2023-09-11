<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\{UsersController, TasksController, RolesController};
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

Route::permanentRedirect('/', 'login');

Route::get('/login', function () {
    return Inertia::render('Auth/Login');
})->name('login');

Route::middleware([
    'auth:sanctum',
    'verified',
])->group(function () {

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::group(['middleware' => ['role:admin']], function () {
        Route::resource('users', UsersController::class);
        Route::resource('roles', RolesController::class);
    });
    Route::resource('tasks', TasksController::class);
});
