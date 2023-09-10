<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $table = 'tasks';

    protected $guarded = ['id'];

    public function scopeFilter($query, $filters)
    {
       return $query->where('title', 'like', '%'.$filters.'%');
    }

    public function user() {
        return $this->belongsTo(User::class);
    }
}