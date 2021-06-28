<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\Role;
use App\Models\Task;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(15)->create();
        // Profile::factory(15)->create();
        Project::factory(15)->create();
        Task::factory(20)->create();
        Role::create([
            'name' => 'Admin',
            'slug' => 'admin',
        ]);
        Role::create([
            'name' => 'Faculty',
            'slug' => 'faculty',
        ]);
        Role::create([
            'name' => 'Student',
            'slug' => 'student',
        ]);
    }
}
