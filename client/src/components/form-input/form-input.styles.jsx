import styled, { css } from "styled-components";

const color = {
  main: "black",
  sub: "grey",
};

const shrinkLabel = css`
  top: -14px;
  font-size: 12px;
  color: ${color.main};
`;

export const GroupContainer = styled.div`
  position: relative;
  margin: 45px 0;

  input[type="password"] {
    letter-spacing: 0.3em;
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
`;
