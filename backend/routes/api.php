<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\TestController;

Route::get('/status', [TestController::class, 'status']);