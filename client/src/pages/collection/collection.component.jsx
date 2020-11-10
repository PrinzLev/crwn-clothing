import React from "react";

import {
  CollectionPageContainer,
  CollectionTitleStyle,
  ItemsContainer,
  CollectionItemStyled,
} from "./collection.styles";

import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shop.selectors";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitleStyle>{title}</CollectionTitleStyle>
      <ItemsContainer>
        {items.map((item) => (
          <CollectionItemStyled key={collection.id} item={item} />
        ))}
      </ItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
