<?php
namespace App\Channels\Api\Controller;

use App\Services\City\CityCrud;

class City {

  public function listAllOfAState($id) {
    echo json_encode(CityCrud::findAllByState($id));
  }
}