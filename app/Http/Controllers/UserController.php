<?php

namespace App\Http\Controllers;

use App\Models\User;

class UserController extends Controller
{
    public function index($id = null)
    {
        if ($id && is_numeric($id)) {

            return User::findOrFail($id);
        }
        return User::all();
    }
}
