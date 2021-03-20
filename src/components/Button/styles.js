import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const ButtonForm = styled.button`
  background-color: var(--primary-button);
  color: var(--white);
  padding: 0.7rem 3rem;
  border-radius: 4px;
  transition: 0.4s;

  &:hover {
    background-color: var(--primary-button-hover);
    color: var(--primary-text);
  }
`;
