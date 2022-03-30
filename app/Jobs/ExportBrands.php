<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
//use Excel;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\BrandsExportXLXS;
use App\Models\{User};
use App\Notifications\ExportBrands as ExportBrandsNotification;
use Illuminate\Support\Facades\Storage;
class ExportBrands implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    protected $user;
    public function __construct(User $user)
    {
        $this->user = $user;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $filename = 'brands'.time().'.xlsx';
        $path = ('brand_exports/'.$filename);
        Storage::put('brand_exports/'.$filename,'');
        Excel::store(new BrandsExportXLXS, $path, 's3');//$filename);
        $this->user->notify(new ExportBrandsNotification(['file'=>'https://d3djghvtckqcal.cloudfront.net/'.('brand_exports/'.$filename)]));
    }
}
