<?php

namespace Database\Factories;

use App\Models\Image;
use App\Models\Post;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Image>
 */
class ImageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'parent_id' => function(){
                return Post::factory()->create()->id;
            },
            'parent_type' => Image::TYPE_POST,
            'is_main' => false,
            'image_url' => "https://static.b24.co/thumbs/large/556878-1694499630.jpg",
        ];
    }
}
