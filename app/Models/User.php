<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
        'p_id',
        'role_id',
    ];

    protected $hidden = [
        'password',
        'remember_token',
        'p_id',
        'role_id',
        'updated_at',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function childs()
    {
        return $this->hasMany(self::class, 'p_id', 'id')->select(['id', 'p_id'])->with('childs');
    }

    public function profiles()
    {
        return $this->hasOne(Profile::class);
    }

    public function roles()
    {
        return $this->belongsTo(Role::class, 'role_id');
    }
}
