<?php

namespace App\Policies;

use App\Models\QuoteForm;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class QuoteFormPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function viewAny(User $user)
    {
        return optional($user->permissions()->where('permission_id',184)->first())->id>0;
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\QuoteForm  $productQuote
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(User $user, QuoteForm $quoteForm)
    {
        return optional($user->permissions()->where('permission_id',185)->first())->id>0;
    }
    
    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\QuoteForm  $productQuote
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(User $user, QuoteForm $quoteForm)
    {
        return optional($user->permissions()->where('permission_id',186)->first())->id>0;
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\QuoteForm  $productQuote
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(User $user, QuoteForm $quoteForm)
    {
        return optional($user->permissions()->where('permission_id',147)->first())->id>0;
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\QuoteForm  $productQuote
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(User $user, QuoteForm $quoteForm)
    {
        return optional($user->permissions()->where('permission_id',147)->first())->id>0;
    }
}
