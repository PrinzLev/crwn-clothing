import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CartItem from "../cart-item/cart-item.components";
import { selectCartItem } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { createStructuredSelector } from "reselect";

import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageStyle,
  CustomButtonStyled,
} from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageStyle>Your cart is empty.</EmptyMessageStyle>
        )}
      </CartItemsContainer>
      <CustomButtonStyled
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButtonStyled>
    </CartDropdownContainer>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItem,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
