<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\File;

class FilesController extends Controller
{
    public function upload(Request $request) {
        $result = ['success' => true ];

        if($request->fupload) {
            $file = $request->fupload;

            $ext = $file->getClientOriginalExtension();
            $filename = $file->getClientOriginalName();
            $mime = $file->getClientMimeType();
            $size = $file->getClientSize();

            try {
                $file->move('images', $filename);
                $info = getimagesize(public_path().'/images/'.$filename);
                $newFile = [
                    'name' => $filename,
                    'ext' => $ext,
                    'mime' => $mime,
                    'size' => $size,
                    'width' => $info[0],
                    'height' => $info[1]
                ];

                File::create($newFile);
            } catch (Exception $e) {
                $result['success'] = false;
                $result['error'] = $e->getMessage();
            }
        }

        return response()->json($result);
    }

    public function list() {
        return File::latest()->get();
    }

    public function delete(File $file) {
        $result = ['success'=>true];
        
        if($file) {
            unlink(public_path().'/images/'.$file->name);
            $file->delete();
        } else {
            $result['success'] = false;
        }

        return response()->json($result);
    }
}
