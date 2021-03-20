import styled from "styled-components";

export const TextAreaWrapper = styled.div`
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
`;

export const TextAreaInput = styled.textarea`
  width: 100%;
  padding: 0.8rem 1rem;
  background-color: var(--input-background);
  border: 1px solid var(--input-border);
  border-radius: 5px;
  resize: none;
  height: 10rem;
  outline: none;

  &::placeholder {
    color: var(--primary-text-opacity);
  }
`;
