<?php

namespace App\Policies;

use App\Models\TrackOrderForm;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class TrackOrderFormPolicy
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
        return optional($user->permissions()->where('permission_id',192)->first())->id>0;
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\TrackOrderForm  $trackOrderForm
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(User $user, TrackOrderForm $trackOrderForm)
    {
        return optional($user->permissions()->where('permission_id',193)->first())->id>0;
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(User $user)
    {
        return optional($user->permissions()->where('permission_id',194)->first())->id>0;
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\TrackOrderForm  $trackOrderForm
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(User $user, TrackOrderForm $trackOrderForm)
    {
        return optional($user->permissions()->where('permission_id',195)->first())->id>0;
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\TrackOrderForm  $trackOrderForm
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(User $user, TrackOrderForm $trackOrderForm)
    {
        return optional($user->permissions()->where('permission_id',196)->first())->id>0;
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\TrackOrderForm  $trackOrderForm
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(User $user, TrackOrderForm $trackOrderForm)
    {
        return optional($user->permissions()->where('permission_id',196)->first())->id>0;
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\TrackOrderForm  $trackOrderForm
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(User $user, TrackOrderForm $trackOrderForm)
    {
        return optional($user->permissions()->where('permission_id',196)->first())->id>0;
    }
}
