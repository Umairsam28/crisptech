<?php

namespace App\Http\Controllers;

use App\Http\Requests\TrackOrderFormRequest;
use App\Http\Resources\TrackOrderFormResource;
use App\Models\TrackOrderForm;
use App\Repositories\ListRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
class TrackOrderFormController extends Controller
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
        $this->listRep->bindModel(TrackOrderForm::class);
    }

    public function index()
    {
        Gate::authorize('viewAny',TrackOrderForm::class);
        $query = $this->listRep->listFilteredQuery(['name', 'email','phone','order_id'])
        ->select('track_order_forms.*');
        if(isset($_GET['perpage'])&&intval($_GET['perpage'])>0){
            $query=$query->paginate($_GET['perpage']);
        }else{
            $query=$query->get();
        }
        return TrackOrderFormResource::collection($query);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TrackOrderFormRequest $request)
    {
        Gate::authorize('create',TrackOrderForm::class);
        $trackOrder = TrackOrderForm::create($request->only('name', 'email','phone','order_id','description','is_new'));
        return new TrackOrderFormResource($trackOrder);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\TrackOrderForm  $trackOrderForm
     * @return \Illuminate\Http\Response
     */
    public function show(TrackOrderForm $trackOrder)
    {
        Gate::authorize('view',$trackOrder);
        return new TrackOrderFormResource($trackOrder);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\TrackOrderForm  $trackOrderForm
     * @return \Illuminate\Http\Response
     */
    public function update(TrackOrderFormRequest $request, TrackOrderForm $trackOrder)
    {
        Gate::authorize('update',$trackOrder);
        $trackOrder->update($request->only('name', 'email','phone','order_id','description','is_new'));
        return new TrackOrderFormResource($trackOrder);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TrackOrderForm  $trackOrderForm
     * @return \Illuminate\Http\Response
     */
    public function destroy(TrackOrderForm $trackOrder)
    {
        Gate::authorize('delete',$trackOrder);
        $trackOrder->delete();
        return response()->json(null, 204);
    }
}
