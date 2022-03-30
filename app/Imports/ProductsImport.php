<?php

namespace App\Imports;

use Maatwebsite\Excel\Concerns\WithEvents;
use App\Models\Product;
use Illuminate\Support\Facades\Hash;
use Maatwebsite\Excel\Concerns\ToModel;
use Illuminate\Support\Str;
use Illuminate\Contracts\Queue\ShouldQueue;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Events\AfterImport;
use App\Models\User;
use App\Notifications\ProductImports;
use Maatwebsite\Excel\Concerns\RegistersEventListeners;
use Maatwebsite\Excel\Concerns\Importable;

class ProductsImport implements ToModel, WithChunkReading, ShouldQueue, WithHeadingRow, WithEvents
{
    use Importable, RegistersEventListeners;
    public static function afterImport(AfterImport $event)
    {
        // dd($event->getReader()->currentFile);
        $admins = User::where('role_id',1)->get();
        foreach($admins as $admin){
            $admin->notify(new ProductImports(''));
        }
    }
    /**
     * @param array $row
     *
     * @return Brand|null
     */
    public function model(array $row)
    {
        $saleprice = str_replace('$','',$row['sale_price']);
        $price = str_replace('$','',$row['price']);
        $in_stock = Str::contains(strtolower($row['availability']), 'instock');
        if($row['sku']){
            //means update
            if(Product::where('sku',$row['sku'])->count()>0){
                $updatedArray = [];
                if($row['part_number']){
                    $updatedArray['part_number'] = $row['part_number'];
                }
                if($row['title']){
                    $updatedArray['name'] = $row['title'];
                }
                if($row['manufacturer']){
                    $updatedArray['brand_id'] = $row['manufacturer'];
                }
                if($row['category']){
                    $updatedArray['category_id'] = $row['category'];
                }
                if($row['condition']){
                    $updatedArray['condition'] = $row['condition'];
                }
                if($row['sale_price']){
                    $updatedArray['sale_price'] = $saleprice;
                }
                if($row['weight']){
                    $updatedArray['weight'] = $row['weight'];
                }
                if($price){
                    $updatedArray['price'] = $price;
                }
                if($row['product_url']){
                    $updatedArray['crawl_url'] = $row['product_url'];
                }
                if($row['specification']){
                    $updatedArray['description'] = $row['specification'];
                }
                if($row['availability']){
                    $updatedArray['in_stock'] = $in_stock;
                }
                if(intval($row['remain_stock'])){
                    $updatedArray['stock_qty'] = intval($row['remain_stock']);
                    $updatedArray['manage_stock'] = (intval($row['remain_stock'])>0?1:0);
                }
                if($row['import']){
                    $updatedArray['crawl_site'] = $row['import'];
                }
                if($row['google_feed']){
                    $updatedArray['google_feed'] = $row['google_feed'];
                }
                if($row['active']){
                    $updatedArray['is_active'] = $row['active'];
                }
                Product::where('sku',$row['sku'])->update($updatedArray);
                return Product::where('sku',$row['sku'])->first();
            }
        }else{
            //means create
            if(Product::where('part_number',$row['part_number'])->where('condition',$row['condition'])->count()==0){
                $product = Product::create(
                    [
                        'part_number'=>$row['part_number'],'name'=>$row['title'],'brand_id'=>$row['manufacturer'],
                        'category_id'=>$row['category'],'condition'=>$row['condition'],'sale_price'=>$saleprice,
                        'weight'=>$row['weight'],'price'=>$price,
                        'crawl_url'=>$row['product_url'],'description'=>$row['specification'],
                        'in_stock'=>$in_stock,'stock_qty'=>intval($row['remain_stock']),'manage_stock'=>(intval($row['remain_stock'])>0?1:0),
                        'crawl_site'=>$row['import'],
                        'slug'=>Str::slug($row['part_number'].' '.$row['condition']),
                        'google_feed'=>$row['google_feed'],
                        'is_active'=>$row['active'],
                    ]
                );
                $product->sku = 'CRIS-'.$product->id;
                $product->save();
                return $product;
            }
        }
    }
    public function chunkSize(): int
    {
        return 50;
    }
}