<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use App\Exports\ProductExportXLXS;
use App\Models\{User};
use App\Notifications\ExportProduct as ExportProductNotification;
use Excel;
use Illuminate\Support\Facades\Storage;

class ExportProducts implements ShouldQueue
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
        $filename = 'product'.time().'.xlsx';
        $path = ('product_exports/'.$filename);
        Storage::put('product_exports/'.$filename,'');
        Excel::store(new ProductExportXLXS, $path, 's3');//$filename);
        $this->user->notify(new ExportProductNotification(['file'=>'https://d3djghvtckqcal.cloudfront.net/'.('product_exports/'.$filename)]));
    }
}
