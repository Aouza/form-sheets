import styled from "styled-components";

export const Container = styled.div`
  max-width: 75rem;
  margin: 0 auto;
  padding: 4rem 0 2rem 0;
`;

export const FormWrapper = styled.div`
  max-width: 40rem;
  background-color: var(--white);
  position: relative;
  border-radius: 6px;
  padding: 4rem 8rem;
  margin: 0 auto;

  > img {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -30%);
  }

  > h1 {
    text-align: center;
  }

  @media screen and (max-width: 680px) {
    padding: 4rem 2rem;

    > h1 {
      font-size: 1.4rem;
    }

    > img {
      width: 60px;
    }
  }
`;
export const Form = styled.form`
  max-width: 30rem;
  width: 100%;
  margin: 0 auto;
  padding-top: 2rem;
`;
