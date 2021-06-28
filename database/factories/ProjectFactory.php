<?php

namespace Database\Factories;

use App\Models\Project;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProjectFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Project::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'technology' => $this->faker->randomElement(['php', 'nodje', 'laravel', 'java', 'pyhton']),
            'start_date' => $this->faker->date($format = 'Y-m-d', $max = 'now'),
            'due_date' => $this->faker->date($format = 'Y-m-d', $max = 'now'),
            'status' => $this->faker->randomElement(['Active', 'Archive', 'Pending', 'Completed']),
            'description' => $this->faker->sentence($nbWords = 6, $variableNbWords = true),
            'user_id' => $this->faker->randomElement([1, 2, 3, 4, 5, 6, 7, 8]),
        ];
    }
}
