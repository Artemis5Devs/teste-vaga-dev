<?php

use App\Channels\Api\Controller\Enterprise;
use flight\Flight;

$Enterprise = new Enterprise();

Flight::route('GET /enterprise', [$Enterprise, 'listAll']);

Flight::route('POST /enterprise', [$Enterprise, 'create']);