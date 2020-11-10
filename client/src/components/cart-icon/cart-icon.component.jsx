import React from "react";
import { toggleCartHidden } from "../../redux/cart/cart.action.js";
import { selectCartItemCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import {
  CartIconContainer,
  ShoppingIconStyle,
  ItemCountStyle,
} from "./cart-icon.style";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <CartIconContainer onClick={toggleCartHidden}>
      <ShoppingIconStyle />
      <ItemCountStyle>{itemCount}</ItemCountStyle>
    </CartIconContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemCount,
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
