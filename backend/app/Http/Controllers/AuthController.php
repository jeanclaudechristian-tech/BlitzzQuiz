<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'username' => 'required|string',
            'password' => 'required|string',
        ]);

        $user = User::where('nickname', $request->username)
            ->orWhere('email', $request->username)
            ->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'username' => [__('Identifiants incorrects.')],
            ]);
        }

        return response()->json([
            'success' => true,
            'user' => [
                'id' => $user->id,
                'email' => $user->email,
                'nickname' => $user->nickname,
                'role' => $user->role,
            ],
        ]);
    }

    public function register(Request $request)
    {
        $request->validate([
            'email' => 'required|email|unique:users,email',
            'username' => 'required|string|max:50',
            'password' => 'required|string|min:8|confirmed',
            'role' => 'required|in:STUDENT,TEACHER',
        ]);

        $user = User::create([
            'email' => $request->email,
            'nickname' => $request->username,
            'password' => $request->password,
            'role' => $request->role,
        ]);

        return response()->json([
            'success' => true,
            'user' => [
                'id' => $user->id,
                'email' => $user->email,
                'nickname' => $user->nickname,
                'role' => $user->role,
            ],
        ], 201);
    }
}
