<?php

require 'vendor/autoload.php';

use Venchiarutti\TesteVagaDev\Infra\EntityManagerFactory;
use Doctrine\ORM\Tools\Console\ConsoleRunner;

return ConsoleRunner::createHelperSet(
    (new EntityManagerFactory())->create()
);