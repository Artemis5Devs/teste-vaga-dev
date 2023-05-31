<?php

use flight\Flight;

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

require_once 'api/enterprise.php';
require_once 'api/state.php';
require_once 'api/city.php';

Flight::map('notFound', function(){
  echo "404 - Not Found";
});