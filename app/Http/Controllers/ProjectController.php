<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, $id = null)
    {

        $query = Project::where('user_id', $request->user()->id);

        $query = ($id && is_numeric($id)) ? $query->where('id', $id) : $query;

        $query = $query->get();

        $data = [
            'projects' => $query,
            'message' => 'Data retrive successfully',
        ];

        return response()->json($data, 200);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        //return $request->all();
        $fields = $request->validate([
            'name' => 'required|string',
            'technology' => 'required|string',
            'description' => 'required|string',
            'due_date' => 'required|string',
            'status' => 'required|string',
            'start_date' => 'required|string',
        ]);

        $fields['user_id'] = $request->user()->id;
        // dd($fields);
        $query = Project::create($fields);

        $data = [
            'projects' => $query,
            'message' => 'Data save successfully',
        ];

        return response()->json($data, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function show(Project $project)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function edit(Project $project)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Project $project, $id = null)
    {
        $query = $project->where('user_id', $request->user()->id)->find($id);
        $data = [
            'projects' => $query,
            'message' => 'Record Successfully Updated!',
        ];
        if ($query) {
            $query = $query->update($request->all());
        } else {
            $data['message'] = "Record id not found for update!";
        }

        return response()->json($data, 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, Project $project, $id = null)
    {

        $query = $project->where('user_id', $request->user()->id)->find($id);

        $data = [
            'projects' => $query,
            'message' => 'Record deleted successfully!',
        ];
        if ($query) {
            $query = $query->delete();
        } else {
            $data['message'] = "Record id not found for update!";
        }

        return response()->json($data, 401);

    }
}
