import React from "react";
import Input from "../../components/Input";
import { Container, Form, FormWrapper } from "./styles";

import Button from "../../components/Button";
import TextArea from "../../components/TextArea";

import CheckImage from "../../assets/images/check-icon.png";
import CheckBox from "../../components/CheckBox";

const Main = () => {
  return (
    <Container>
      <FormWrapper>
        <img src={CheckImage} alt="Check icon" />
        <h1>Desafio Codesigners</h1>
        <Form>
          <Input
            type="name"
            id="name"
            name="name"
            placeholder="Digite seu nome"
            label="Nome"
          />
          <Input
            type="text"
            id="url"
            name="url"
            placeholder="https://exemplo.com.br "
            label="URL do projeto"
          />
          <TextArea
            id="message"
            name="message"
            label="Considerações"
            placeholder="Digite sua mensagem"
          />
          <CheckBox type="checkbox" />
          <Button value="Enviar" />
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default Main;
