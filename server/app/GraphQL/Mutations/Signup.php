<?php declare(strict_types=1);

namespace App\GraphQL\Mutations;

use App\Models\User;

final class Signup
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __invoke($_, array $args) : string
    {
        $user = User::query()->create($args);     
        return $user->createToken('device')->plainTextToken;
    }
}
