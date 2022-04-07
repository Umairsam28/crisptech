<?php

namespace App\Imports;

use Maatwebsite\Excel\Concerns\WithEvents;
use Illuminate\Support\Facades\Hash;
use Maatwebsite\Excel\Concerns\ToModel;
use Illuminate\Support\Str;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use App\Models\{User, File, Product};
use Maatwebsite\Excel\Concerns\Importable;
use Illuminate\Support\Facades\Storage;
use Maatwebsite\Excel\Concerns\SkipsOnFailure;
use Maatwebsite\Excel\Validators\Failure;
use Illuminate\Contracts\Queue\ShouldQueue;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Image;
use App\Notifications\ProductImports;
use Maatwebsite\Excel\Concerns\RegistersEventListeners;
use Maatwebsite\Excel\Events\AfterImport;

class ProductsImport implements ToModel, WithHeadingRow, SkipsOnFailure
{
    use Importable;
    public function onFailure(Failure ...$failures)
    {
        // Handle the failures how you'd like.
    }

    /**
     * @param array $row
     *
     * @return Product|null
     */
    public function model(array $row)
    {
        try{
            $image_sizes = [
                ['width' => 264, 'height' => 199],
                ['width' => 456, 'height' => 344],
                ['width' => 264, 'height' => 264],
            ];
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
                    if($row['meta_title']){
                        $updatedArray['meta_title'] = $row['meta_title'];
                    }
                    if($row['meta_description']){
                        $updatedArray['meta_description'] = $row['meta_description'];
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
                            'slug'=>Str::slug($row['title']),
                            'google_feed'=>$row['google_feed'],
                            'is_active'=>$row['active'],
                            'meta_title'=>$row['meta_title'],
                            'meta_description'=>$row['meta_description'],
                        ]
                    );
                    $product->sku = 'CRIS-'.$product->id;
                    $product->save();
                    if($row['image_url']){
                        $contents = file_get_contents($row['image_url']);
                        $ext = pathinfo($row['image_url'], PATHINFO_EXTENSION);
                        $path = 'products_furl/'.md5($product->id).'.'.$ext;
                        Storage::put($path, $contents);
                        $updatedArray['part_number'] = $row['part_number'];
                        $fileData = File::create([
                            'url'=>$path,
                            'fileable_id'=>$product->id,
                            'fileable_type'=>'App\Models\Product',
                            'table_name'=>'products',
                            'extension'=>$ext,
                        ]);
                        foreach($image_sizes as $size){
                            $img = Image::make(Storage::get($path));
                            $name = $size['height'].'x'.$size['width'].'.'.$ext;
                            if(Storage::exists('resized/'.$fileData->id.'-'.$name)){
                                Storage::delete('resized/'.$fileData->id.'-'.$name);
                            }
                            $img->resize($size['height'], $size['width']);
                            Storage::put('resized/'.$fileData->id.'-'.$name,$img->stream());
                        }
                    }
                    return $product;
                }
            }
        }catch(\Exception $ex){

        }
    }
}