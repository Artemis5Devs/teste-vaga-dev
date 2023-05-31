<?php
require_once 'vendor/autoload.php';

use flight\Flight;
use Illuminate\Database\Capsule\Manager as Capsule;

$capsule = new Capsule;
$capsule->addConnection(require 'configuration/illuminate_database.php');
$capsule->setAsGlobal();
$capsule->bootEloquent();

require_once 'routes/main.php';

Flight::start();
