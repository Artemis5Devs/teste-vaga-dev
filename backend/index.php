<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

require "vendor/autoload.php";

use Venchiarutti\TesteVagaDev\Controller\Post;
use Venchiarutti\TesteVagaDev\Controller\Get;


Flight::route('OPTIONS /*', function(){
    Flight::halt();
});

Flight::route('GET /empresas', function(){
    $getController = new Get();
    $data = $getController->handle();

    Flight::json($data);
});

Flight::route('POST /empresas', function(){
    $postController = new Post();
    $data = Flight::request()->data->getData();
    $return = $postController->handle($data);

    Flight::json([$return['message']], $return['statusCode']);
});

Flight::start();