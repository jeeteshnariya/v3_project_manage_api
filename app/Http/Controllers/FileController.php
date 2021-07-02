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

        $files = $request->file('file');
        // dd($files);
        $data = [];
        if ($request->hasfile('file')) {
            foreach ($files as $file) {
                $name = $file->getClientOriginalName();
                $file->move(public_path() . '/uploaded/', $name);
                $data[] = $name;
            }

        }
        return response()->json($data, 201);
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
        $request->validate([
            'upload.*' => 'required',
        ]);
        if ($request->hasFile('upload')) {
            $imageNameArr = [];
            foreach ($request->upload as $file) {
                // you can also use the original name
                $imageName = time() . '-' . $file->getClientOriginalName();
                $imageNameArr[][] = [
                    'name' => $imageName,
                    'path' => public_path('uploaded'),
                    'type' => $file->extension(),
                    'filepath' => $file,
                ];
                // Upload file to public path in images directory
                $file->move(public_path('uploaded'), $imageName);
                // Database operation
            }
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
