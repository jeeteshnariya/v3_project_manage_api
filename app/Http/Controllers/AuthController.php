<?php

namespace App\Http\Controllers;

use App\Models\File;
use App\Models\Profile;
use App\Models\Project;
use App\Models\Task;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        // Database if empty than we register first user by register function
        $admin = User::where('role_id', 1)->first();
        if ($admin) {
            return response()->json(['message' => 'Admin Already Added'], 202);
        }
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

        $user = User::with('roles')->where('email', $request->email)->first();

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

    public function dashboard(Request $request)
    {
        $user = User::where('p_id', $request->user()->id)->sum('id');
        $task = Task::count('id');
        $project = Project::count('id');
        $profile = Profile::count('id');
        $files = File::count('id');

        $data = [
            'pie' => [$project, $profile, $task, $files],
            'message' => 'Data retrive successfully',
        ];

        return response()->json($data, 201);
    }
}
