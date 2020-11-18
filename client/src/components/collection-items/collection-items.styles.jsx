import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.components";

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  @media screen and (max-width: 800px) {
    height: 200px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;

  &:hover {
    opacity: 0.8;
  }
  @media screen and (max-width: 800px) {
    width: 95%;
    height: 85%;
  }
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  @media screen and (max-width: 800px) {
    font-size: 9px;
    font-weight: 500;
    width: 80%;
  }
`;

export const NameStyles = styled.span`
  width: 90%;
  margin-bottom: 15px;
  @media screen and (max-width: 800px) {
    margin-bottom: 8px;
  }
`;

export const PriceStyles = styled.span`
  width: 10%;
`;

export const CustomButtonStyles = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;

  &:hover {
    opacity: 0.85;
  }
  @media screen and (max-width: 800px) {
    top: 130px;
  }
`;
