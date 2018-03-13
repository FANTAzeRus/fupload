<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    protected $fillable = ['name', 'ext', 'mime', 'size', 'width', 'height'];
}
