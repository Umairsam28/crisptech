<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\{NewsletterRequest, TrackOrderFormRequest};
use App\Models\{Newsletter, TrackOrderForm};
use App\Mail\Newsletter as NewsletterMail;
use App\Mail\TrackOrderFormMail;
use Illuminate\Support\Facades\Mail;
class InquiryController extends Controller
{
    public function newsletter(NewsletterRequest $request){
        $newsletter = Newsletter::create($request->only(
            'email',
        ));
        Mail::to('rfq@crisptechllc.com')->send(new NewsletterMail(url('newsletters/view/'.$newsletter->id)));
        return response()->json(['newsletter'=>$newsletter]);
    }
    public function trackyourorder(TrackOrderFormRequest $request){
        $trackorder = TrackOrderForm::create($request->only(
            'email','phone','name','order_id','description'
        ));
        Mail::to('rfq@crisptechllc.com')->send(new TrackOrderFormMail(url('track-order-forms/view/'.$trackorder->id)));
        return response()->json(['trackorder'=>$trackorder]);
    }
}