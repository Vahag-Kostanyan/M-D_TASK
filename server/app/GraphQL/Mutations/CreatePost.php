<?php declare(strict_types=1);

namespace App\GraphQL\Mutations;

use App\Models\Image;
use App\Models\Post;
use Illuminate\Validation\ValidationException;

final class CreatePost
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __invoke($_, array $args)
    {

        $post = Post::query()->create([
            'user_id' => $args['user_id'],
            'title' => $args['title'],
            'discription' => $args['discription'],
            'mark' => $args['mark'],
            'length' => $args['length'],
            'price' => $args['price'],
            'date' => $args['date'],
            'location' => $args['location'],
            'populear' => $args['populear'],
        ]);

        if(!$post){
            throw ValidationException::withMessages([
                'post' => ['Invalid cridention'],
            ]);
        }

        foreach($args['images'] as $image) {
            Image::query()->create([
                'parent_id' => $post->id,
                'parent_type' => Image::TYPE_POST,
                'is_main' => $image['is_main'],
                'image_url' => $image['image_url'],
            ]);
        }

        return $post;
    }
}
