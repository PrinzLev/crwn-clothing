import React from "react";

import {
  CartItemContainer,
  StyledImage,
  ItemDetailsContainer,
  NameStyle,
} from "./cart-item.style";

const CartItem = ({ item: { name, price, imageUrl, quantity } }) => {
  return (
    <CartItemContainer>
      <StyledImage src={imageUrl} alt="item" />
      <ItemDetailsContainer>
        <NameStyle>{name}</NameStyle>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
