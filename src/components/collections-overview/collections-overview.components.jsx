import React from "react";
import "./collections-overview.styles.scss";

import CollectionsPreview from "../../components/collection-preview/collection-preview.components";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionForPreview } from "../../redux/shop/shop.selectors";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherPrevCollection }) => (
        <CollectionsPreview key={id} {...otherPrevCollection} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
