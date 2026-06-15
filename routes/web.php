<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;

// The home page just returns the Blade view, which boots the Vue app.
Route::get('/', function () {
    return view('welcome');
});

// The Vue contact form POSTs here.
// Laravel validates the input; if it fails it automatically returns a
// 422 response with an "errors" object (the Vue form reads that).
Route::post('/contact', function (Request $request) {
    $data = $request->validate([
        'name'    => 'required|string|max:255',
        'email'   => 'required|email|max:255',
        'service' => 'nullable|string|max:255',
        'message' => 'required|string|max:2000',
    ]);

    // No database is configured here, so we just log the message.
    // Later you could swap this for Mail::to(...)->send(...) or save to a DB.
    Log::info('New contact message', $data);

    return response()->json(['ok' => true]);
});
