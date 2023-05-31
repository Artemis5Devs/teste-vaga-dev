# API Enterprises CRUD

## Endpoints
 - **GET** /enterprise
   - Retorna todas empresas cadastradas no sistema no padrão:
     - [**cnpj**: string, **name**: string]

- **POST** /enterprise
  - Cria uma empresa no sistema e retorna a mesma


 - **GET** /state
   - Retorna todos estados cadastrados no sistema no padrão:
     - [**id**: int, **acronym**: string(2 caracteres)]


 - **GET** /city/state/{id}
   - Retorna todas as cidades de um estado cadastrado no sistema no padrão:
     - [**id**: int, **name**: string]