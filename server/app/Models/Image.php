<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Post;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Image extends Model
{
    use HasFactory;

    public const TYPE_POST = 'post';
    public const TYPE_USER = 'user';

    protected $fillable = [
        'parent_id',
        'parent_type',
        'is_main',
        'image_url',
    ];


    /**
     * @return BelongsTo
     */
    public function posts(): BelongsTo
    {
        return $this->belongsTo(Post::class, 'parent_id');
    }

    /**
     * @return HasMany
     */
    public function images(): HasMany
    {
        return $this->hasMany(Image::class, 'parent_id', 'id');
    }
}
