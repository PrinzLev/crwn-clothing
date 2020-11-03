import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";
import {
  ImageContainer,
  CollectionItemContainer,
  CollectionFooterContainer,
  NameStyles,
  PriceStyles,
  CustomButtonStyles,
} from "./collection-items.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <ImageContainer
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <CollectionFooterContainer>
        <NameStyles>{name}</NameStyles>
        <PriceStyles>${price}</PriceStyles>
      </CollectionFooterContainer>
      <CustomButtonStyles onClick={() => addItem(item)} inverted>
        ADD TO CART
        {console.log(item)}
      </CustomButtonStyles>
    </CollectionItemContainer>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
