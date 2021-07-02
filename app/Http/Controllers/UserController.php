<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(Request $request, $id = null)
    {

        $query = User::where('p_id', $request->user()->id)->with(['profiles', 'roles']);

        $query = ($id && is_numeric($id)) ? $query->where('id', $id) : $query;

        $query = $query->get();

        $data = [
            'users' => $query,
            'message' => 'Data retrive successfully',
        ];

        return response()->json($data, 200);

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
        return response(['data' => [$User, $Profile], 'message' => 'Record deleted successfully'], 202);
    }
}
