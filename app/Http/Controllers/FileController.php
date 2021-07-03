<?php

namespace App\Http\Controllers;

use App\Models\File;
use Illuminate\Http\Request;

class FileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
    public function store(Request $request)
    {

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\File  $file
     * @return \Illuminate\Http\Response
     */
    public function show(File $file)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\File  $file
     * @return \Illuminate\Http\Response
     */
    public function edit(File $file)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\File  $file
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, File $file)
    {
        // $request->validate([
        //     'upload.*' => 'required',
        // ]);

        $imageNameArr = [];
        if ($request->has('file')) {
            // foreach ($request->file('file') as $file) {
            // you can also use the original name
            $file = $request->file('file');
            $imageName = time() . '-' . $file->getClientOriginalName();
            $imageNameArr = [
                'name' => $imageName,
                'path' => env('APP_URL') . '/storage/' . $imageName,
                'type' => $file->extension(),
                'size' => $file->getSize(),
                'project_id' => $request->id,
            ];
            // Upload file to public path in images directory
            $file->move(public_path('storage'), $imageName);
            File::create($imageNameArr);
            // Database operation
            // }
        }

        $data = [
            'message' => 'You have successfully upload image.',
            'image' => $imageNameArr,
        ];
        return response()->json($data, 201);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\File  $file
     * @return \Illuminate\Http\Response
     */
    public function destroy(File $file)
    {
        //
    }
}
