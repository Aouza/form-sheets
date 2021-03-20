import styled from "styled-components";

export const InputWrapper = styled.div`
  & + div {
    margin-top: 0.7rem;
  }
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
`;

export const InputField = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  background-color: var(--input-background);
  border: 1px solid var(--input-border);
  border-radius: 5px;

  &::placeholder {
    color: var(--primary-text-opacity);
  }
`;
