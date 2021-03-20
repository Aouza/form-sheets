import React from "react";
import { InputWrapper, InputField } from "./styles";

const Input = ({ type, id, name, placeholder, label }) => {
  return (
    <InputWrapper>
      <label htmlFor={id}>{label}</label>
      <InputField type={type} id={id} name={name} placeholder={placeholder} />
    </InputWrapper>
  );
};

export default Input;
