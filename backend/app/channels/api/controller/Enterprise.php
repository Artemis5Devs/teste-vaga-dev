<?php
namespace App\Channels\Api\Controller;

use app\services\enterprise\EnterpriseCrud;

class Enterprise {

  public function listAll() {
    echo json_encode(EnterpriseCrud::findAll());
  }

  public function create() {
    echo json_encode(EnterpriseCrud::create($_POST));
  }
}