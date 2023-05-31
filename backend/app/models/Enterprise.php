<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @mixin Builder
 */
class Enterprise extends Model
{
  public $timestamps = false;

  protected $fillable = [
      'name',
      'cnpj',
      'cep',
      'street',
      'number',
      'neighborhood',
      'city_id'
  ];

  public function city(): BelongsTo
  {
    return $this->belongsTo(City::class);
  }
}