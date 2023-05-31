<?php

use App\Channels\Api\Controller\City;
use flight\Flight;

$city = new City();

Flight::route('GET /city/state/@id', [$city, 'listAllOfAState']);