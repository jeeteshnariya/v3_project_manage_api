<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use App\Models\User;
use Illuminate\Http\Request;

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

    public function store(Request $request)
    {
        // return $request->user();
        $login_user = $request->user();
        // $auth_role = Role::where('id', $login_user->role_id)->first();
        // return $request->all();
        $role_id = (int) $login_user->role_id;
        $p_id = (int) $login_user->id;
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'p_id' => $p_id,
            'role_id' => $role_id + 1,
        ]);

        if ($user) {
            $data = $request->profiles;
            $data['user_id'] = $user->id;
            $profile = Profile::create($data);
            return response(['profile' => $profile, 'message' => 'data save successfully'], 201);
        }

    }

    public function edit(Request $request, $id)
    {
        $profile = Profile::where('user_id', $id)->first();
        $profile->update($request->profiles);
        return response(['profile' => $profile, 'message' => 'Record Successfully Updated!'], 201);

    }

    public function delete($id)
    {
        $User = User::destroy($id);
        $Profile = Profile::where('user_id', $id)->delete();
        return response(['data' => [$User, $Profile], 'message' => 'Record deleted successfully'], 401);
    }
}
