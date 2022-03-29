<?php

namespace App\Http\Controllers;
use App\Http\Resources\QuoteFormResource;
use App\Models\QuoteForm;
use Illuminate\Support\Facades\Gate;
use App\Repositories\ListRepository;
use Illuminate\Http\Request;
class QuoteFormController extends Controller
{
    protected $listRep;
    public function __construct(ListRepository $listRep)
    {
        $this->listRep = $listRep;
        $this->listRep->bindModel(QuoteForm::class);
    }
    public function index()
    {
        Gate::authorize('viewAny',QuoteForm::class);
        $query = $this->listRep->listFilteredQuery(['email', 'message'])
        ->select('quote_forms.*');
        if(isset($_GET['perpage'])&&intval($_GET['perpage'])>0){
            $query=$query->paginate($_GET['perpage']);
        }else{
            $query=$query->get();
        }
        return QuoteFormResource::collection($query);
    }
    public function update(Request $request, QuoteForm $quoteForm)
    {
        $quoteForm->update($request->only('is_new'));
        return new QuoteFormResource($quoteForm);
    }
    public function show(QuoteForm $quoteForm)
    {
        Gate::authorize('view',$quoteForm);
        return new QuoteFormResource($quoteForm);
    }
    public function destroy(QuoteForm $quoteForm)
    {
        Gate::authorize('delete',$quoteForm);
        $quoteForm->delete();
        return response()->json(null, 204);
    }
}
