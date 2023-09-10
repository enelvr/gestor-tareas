<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Spatie\Permission\Models\{Role, Permission};

use App\Models\{User};

use Inertia\Inertia;

class RolesController extends Controller
{

    public function __construct() {
        $this->middleware('auth:sanctum');
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        try {
          //$query = Role::query();
          
            return Inertia::render('Roles/Index', [
                'roles' => Role::query()
                ->with('permissions')
                ->paginate(10)
                ->withQueryString()
                ->through(fn ($data) => [
                    'id' => $data->id,
                    'name' => $data->name,
                    'permisos' => $data->permissions->pluck('name')->implode(', ')
                ])
            ]);
      
          } catch (\Throwable $th) {
      
            \Log::error([
              'Code' => 500,
              'location' => 'RolesControllers',
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
            return Inertia::render('Roles/Create', [
              'permisos' => Permission::get()
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
              'name' => 'required|min:4',
            ]);
      
            $validator->setAttributeNames([
              'name' => 'Nombre',
            ]);
      
            if ($validator->fails()) {
              $errors = $validator->errors()->all();
              return Redirect::back()->with('error', $errors);
            }
            $request->merge([
              'guard_name' => 'web'
            ]);
           \Log::info('creando');
           \Log::info($request->selectedPermisos);
           \Log::info('fincreando');
            $rol = Role::create($request->all());
            $rol->givePermissionTo($request->selectedPermisos);
            //syncPermissions($request->selectedPermisos);

            return Redirect::route('roles.index')->with('success', 'Registro creado con éxito');
      
          } catch (\Throwable $th) {
            \Log::error($th->getMessage());
            return Redirect::back()->with('error', $th->getMessage());
          }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
      try {
      
        return Inertia::render('Roles/Show', [
          'role' => Role::findOrFail($id)
        ]);
  
      } catch (\Throwable $th) {
  
        return Redirect::back()->with('error', $th->getMessage());
      }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        try {
            $role = Role::with('permissions')->findOrFail($id);

            return Inertia::render('Roles/Edit', [
              'role' => [
                'id' => $role->id,
                'name' => $role->name,
                'selectedPermisos' => $role->permissions->pluck('name')
              ],
              'permisos' => Permission::get(),
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
            $role = Role::findOrFail($id);
            $role->name = $request->name;
            $role->save();

            $role->syncPermissions($request->selectedPermisos, []);
            return Redirect::route('roles.index')->with('success', 'Registro actualizado con éxito');
      
          } catch (\Throwable $th) {
            \Log::error($th->getMessage());
            return Redirect::back()->with('error', $th->getMessage());
          }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {

            $role = Role::findOrFail($id);
            $role->delete();
      
            return Redirect::back()->with('success', 'Registro eliminado con éxito.');
      
          } catch (\Throwable $th) {
      
            return Redirect::back()->with('error', 'Error al intentar eliminar el registro.');
          }
    }
}
