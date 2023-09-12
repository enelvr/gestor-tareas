<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Task;
use App\Models\User;

class TaskTest extends TestCase
{
    //use RefreshDatabase;
  
    public function test_can_get_index_of_tasks() {

        // Crear un usuario autenticado
         $user = User::factory()->create();
         $this->actingAs($user);

        Task::factory(5)->create();

        $response = $this->get('/api/v1/tasks');

        $response->assertStatus(201);

        $response->assertJson([
            'message' => 'OK.',
        ]);

       $response->assertJsonStructure([
            'data' => [
                'tasks' => [],
            ],
            'message',
        ]);

    }

    public function test_can_get_search_index_tasks()
    {
        $user = User::factory()->create();
        $this->actingAs($user);

        Task::factory()->create(['title' => 'Listodo de cosas']);
        Task::factory()->create(['title' => 'Supermercado']);


        //Busqueda
        $response = $this->get('/api/v1/tasks?search=Supermercado');

        $response->assertStatus(201);
    }
}
