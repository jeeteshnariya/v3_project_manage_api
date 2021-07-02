<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory;

    protected $fillable = ['address',
        'phone', 'semester',
        'college_name', 'qualification', 'role_id', 'user_id',
        'status',
        'gender',
        'p_id', 'cover', 'avtar', 'email'];

    protected $hidden = ['created_at', 'updated_at', 'user_id'];

}
