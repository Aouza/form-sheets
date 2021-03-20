import styled from "styled-components";

export const Label = styled.label`
  width: 20px;
  height: 20px;
  cursor: pointer;
  display: block;
`;

export const CheckBoxInput = styled.input`
  display: none;

  &:checked ~ span {
    background-size: 60%;
    transition: background-size 0.25s cubic-bezier(0.7, 0, 0.18, 1.24);
  }
`;

export const CheckMark = styled.span`
  width: 20px;
  height: 20px;
  border: 2px solid var(--primary-blue);
  display: inline-block;
  border-radius: 3px;
  background: var(--primary-blue)
    url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/White_check.svg/1200px-White_check.svg.png")
    center/1250% no-repeat;
  transition: background-size 0.2s ease;
`;

export const CheckWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-top: 0.4rem;
  margin-bottom: 3rem;
`;
