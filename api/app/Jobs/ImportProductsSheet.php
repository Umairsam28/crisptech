<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldBeUniqueUntilProcessing;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use App\Models\{File, Product, Brand, User};
use Illuminate\Support\Str;
use App\Notifications\ProductImports;

class ImportProductsSheet implements ShouldQueue, ShouldBeUniqueUntilProcessing
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    protected $user;
    protected $file;
    public function __construct(File $file, User $user)
    {
        $this->file = $file;
        $this->user = $user;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $filename = public_path('storage/'.$this->file->url);
        if (!file_exists($filename) || !is_readable($filename)){
            echo 'here';
            return false;
        }
        if (($handle = fopen($filename, 'r')) !== false)
        {
            $count = 0;
            while(! feof($handle)){
                $count++;
                $row = fgetcsv($handle);
                if($count>1){
                    list($part,$condition,$currency,$saleprice,$manufacturer_id,$category_id,$name,$url,$image_url,$weight,$availability,$remaining_stock,$model,$compatibility,$specification,$crawl_site) = $row;
                    if($part){
                        // $brand = Brand::firstOrCreate([
                        //     'name' => $manufacturer
                        // ]);
                        $saleprice = str_replace('$','',$saleprice);
                        $in_stock = Str::contains(strtolower($availability), 'instock');
                        $product = Product::firstOrCreate(
                            ['part_number'=>$part],
                            [
                                'part_number'=>$part,'name'=>$name,'brand_id'=>$manufacturer_id,
                                'category_id'=>$category_id,'condition'=>$condition,'price'=>$saleprice,
                                'crawl_url'=>$url,'description'=>$specification,
                                'in_stock'=>$in_stock,'stock_qty'=>intval($remaining_stock),'manage_stock'=>(intval($remaining_stock)>0?1:0),
                                'discount'=>0,'crawl_site'=>$crawl_site,
                                'slug'=>Str::slug($part)
                            ]
                        );
                        $product->sku = 'CRIS-'.$product->id;
                        $product->save();
                    }
                }
            }
            fclose($handle);
        }
        $this->user->notify(new ProductImports(['file'=>$this->file->full_url]));
    }
}
