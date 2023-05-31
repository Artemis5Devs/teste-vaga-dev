<?php

namespace App\Services\state;

use App\Models\State;
use Illuminate\Database\Eloquent\Collection;

class StateCrud
{
  public static function findAll(): Collection
  {
    return State::all();
  }
}