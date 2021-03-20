import React from "react";
import { Label, CheckBoxInput, CheckWrapper, CheckMark } from "./styles";

const CheckBox = ({ type }) => {
  return (
    <CheckWrapper>
      <Label>
        <CheckBoxInput type={type} />
        <CheckMark />
      </Label>
      <span>Receber Feedback? </span>
    </CheckWrapper>
  );
};

export default CheckBox;
