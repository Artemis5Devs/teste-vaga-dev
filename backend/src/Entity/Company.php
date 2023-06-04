<?php
namespace Venchiarutti\TesteVagaDev\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity()
 * @ORM\Table(
 *     name="company_entity",
 *     uniqueConstraints={
 *         @ORM\UniqueConstraint(name="unique_cnpj", columns={"cnpj"})
 *     }
 * )
 */
class Company
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private int $id;

    /**
     * @ORM\Column(type="string", unique=true)
     */
    private string $cnpj;

    /**
     * @ORM\Column(type="string")
     */
    private string $name;

    /**
     * @ORM\Column(type="string")
     */
    private string $cep;

    /**
     * @ORM\Column(type="string")
     */
    private string $address;

    /**
     * @ORM\Column(type="integer")
     */
    private string $addressNumber;

    /**
     * @ORM\Column(type="string")
     */
    private string $addressNeighborhood;

    /**
     * @ORM\Column(type="string")
     */
    private string $addressState;

    /**
     * @ORM\Column(type="string")
     */
    private string $addressCity;

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @param string $name
     * @return $this
     */
    public function setName(string $name): self
    {
        $this->name = $name;
        return $this;
    }

    /**
     * @return string
     */
    public function getCnpj(): string
    {
        return $this->cnpj;
    }

    /**
     * @param string $cnpj
     * @return $this
     */
    public function setCnpj(string $cnpj): self
    {
        $this->cnpj = $cnpj;
        return $this;
    }

    /**
     * @return string
     */
    public function getCep(): string
    {
        return $this->cep;
    }

    /**
     * @param string $cep
     * @return $this
     */
    public function setCep(string $cep): self
    {
        $this->cep = $cep;
        return $this;
    }

    /**
     * @return string
     */
    public function getAddress(): string
    {
        return $this->address;
    }

    /**
     * @param string $address
     * @return $this
     */
    public function setAddress(string $address): self
    {
        $this->address = $address;
        return $this;
    }

    /**
     * @return int
     */
    public function getAddressNumber(): int
    {
        return $this->addressNumber;
    }

    /**
     * @param int $addressNumber
     * @return $this
     */
    public function setAddressNumber(int $addressNumber): self
    {
        $this->addressNumber = $addressNumber;
        return $this;
    }

    /**
     * @return string
     */
    public function getAddressNeighborhood(): string
    {
        return $this->addressNeighborhood;
    }

    /**
     * @param string $addressNeighborhood
     * @return $this
     */
    public function setAddressNeighborhood(string $addressNeighborhood): self
    {
        $this->addressNeighborhood = $addressNeighborhood;
        return $this;
    }

    /**
     * @return string
     */
    public function getAddressState(): string
    {
        return $this->addressState;
    }

    /**
     * @param string $addressState
     * @return $this
     */
    public function setAddressState(string $addressState): self
    {
        $this->addressState = $addressState;
        return $this;
    }

    /**
     * @return string
     */
    public function getAddressCity(): string
    {
        return $this->addressCity;
    }

    /**
     * @param string $addressCity
     * @return $this
     */
    public function setAddressCity(string $addressCity): self
    {
        $this->addressCity = $addressCity;
        return $this;
    }
}