<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

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

        $token = $user->createToken('register')->plainTextToken;

        $data = [
            'user' => $user,
            'token' => $token,
            'message' => 'data retrive successfully',
        ];

        return response()->json($data, 201);
    }

    public function login(Request $request)
    {
        // return $request->user();
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
            'device_name' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        $data = [
            'user' => $user,
            'token' => $user->createToken($request->device_name)->plainTextToken,
            'message' => 'data retrive successfully',
        ];

        return response()->json($data, 201);
    }

    public function logout(Request $request)
    {
        return $request->user()->tokens()->delete();
    }
}
