<?php

namespace App\Providers;

use App\Policies\{BrandPolicy, CategoryPolicy, UserPolicy, PermissionPolicy, RolePolicy, CouponPolicy, FaqPolicy, InquiryPolicy, ProductPolicy, ProductQuotePolicy};
use App\Models\{Brand, Category, User, Permission, Role, Product, Coupon, Faq, Inquiry, ProductQuote};
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use Laravel\Passport\Passport;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // 'App\Models\Model' => 'App\Policies\ModelPolicy',
        User::class => UserPolicy::class,
        Permission::class => PermissionPolicy::class,
        Role::class => RolePolicy::class,
        Product::class=> ProductPolicy::class,
        Coupon::class=>CouponPolicy::class,
        Faq::class=>FaqPolicy::class,
        Inquiry::class=>InquiryPolicy::class,
        Category::class=>CategoryPolicy::class,
        Brand::class => BrandPolicy::class,
        ProductQuote::class=>ProductQuotePolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();
        if (! $this->app->routesAreCached()) {
            // Passport::routes();
            Passport::tokensExpireIn(now()->addDays(15));
            Passport::refreshTokensExpireIn(now()->addDays(30));
            Passport::personalAccessTokensExpireIn(now()->addMonths(6));
        }
        // Gate::guessPolicyNamesUsing(function ($modelClass) {
        //     // Return the name of the policy class for the given model...
        // });
    }
}
