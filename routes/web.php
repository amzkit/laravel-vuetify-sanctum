<?php

use Illuminate\Support\Facades\Route;
use Laravel\Socialite\Facades\Socialite;

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
    if(Auth::check()){
        return view('admin');
    }else{
        return view('index');
    }
});

Route::get('/logout', function(){
    Auth::user()->tokens()->delete();
    Auth::logout();
    return redirect('/login');
});

Auth::routes();

////////////////////////
// Socialite
Route::get('login/{provider}/redirect', [\App\Http\Controllers\Auth\LoginController::class, 'redirectToProvider'])->name('redirect');
Route::get('login/{provider}/callback', [\App\Http\Controllers\Auth\LoginController::class, 'handleProviderCallback']);

/*
Route::get('/auth/{provider}/redirect', function ($provider) {
    return Socialite::driver($provider)->redirect();
});

Route::get('/auth/{provider}/callback', function ($prodiver) {
    $user = Socialite::driver($provider)->user();
    return $user->token;
    // $user->token
});
*/
Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/{any?}', function(){
        return view('admin');
    });
});

//Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
