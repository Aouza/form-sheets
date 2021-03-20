import React from "react";
import { Container, ButtonForm } from "./styles";

const Button = ({ value }) => {
  return (
    <Container>
      <ButtonForm>{value}</ButtonForm>
    </Container>
  );
};

export default Button;
