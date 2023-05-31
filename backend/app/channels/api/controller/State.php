<?php
namespace App\Channels\Api\Controller;

use App\Services\state\StateCrud;

class State {

  public function listAll() {
    echo json_encode(StateCrud::findAll());
  }
}