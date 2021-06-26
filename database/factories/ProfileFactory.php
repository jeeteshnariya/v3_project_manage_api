<?php

namespace Database\Factories;

use App\Models\Profile;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProfileFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Profile::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'address' => $this->faker->address,
            'gender' => $this->faker->randomElement(['male', 'female']),
            'email' => $this->faker->safeEmail(),
            'phone' => $this->faker->numberBetween($min = 7777777777, $max = 9999999999),
            // 'birthdate' => $this->faker->date($format = 'Y-m-d', $max = 'now'),
            // 'city' => $this->faker->city,
            // 'state' => $this->faker->state,
            // 'country' => $this->faker->country,
            'semester' => $this->faker->numberBetween($min = 1, $max = 6),
            'course' => $this->faker->randomElement(['MCA', 'BCA', 'CS']),
            'college_name' => $this->faker->company,
            'technology' => $this->faker->randomElement(['php', 'nodje', 'laravel', 'java', 'pyhton']),
            'qualification' => $this->faker->randomElement(['MCA', 'BCA', 'CS']),
            'cover' => 'https://picsum.photos/600/150',
            'avtar' => 'https://picsum.photos/100/100',
            'status' => $this->faker->randomElement(['Active', 'Archive', 'Locked']),
            'user_id' => $this->faker->numberBetween($min = 1, $max = 50),
        ];
    }
}
