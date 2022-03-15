<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserExemptionRequest;
use App\Http\Resources\UserExemptionResource;
use App\Http\Requests\UpdateUserExemptionRequest;
use App\Models\UserExemption;
use App\Models\User;
use App\Repositories\ListRepository;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class UserExemptionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    protected $listRep;
    public function __construct(ListRepository $listRep)
    {
        $this->listRep = $listRep;
        $this->listRep->bindModel(UserExemption::class);
    }

    public function index(User $user)
    {
        Gate::authorize('viewAny',UserExemption::class);
        $query = $this->listRep->listFilteredQuery(['user_id','state_id'])
        ->leftJoin('users','users.id','=','user_exemptions.user_id')
        ->leftJoin('states','states.id','=','user_exemptions.state_id')
        ->select('user_exemptions.id','users.name as user_name','states.name as state_name','user_id');
        if(isset($_GET['perpage'])&&intval($_GET['perpage'])>0){
            $query=$query->paginate($_GET['perpage']);
        }else{
            $query=$query->get();
        }
        return UserExemptionResource::collection($query);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UserExemptionRequest $request, User $user)
    {
        Gate::authorize('create',UserExemption::class);
        $exemption = $user->exemption()->create($request->only('user_id','state_id'));
        return new UserExemptionResource($exemption);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(User $user, UserExemption $exemption)
    {
        Gate::authorize('view',$exemption);
        return new UserExemptionResource($exemption);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateUserExemptionRequest $request,User $user,UserExemption $exemption)
    {
        Gate::authorize('update',$exemption);
        $exemption->update($request->only('user_id','state_id'));
        return new UserExemptionResource($exemption);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user,UserExemption $exemption)
    {
        Gate::authorize('delete',$exemption);
        $exemption->delete();
        return response()->json(null, 204);
    }
}
