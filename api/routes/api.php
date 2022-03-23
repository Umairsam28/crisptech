<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FileController;
use App\Http\Controllers\{BannerController, BrandController, CategoryController, CityController, CountryController, RoleController, PermissionController, ProductController, UserController, CouponController, FaqController, InquiryController, ProductQuoteController, OrderController, StateController, UserExemptionController};
use App\Http\Controllers\Auth\ApiAuthController;
use App\Http\Controllers\Public\ProductController as ProductFrontController;
use App\Http\Controllers\Public\OrderController as OrderFrontController;
use App\Http\Controllers\Public\CouponController as CouponFrontController;
use App\Http\Controllers\Public\CartController as CartFrontController;
use App\Http\Controllers\Public\{HomeController, CountryCityStateController};


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// ------------------------------------------------ Frontend Routes-------->>>
Route::group(['prefix' => '/front'], function () {
    Route::get('/countries', [CountryCityStateController::class, 'countries']);
    Route::get('/states/{country}', [CountryCityStateController::class, 'states']);
    Route::get('/states-single/{state}', [CountryCityStateController::class, 'state']);
    Route::get('/cities/{state}', [CountryCityStateController::class, 'cities']);
    Route::get('/user-exemptions', [CountryCityStateController::class, 'exemptions']);
    Route::get('/home', [HomeController::class, 'index']);
    Route::get('/menu', [HomeController::class, 'menu']);
    Route::post('/cart', [CartFrontController::class, 'index']);
    Route::get('/cart/{cart}', [CartFrontController::class, 'get']);
    Route::post('/cart/{cart}', [CartFrontController::class, 'item']);
    Route::get('/products', [ProductFrontController::class, 'index']);
    Route::post('/products-viaslug', [ProductFrontController::class, 'getViaSlug']);
    Route::get('/category/{category}', [ProductFrontController::class, 'category']);
    Route::get('/categories', [ProductFrontController::class, 'categories']);
    Route::get('/products/{slug}', [ProductFrontController::class, 'get']);
    Route::post('/products/quote', [ProductFrontController::class, 'quote']);
    Route::post('/quote-form', [ProductFrontController::class, 'quoteform']);
    Route::post('/coupon', [CouponFrontController::class, 'view']);
    Route::post('/orders', [OrderFrontController::class, 'store']);
    Route::get('/orders/{order}', [OrderFrontController::class, 'index']);
    Route::group(['middleware' => ['cors', 'json.response']], function () {
        Route::post('/register', [ApiAuthController::class, 'register']);
        Route::post('/login', [ApiAuthController::class, 'login']);
        Route::put('/updateprofile', [ApiAuthController::class, 'updateprofile'])->middleware('auth:api');
        Route::post('/logout', [ApiAuthController::class, 'logout'])->middleware('auth:api');
    });
});


// ------------------------------------------------Backend Routes--------->>>
Route::group(['middleware' => ['cors', 'json.response']], function () {
    Route::post('/login', [ApiAuthController::class, 'login'])->name('login.api');
    Route::post('/register', [ApiAuthController::class, 'register'])->name('register.api');
});

Route::group(['middleware' => ['cors', 'json.response', 'auth:api']], function () {
    Route::post('/logout', [ApiAuthController::class, 'logout'])->name('logout.api');

    /*Company resource*/
    // Route::apiResource('departments', DepartmentController::class);
    Route::apiResource('file', FileController::class)->only([
        'store', 'destroy', 'index'
    ]);
    Route::post('/file/{table}/{id}/{type}', [FileController::class, 'findByTable']);
    Route::apiResource('roles', RoleController::class);
    Route::apiResource('banners', BannerController::class);
    Route::apiResource('permissions', PermissionController::class);
    Route::apiResource('user', UserController::class);
    Route::apiResource('user-exemptions', UserExemptionController::class);
    Route::apiResource('products', ProductController::class);
    Route::apiResource('coupons', CouponController::class);
    Route::apiResource('faqs', FaqController::class);
    Route::apiResource('inquiries', InquiryController::class);
    Route::apiResource('categories', CategoryController::class);
    Route::apiResource('brands', BrandController::class);
    Route::apiResource('countries', CountryController::class);
    Route::apiResource('states', StateController::class);
    Route::apiResource('cities', CityController::class);
    Route::apiResource('product-quotes', ProductQuoteController::class);
    Route::apiResource('orders', OrderController::class);

    Route::get('/order-stripedetails/{order}', [OrderController::class, 'stripedetails']);
    Route::get('/capture-order/{order}', [OrderController::class, 'capture']);
    Route::get('/refund-order/{order}', [OrderController::class, 'refund']);

    //additional
    Route::post('/a/products/uploadcsv', [ProductController::class, 'uploadcsv']);

    //export
    Route::get('/export-brands', [BrandController::class, 'export']);
    Route::get('/export-categories', [CategoryController::class, 'export']);
    Route::get('/export-products', [ProductController::class, 'export']);
});
Route::middleware('auth:api')->get('/me', function (Request $request) {
    $notificationsCount = $request->user()->unreadNotifications()->count();
    $user = $request->user();
    $user->notification_count = $notificationsCount;
    return $user;
});
Route::middleware('auth:api')->get('/front/me', function (Request $request) {
    $notificationsCount = $request->user()->unreadNotifications()->count();
    $user = $request->user();
    $user->notification_count = $notificationsCount;
    return $user;
});
Route::middleware('auth:api')->get('/notifications', function (Request $request) {
    $notifications = $request->user()->notifications()->paginate(50);
    $request->user()->notifications()->paginate(50)->markAsRead();
    return $notifications;
});

//importing
Route::post('/import-brands', [BrandController::class, 'import']);
