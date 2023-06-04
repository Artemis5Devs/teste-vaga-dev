<?php
declare(strict_types=1);

namespace Venchiarutti\TesteVagaDev\Controller;

use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Exception\NotSupported;
use Exception;
use Venchiarutti\TesteVagaDev\Entity\Company;
use Venchiarutti\TesteVagaDev\Infra\EntityManagerFactory;

/**
 * Controller for get request that returns and companies
 */
class Get
{
    /**
     * @var EntityManagerInterface
     */
    private EntityManagerInterface $entityManager;

    /**
     * @throws Exception
     */
    public function __construct()
    {
        $this->entityManager = (new EntityManagerFactory())->create();
    }

    /**
     * Handle get request to return all companies information
     *
     * @return array
     * @throws NotSupported
     */
    public function handle(): array
    {
        /** @var Company[] $companies */
        $companies = $this->entityManager->getRepository(Company::class)->findAll();

        $companiesInfo = [];

        foreach ($companies as $company) {
            $companiesInfo[] = [
                "id" => $company->getId(),
                "name" => $company->getName(),
                "cnpj" => $company->getCnpj(),
                "cep" => $company->getCep(),
                "address" => $company->getAddress(),
                "addressNumber" => $company->getAddressNumber(),
                "addressNeighborhood" => $company->getAddressNeighborhood(),
                "addressState" => $company->getAddressState(),
                "addressCity" => $company->getAddressCity()
            ];
        }

        return $companiesInfo;
    }
}