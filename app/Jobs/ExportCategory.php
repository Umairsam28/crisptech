<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use App\Exports\CategoryExportXLXS;
use App\Models\{User};
use App\Notifications\ExportCategory as ExportCategoryNotification;
use Excel;
use Illuminate\Support\Facades\Storage;

class ExportCategory implements ShouldQueue
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
        $filename = 'category'.time().'.xlsx';
        $path = ('category_exports/'.$filename);
        Storage::put('category_exports/'.$filename,'');

        Excel::store(new CategoryExportXLXS, $path,'s3');//$filename);
        $this->user->notify(new ExportCategoryNotification(['file'=>'https://d3djghvtckqcal.cloudfront.net/'.('category_exports/'.$filename)]));
    }
}
