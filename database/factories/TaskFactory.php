<?php

namespace Database\Factories;

use App\Models\Task;
use Illuminate\Database\Eloquent\Factories\Factory;

class TaskFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Task::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->name(),
            'priority' => $this->faker->randomElement(['High', 'Low', 'Medium']),
            'status' => $this->faker->randomElement(['Active', 'Archive', 'Pending', 'Completed']),
            'project_id' => $this->faker->randomElement([1, 2, 3, 4, 5, 6, 7, 8]),
        ];
    }
}
