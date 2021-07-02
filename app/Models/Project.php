<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'technology', 'start_date', 'due_date', 'status', 'description', 'user_id'];

    public function users()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
