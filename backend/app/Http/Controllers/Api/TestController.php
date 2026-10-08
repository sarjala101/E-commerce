<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;

class TestController extends Controller
{
    public function status(): JsonResponse
    {
        return response()->json([
            'status' => 'connected',
            'message' => 'Laravel backend is successfully connected to React!'
        ], 200);
    }
}