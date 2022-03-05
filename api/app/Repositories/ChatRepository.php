<?php
namespace App\Repositories;

use App\Repositories\BaseRepository;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use App\Models\{ChatHead, Chat};
class ChatRepository implements BaseRepository {
    protected $model;
    public function __construct(ChatHead $model)
    {
        $this->model=$model;
    }
    public function find($id) : ChatHead {
        return $this->model->find($id);
    }
    public function delete($id){
        $this->model->delete($id);
    }
    public function findBySenders($sender, $receiver){
        return $this->model->where(function($query) use ($sender, $receiver){
            $query->where('user_id',$sender)->where('sender_id',$receiver);
        })->orWhere(function($query) use ($sender, $receiver){
            $query->where('sender_id',$sender)->where('user_id',$receiver);
        })->first();
    }
    public function insert($sender, $receiver){
        return $this->model->create([
            'user_id'=>$sender,
            'sender_id'=>$receiver,
        ]);
    }
}