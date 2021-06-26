<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    public function register(Request $request)
    {

        //return $request->all();
        $fields = $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|unique:users,email',
            'password' => 'required|string|confirmed',
        ]);

        $user = User::create([
            'name' => $fields['name'],
            'email' => $fields['email'],
            'password' => bcrypt($fields['password']),
        ]);

        $token = $user->createToken(Str::random(32))->plainTextToken;

        $data = [
            'user' => $user,
            'token' => $token,
        ];

        return response()->json($data, 201);
    }

    public function login()
    {
        return "login";
    }
}
