<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use App\Models\{Task, User};
use Inertia\Inertia;

class TasksController extends Controller
{

  public function __construct()
  {
    $this->middleware('auth:sanctum');
  }
  /**
   * Display a listing of the resource.
   */
  public function index(Request $request)
  {
    try {
      $query = Task::query()
        ->with('user')
        ->filter($request->search)
        ->paginate(10)
        ->withQueryString()
        ->through(function ($data) {
          return [
            'id' => $data->id,
            'title' => $data->title,
            'description' => $data->description,
            'user' => $data->user->name,
          ];
        });

      $data = ['tasks' => $query];

      $responseData = [
        'data' => $data,
        'message' => 'éxito.',
      ];

      return $request->is('api/*')
      ? response()->json($responseData, 201)
      : Inertia::render('Tasks/Index', $data);

    } catch (\Throwable $th) {

      \Log::error([
        'Code' => 500,
        'location' => 'TasksControllers',
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

      return Inertia::render('Tasks/Create', [
        'users' => User::get()
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
        'title' => 'required|min:6',
      ]);

      $validator->setAttributeNames([
        'title' => 'Titulo',
      ]);

      if ($validator->fails()) {
        $errors = $validator->errors()->all();
        return Redirect::back()->with('error', $errors);
      }

      $request->merge([
        'user_id' => auth()->user()->id
      ]);

      Task::create($request->all());

      return Redirect::route('tasks.index')->with('success', 'Registro creado con éxito');
    } catch (\Throwable $th) {
      \Log::info($th->getMessage());
      return Redirect::back()->with('error', $th->getMessage());
    }
  }

  /**
   * Display the specified resource.
   */
  public function show(string $id)
  {
    try {

      return Inertia::render('Tasks/Show', [
        'users' => User::get(),
        'task' => Task::with('user')->findOrFail($id)
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

      return Inertia::render('Tasks/Edit', [
        'users' => User::get(),
        'task' => Task::with('user')->findOrFail($id)
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
      $task = Task::findOrFail($id);
      $task->title = $request->title;
      $task->description = $request->description;
      $task->save();

      return Redirect::route('tasks.index')->with('success', 'Registro actualizado con éxito');
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

      $Task = Task::findOrFail($id);
      $Task->delete();

      return Redirect::back()->with('success', 'Registro eliminado con éxito.');
    } catch (\Throwable $th) {

      return Redirect::back()->with('error', 'Error al intentar eliminar el registro.');
    }
  }
}
