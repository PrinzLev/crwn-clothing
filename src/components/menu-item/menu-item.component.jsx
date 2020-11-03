import React from "react";

import {
  MenuItemContainer,
  BackgroundImage,
  ContentContainer,
  TitleStyle,
  SubtitleStyle,
} from "./menu-item.styles";

import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <MenuItemContainer
      size={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImage imageUrl={imageUrl} className="background-image" />
      <ContentContainer className="content">
        <TitleStyle>{title.toUpperCase()}</TitleStyle>
        <SubtitleStyle>SHOP NOW</SubtitleStyle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
