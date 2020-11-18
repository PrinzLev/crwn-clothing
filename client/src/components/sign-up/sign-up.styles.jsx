import styled from "styled-components";

export const SignUpContainer = styled.div`
  width: 380px;
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
