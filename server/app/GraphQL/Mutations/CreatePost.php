<?php declare(strict_types=1);

namespace App\GraphQL\Mutations;

use App\Models\Image;
use App\Models\Post;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

final class CreatePost
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __invoke($_, array $args) : string
    {
        $authUser = Auth::user();

        $post = Post::query()->create([
            'user_id' => $authUser->id,
            'title' => $args['title'],
            'description' => $args['description'],
            'mark' => $args['mark'],
            'length' => $args['length'],
            'price' => $args['price'],
            'date' => $args['date'],
            'location' => $args['location'],
        ]);
        

        if(!$post){
            throw ValidationException::withMessages([
                'post' => ['Invalid cridention'],
            ]);
        }

        Image::query()->create([
            'parent_id' => $post->id,
            'parent_type' => Image::TYPE_POST,
            'image_url' => $args['image'],
        ]);

        return "Post created successfuly";
    }
}
