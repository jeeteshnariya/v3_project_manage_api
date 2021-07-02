<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, Task $task, $id = null)
    {
        $query = $task::query();

        $query = ($id && is_numeric($id)) ? $query->where('project_id', $id) : $query;
        $query = $query->get();

        $data = [
            'tasks' => $query,
            'message' => 'Data retrive successfully',
        ];

        return response()->json($data, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Task $task)
    {

        //return $request->all();
        $fields = $request->validate([
            'title' => 'required|string',
            'priority' => 'required|string',
            'project_id' => 'required|numeric',
            'status' => 'required|string',
        ]);

        // dd($fields);
        $query = $task->create($fields);

        $data = [
            'projects' => $query,
            'message' => 'Task save successfully',
        ];

        return response()->json($data, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function show(Task $task)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function edit(Task $task)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Task $task, $id = 0)
    {

        $fields = $request->validate([
            'project_id' => 'required|numeric',
        ]);

        $query = $task;
        $query = ($request->project_id) ? $query->where('project_id', $request->project_id) : $query;
        $query = $query->find($id);
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
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function destroy(Task $task, $id = 0)
    {

        $query = $task->find($id);

        $data = [
            'projects' => $query,
            'message' => 'Record deleted successfully!',
        ];
        if ($query) {
            $query = $query->delete();
        } else {
            $data['message'] = "Record id not found for update!";
        }

        return response()->json($data, 202);
    }
}
