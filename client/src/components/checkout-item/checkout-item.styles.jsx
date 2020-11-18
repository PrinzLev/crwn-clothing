import styled, { css } from "styled-components";

const identifierStyle = css`
  width: 23%;
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  @media screen and (max-width: 800px) {
    font-size: 12px;
    padding: 12px 0;
    min-height: 70px;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 800px) {
    padding-right: 12px;
  }
`;

export const NamePriceStyle = styled.span`
  ${identifierStyle}
`;

export const QuantityStyle = styled.span`
  ${identifierStyle}
  display: flex;
`;

export const ArrowStyle = styled.span`
  cursor: pointer;
  margin: 0px 10px;
  @media screen and (max-width: 800px) {
    margin: 0px 5px;
  }
`;

export const RemoveButtonStyle = styled.span`
  padding-left: 12px;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    padding-left: 3px;
  }
`;
