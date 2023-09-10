<?php

namespace Database\Seeders;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\{Role, Permission};

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        app() [\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();
      
      $roles = ['admin','operador', 'cliente']; 

       // Crear Roles
      foreach ( $roles as $item ) {
        Role::create([
          'name' => $item
        ]);
      }

      $permisos = ['consultar tarea', 'crear tarea', 'actualizar tarea', 'borrar tarea'];

      // Crear Permisos
      foreach ( $permisos as $value ) {
        Permission::create([
          'name' => $value
        ]);
      }

      $adminRole = Role::findByName('admin');
      $adminRole->syncPermissions(Permission::all());

      // Asignar permisos al administrador
      $user = User::create(['name' => 'Enel', 'email' => 'admin@admin.com', 'password' => bcrypt('Project2023_'), 'current_team_id' => 1, 'email_verified_at' => '2023-08-13 17:54:25']);
      $user->assignRole('admin');

      
    }
}
