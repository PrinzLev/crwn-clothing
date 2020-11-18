import styled, { css } from "styled-components";

const color = {
  main: "black",
  sub: "grey",
};

const shrinkLabel = css`
  top: -14px;
  font-size: 12px;
  color: ${color.main};
  @media screen and (max-width: 800px) {
    top: -7px;
    font-size: 8px;
  }
`;

export const GroupContainer = styled.div`
  position: relative;
  margin: 45px 0;

  input[type="password"] {
    letter-spacing: 0.3em;
  }
  @media screen and (max-width: 800px) {
    margin: 15px 0;
  }
`;

export const FormInputStyle = styled.input`
  background: none;
  background-color: white;
  color: ${color.sub};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${color.sub};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabel};
  }
  @media screen and (max-width: 800px) {
    font-size: 10px;
    padding: 6px 6px 6px 3px;
    margin: 13px 0;
  }
`;

export const FormInputLabel = styled.label`
  color: ${color.sub};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  &.shrink {
    ${shrinkLabel};
  }
  @media screen and (max-width: 800px) {
    font-size: 10px;
    left: 3px;
    top: 7px;
  }
`;
