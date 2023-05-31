<?php

use App\Channels\Api\Controller\State;
use flight\Flight;

$state = new State();

Flight::route('GET /state', [$state, 'listAll']);