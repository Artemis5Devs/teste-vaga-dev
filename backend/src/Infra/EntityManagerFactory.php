<?php

namespace Venchiarutti\TesteVagaDev\Infra;

use Doctrine\DBAL\DriverManager;
use Doctrine\DBAL\Exception;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Exception\MissingMappingDriverImplementation;
use Doctrine\ORM\ORMSetup;

class EntityManagerFactory
{
    /**
     * @throws MissingMappingDriverImplementation
     * @throws Exception
     */
    public function create(): EntityManager
    {
        $paths = array(__DIR__.'/../');

        $isDevMode = true;

        $dbParams = [
            'url'   => 'db:3306',
            'driver'   => 'pdo_mysql',
            'user' => 'root',
            'password' => 'venchiarutti',
            'dbname'   => 'teste-vaga-dev',
        ];

        $config = ORMSetup::createAnnotationMetadataConfiguration($paths, $isDevMode);
        $connection = DriverManager::getConnection($dbParams, $config);
        return new EntityManager($connection, $config);
    }
}