<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use App\Models\{Task};

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

      return response()->json([
        'data' => $data,
        'message' => 'OK.',
      ], 201);
    } catch (\Throwable $th) {

      return response()->json([
        'data' => [],
        'message' => $th->getMessage(),
      ], 500);
    }
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    try {
      $validator = Validator::make($request->all(), [
        'title' => 'required|min:6',
        'user_id' => 'required'
      ]);

      $validator->setAttributeNames([
        'title' => 'Titulo',
        'user_id' => 'ID del usuario'
      ]);

      if ($validator->fails()) {
        $errors = $validator->errors()->all();
        return response()->json([
          'data' => [],
          'message' => $errors,
        ], 400);
      }

      $task = Task::create($request->all());

      return response()->json([
        'data' => $task,
        'message' => 'Registro creado con éxito.',
      ], 201);
    } catch (\Throwable $th) {
      return response()->json([
        'data' => [],
        'message' => $th->getMessage(),
      ], 500);
    }
  }

  /**
   * Display the specified resource.
   */
  public function show(string $id)
  {
    try {

      $task = Task::with('user')->find($id);

      if (!$task) {
        return response()->json([
          'data' => [],
          'message' => 'Registro no encontrado.',
        ], 404);
      }

      return response()->json([
        'data' => $task,
        'message' => 'OK.',
      ], 200);
    } catch (\Throwable $th) {

      return response()->json([
        'data' => [],
        'message' => $th->getMessage(),
      ], 500);
    }
  }



  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, string $id)
  {
    try {
      $task = Task::find($id);

      if (!$task) {
        return response()->json([
          'data' => [],
          'message' => 'Registro no encontrado.',
        ], 404);
      }

      $task->title = $request->title;
      $task->description = $request->description;
      $task->save();

      return response()->json([
        'data' => $task,
        'message' => 'Registro actualizado con éxito.',
      ], 200);
    } catch (\Throwable $th) {
      return response()->json([
        'data' => [],
        'message' => $th->getMessage(),
      ], 500);
    }
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(string $id)
  {
    try {

      $Task = Task::find($id);

      if (!$task) {
        return response()->json([
          'data' => [],
          'message' => 'Registro no encontrado.',
        ], 404);
      }

      $Task->delete();

      return response()->json([
        'data' => [],
        'message' => 'Registro eliminado con éxito.',
      ], 200);
    } catch (\Throwable $th) {

      return response()->json([
        'data' => [],
        'message' => $th->getMessage(),
      ], 500);
    }
  }
}
