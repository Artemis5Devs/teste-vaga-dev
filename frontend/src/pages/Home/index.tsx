import React from "react";
import {Container} from "./styles";
import FormCreate from "./FormCreate";
import ListTable from "./ListTable";

export default function Home() {
  return (
    <Container>
      <FormCreate />
      <ListTable />
    </Container>
  );
}