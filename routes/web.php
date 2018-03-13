<?php

Route::post('/api/upload_file', 'FilesController@upload');
Route::post('/api/list', 'FilesController@list');
Route::post('/api/delete/{file}', 'FilesController@delete');
Route::view('/{any}', 'welcome')->where('any', '.*');