<?php

namespace App\Services\Enterprise;

use App\Models\Enterprise;
use Illuminate\Database\Eloquent\Model;

class EnterpriseCrud
{
  public static function findAll(): array
  {
    $enterprises = Enterprise::all();

    $enterprisesReturn = [];
    foreach ($enterprises as $enterprise)
      $enterprisesReturn[] = [
          'cnpj' => $enterprise->getAttribute('cnpj'),
          'name' => $enterprise->getAttribute('name')
      ];

    return $enterprisesReturn;
  }

  public static function create($requestNewEnterprise): Model|Enterprise
  {
    return Enterprise::create([
        'cnpj' => $requestNewEnterprise['cnpj'] ?? '',
        'name' => $requestNewEnterprise['name'] ?? '',
        'cep' => $requestNewEnterprise['cep'] ?? '',
        'street' => $requestNewEnterprise['street'] ?? '',
        'number' => $requestNewEnterprise['number'] ?? 0,
        'neighborhood' => $requestNewEnterprise['neighborhood'] ?? '',
        'city_id' => $requestNewEnterprise['city_id'] ?? 1
    ]);
  }
}