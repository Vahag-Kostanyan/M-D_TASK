<?php declare(strict_types=1);

namespace App\GraphQL\Mutations;

use Dotenv\Validator;

final class Registration
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __invoke($_, array $args)
    {
        $validation = Validator::make($args, [
            
        ]);
    }
}
