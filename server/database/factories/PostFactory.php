<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'user_id' => function(){
                return User::factory()->create()->id;
            },
            'description' => $this->faker->century(),
            'title' => $this->faker->century(),
            'mark' => $this->faker->century(),
            'date' => $this->faker->date(),
            'length' => '22m',
            'populear' => $this->faker->numberBetween(0, 100),
            'price' => $this->faker->numberBetween(1000, 1000000),
        ];
    }
}
