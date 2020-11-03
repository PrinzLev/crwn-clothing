import React from "react";
import { CollectionsOverviewContainer } from "./collections-overview.style";

import CollectionsPreview from "../../components/collection-preview/collection-preview.components";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionForPreview } from "../../redux/shop/shop.selectors";

const CollectionsOverview = ({ collections }) => {
  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...otherPrevCollection }) => (
        <CollectionsPreview key={id} {...otherPrevCollection} />
      ))}
    </CollectionsOverviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
