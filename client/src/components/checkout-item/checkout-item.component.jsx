import React from "react";
import { connect } from "react-redux";

import { clearItemFromCart } from "../../redux/cart/cart.action.js";
import { addItem } from "../../redux/cart/cart.action";
import { removeItem } from "../../redux/cart/cart.action";

import {
  CheckoutItemContainer,
  ImageContainer,
  NamePriceStyle,
  QuantityStyle,
  ArrowStyle,
  RemoveButtonStyle,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <NamePriceStyle>{name}</NamePriceStyle>
      <QuantityStyle>
        <ArrowStyle onClick={() => removeItem(cartItem)}>&#10094;</ArrowStyle>
        <span>{quantity}</span>
        <ArrowStyle onClick={() => addItem(cartItem)}>&#10095;</ArrowStyle>
      </QuantityStyle>
      <NamePriceStyle>${price}</NamePriceStyle>
      <RemoveButtonStyle onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonStyle>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  clearItem: (item) => dispatch(clearItemFromCart(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
