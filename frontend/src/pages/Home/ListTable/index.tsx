import React, {useEffect, useState} from "react";
import {Container} from "./styles";
import {api} from "../../../services/api";

interface enterprise {
  cnpj: string
  name: string
}

export default function ListTable() {
  const [enterprises, setEnterprises] = useState<enterprise[]>([]);

  useEffect(() => {
    api.get("enterprise")
      .then( response => setEnterprises(response.data) )
  }, []);

  return (
    <Container>
      <h2>Empresas Cadastradas</h2>

      <table>
        <thead>
          <tr>
            <th>CNPJ</th>
            <th>Nome da Empresa</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {enterprises.map(enterprise => (
            <tr>
              <td>{enterprise.cnpj}</td>
              <td>{enterprise.name}</td>
              <td>
                <button>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}