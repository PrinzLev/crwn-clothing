import React from "react";
import SHOP_DATA from "./shop.data.component";
import CollectionsPreview from "../../components/collection-preview/collection-preview.components";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherPrevCollection }) => (
          <CollectionsPreview key={id} {...otherPrevCollection} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
