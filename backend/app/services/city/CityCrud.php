<?php

namespace App\Services\City;

use App\Models\State;

class CityCrud
{
  public static function findAllByState($id): array
  {
    $cities = State::find($id)->city;

    $citiesReturn = [];
    foreach ($cities as $city)
      $citiesReturn[] = [
          'id' => $city->getAttribute('id'),
          'name' => $city->getAttribute('name')
      ];

    return $citiesReturn;
  }
}