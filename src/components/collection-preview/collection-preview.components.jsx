import React from "react";

import {
  CollectionPreviewContainer,
  TitleStyles,
  PreviewItemContainer,
} from "./collection-preview.styles";

import CollectionItem from "../collection-items/collection-items.components";

const CollectionsPreview = ({ title, items }) => {
  return (
    <CollectionPreviewContainer className="collection-preview">
      <TitleStyles>{title}</TitleStyles>
      <PreviewItemContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewItemContainer>
    </CollectionPreviewContainer>
  );
};
export default CollectionsPreview;
