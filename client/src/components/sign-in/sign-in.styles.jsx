import styled from "styled-components";

export const SignInContainer = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    width: 40vw;
    button {
      width: 45px;
      margin: 0 5px 0 0;
    }
    span {
      font-size: 0.5rem;
    }
  }
`;

export const TitleStyle = styled.h2`
  margin: 10px 0px;
  @media screen and (max-width: 800px) {
    margin: 5px 0px;
    font-size: 1rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    justify-content: flex-start;
  }
`;
