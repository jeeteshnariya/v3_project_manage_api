<?php

namespace App\Http\Controllers;

use App\Models\User;

class UserController extends Controller
{
    public function index($id = null)
    {
        if ($id && is_numeric($id)) {

            $User = User::with(['profiles', 'roles'])->findOrFail($id);
            return response(['User' => $User, 'message' => 'data retrive successfully'], 200);

        }

        $User = User::with(['profiles', 'roles'])->get();
        return response(['User' => $User, 'message' => 'data retrive successfully'], 200);
    }
}
