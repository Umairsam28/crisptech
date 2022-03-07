<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FileController;
use App\Http\Controllers\{BannerController, BrandController, CategoryController, RoleController, PermissionController, ProductController, UserController, CouponController, FaqController, InquiryController, ProductQuoteController};
use App\Http\Controllers\Auth\ApiAuthController;
use App\Http\Controllers\Public\ProductController as ProductFrontController;
use App\Http\Controllers\Public\OrderController as OrderFrontController;
use App\Http\Controllers\Public\CartController as CartFrontController;
use App\Http\Controllers\Public\InquiryController as InquiryFrontController;
use App\Http\Controllers\Public\HomeController;


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

Route::get('/front/home', [HomeController::class,'index'])->name('home.api.create');

Route::post('/front/inquiry', [InquiryFrontController::class,'index'])->name('inquiry.api.create');

Route::post('/front/cart', [CartFrontController::class,'index'])->name('cart.api.create');
Route::get('/front/cart/{cart}', [CartFrontController::class,'get'])->name('cart.api.get');
Route::post('/front/cart/{cart}', [CartFrontController::class,'item'])->name('cart.api.item');

Route::get('/front/products', [ProductFrontController::class,'index'])->name('products.api');
Route::post('/front/products-viaslug', [ProductFrontController::class,'getViaSlug'])->name('products.getViaSlug.api');
Route::get('/front/category/{category}', [ProductFrontController::class,'category'])->name('category.api');
Route::get('/front/categories', [ProductFrontController::class,'categories'])->name('categories.api');

Route::get('/front/products/{slug}', [ProductFrontController::class,'get'])->name('product.api');
Route::post('/front/products/quote', [ProductFrontController::class,'quote'])->name('product.quote.api');

Route::post('/front/orders', [OrderFrontController::class,'store'])->name('orders.api.store');
Route::get('/front/orders/{order}', [OrderFrontController::class,'index'])->name('orders.api.get');


Route::group(['middleware' => ['cors', 'json.response']], function () {
    Route::post('/login', [ApiAuthController::class,'login'])->name('login.api');
    Route::post('/register', [ApiAuthController::class,'register'])->name('register.api');
});

Route::group(['middleware' => ['cors', 'json.response','auth:api']], function () {
    Route::post('/logout', [ApiAuthController::class,'logout'])->name('logout.api');
    Route::put('/updateprofile', [ApiAuthController::class,'updateprofile']);

    /*Company resource*/
    // Route::apiResource('departments', DepartmentController::class);
    Route::apiResource('file', FileController::class)->only([
        'store', 'destroy', 'index'
    ]);
    Route::post('/file/{table}/{id}/{type}', [FileController::class,'findByTable']);
    Route::apiResource('roles', RoleController::class);
    Route::apiResource('banners', BannerController::class);
    Route::apiResource('permissions', PermissionController::class);
    Route::apiResource('user', UserController::class);
    Route::apiResource('products', ProductController::class);
    Route::apiResource('coupons', CouponController::class);
    Route::apiResource('faqs', FaqController::class);
    Route::apiResource('inquiries', InquiryController::class);
    Route::apiResource('categories', CategoryController::class);
    Route::apiResource('brands', BrandController::class);
    Route::apiResource('product-quotes', ProductQuoteController::class);

    //additional
    Route::post('/a/products/uploadcsv', [ProductController::class,'uploadcsv']);
});
Route::middleware('auth:api')->get('/me', function (Request $request) {
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
