<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use App\Models\{User};
use Spatie\Permission\Models\{Role, Permission};
use Inertia\Inertia;

class UsersController extends Controller
{

    public function __construct() {
        $this->middleware('auth');
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        try {
          //$query = User::query();
          
            return Inertia::render('Users/Index', [
                'users' => User::query()
                ->with('roles')
                ->filter($request->search)
                ->paginate(10)
                ->withQueryString()
                ->through(fn ($data) => [
                    'id' => $data->id,
                    'name' => $data->name,
                    'email' => $data->email,
                    'rol' => $data->roles->pluck('name')->implode(', ')
                ])
            ]);
      
          } catch (\Throwable $th) {
      
            \Log::error([
              'Code' => 500,
              'location' => 'UsersControllers',
              'Method' => 'Index',
              'Message' => $th->getMessage(),
              'line' =>  $th->getLine()
            ]);
      
            return Redirect::back()->with('error', $th->getMessage());
          }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        try {

            return Inertia::render('Users/Create', [
              'roles' => Role::get(),
            ]);
      
        } catch (\Throwable $th) {
      
            return Redirect::back()->with('error', $th->getMessage());
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
              'name' => 'required',
              'password' => 'required|min:6',
              'email'  => 'required|email'
            ]);
      
            $validator->setAttributeNames([
              'name' => 'User',
              'password' => 'Contraseña'
            ]);
      
            if ($validator->fails()) {
              $errors = $validator->errors()->all();
              return Redirect::back()->withErrors($errors)->with('error', 'Se ha Producido un error!')->withInput();
            }

            $request->merge([
              'password' => Hash::make($request->password)
            ]);

            $user = User::create($request->all());

            $user->assignRole($request->rol);

            return Redirect::route('users.index')->with('success', 'Registro creado con éxito');
      
          } catch (\Throwable $th) {
            return Redirect::back()->with('error', $th->getMessage());
          }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        try {
            $user = User::with('roles')->findOrFail($id);
            return Inertia::render('Users/Edit', [
              'roles' => Role::get(),
              'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'rol' => $user->roles->pluck('name')->implode(', '),
              ],
             
            ]);
      
          } catch (\Throwable $th) {
            return Redirect::back()->with('error', $th->getMessage());
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        try {
          $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email'  => 'required|email'
          ]);
    
          $validator->setAttributeNames([
            'name' => 'User',
          ]);
    
          if ($validator->fails()) {
            $errors = $validator->errors()->all();
            return Redirect::back()->withErrors($errors)->with('error', 'Se ha Producido un error!')->withInput();
          }
            $user = User::findOrFail($id);
            $user->name = $request->name;
            $user->email = $request->email;

            if ($request->has('password')) {
              $user->password = Hash::make($request->password);
            }

            $user->save();
            $user->syncRoles($request->rol);

            return Redirect::route('users.index')->with('success', 'Registro actualizado con éxito');
      
          } catch (\Throwable $th) {
            return Redirect::back()->with('error', $th->getMessage());
          }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {

            $User = User::findOrFail($id);
            $User->delete();
      
            return Redirect::back()->with('success', 'Registro eliminado con éxito.');
      
          } catch (\Throwable $th) {
      
            return Redirect::back()->with('error', 'Error al intentar eliminar el registro.');
          }
    }
}
