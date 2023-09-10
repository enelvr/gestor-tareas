<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum', ['except' => ['login', 'unauthorized']]);
    }
    public function login(Request $request)
    {
        if (Auth::check()) {
            return response()->json(['message' => 'Ya estás autenticado'], 200);
        }
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        $credentials = $request->only('email', 'password');
        
        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $mytoken = preg_replace('/\s+/', ' ', trim($user->name)) . '-' . $user->id;
            return response()->json([
                'data' => [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                    'photo' => $user->profile_photo_url,
                    'roles' => $user->getRoleNames(),
                    'permisos' => $user->getAllPermissions()->pluck('name')
                ],
                'token' => $user->createToken($mytoken)->plainTextToken,
                'type' => 'bearer',
                'message' => 'OK',
            ], 201);
        }

        return response()->json(['error' => 'Unauthorized'], 401);
    }

    public function refresh()
    {
        return response()->json([
            'data' => Auth::user(),
            'token' => Auth::refresh(),
            'type' => 'bearer',
            'message' => 'OK',
        ], 201);
    }

    public function unauthorized(Request $request) {

        return response()->json(['error' => 'Unauthorized'], 401); 
    }

    public function getUrlToRoute()
    {
    }


    public function logout(Request $request)
    {
        return response()->json(['message' => 'Sesión cerrada con éxito'], 200);
    }
}
