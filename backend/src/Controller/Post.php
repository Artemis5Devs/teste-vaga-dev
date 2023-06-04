<?php
declare(strict_types=1);

namespace Venchiarutti\TesteVagaDev\Controller;

use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Venchiarutti\TesteVagaDev\Entity\Company;
use Venchiarutti\TesteVagaDev\Infra\EntityManagerFactory;
use Doctrine\DBAL\Exception\UniqueConstraintViolationException;

/**
 * Controller for post request that handle creation or edit of a company
 */
class Post
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
     * Handle post request to create or edit a company
     *
     * @param array $data
     * @return array
     */
    public function handle(array $data): array
    {
        try {
            if(isset($data["id"]) && $data["id"]) {
                $company = $this->entityManager->find(Company::class, $data["id"]);
                if ($company === null) {
                    throw new \InvalidArgumentException("Uma empresa com esse ID não foi encontrada.");
                }
            } else {
                $company = new Company();
            }

            $company->setName($data["name"])
                ->setCnpj($data["cnpj"])
                ->setCep($data["cep"])
                ->setAddress($data["address"])
                ->setAddressNumber((int) $data["addressNumber"])
                ->setAddressNeighborhood($data["addressNeighborhood"])
                ->setAddressState($data["addressState"])
                ->setAddressCity($data["addressCity"]);

            $this->entityManager->persist($company);
            $this->entityManager->flush();

            return [
                "statusCode" => 200,
                "message" => "A empresa foi salva com sucesso."
            ];
        } catch (\InvalidArgumentException $e) {
            return [
                "statusCode" => 400,
                "message" => $e->getMessage()
            ];
        } catch (UniqueConstraintViolationException) {
            return [
                "statusCode" => 400,
                "message" => "Uma empresa com esse CNPJ já existe."
            ];
        } catch (Exception) {
            return [
                "statusCode" => 500,
                "message" => "Ocorreu um erro interno."
            ];
        }
    }
}