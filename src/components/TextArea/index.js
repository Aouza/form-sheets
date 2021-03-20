import React from "react";
import { TextAreaWrapper, TextAreaInput } from "./styles";

const TextArea = ({ id, name, placeholder, label }) => {
  return (
    <TextAreaWrapper>
      <label htmlFor={id}>{label}</label>
      <TextAreaInput id={id} name={name} placeholder={placeholder} />
    </TextAreaWrapper>
  );
};

export default TextArea;
