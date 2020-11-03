import React from "react";

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockStyle,
  TotalContainer,
  TestWarningContainer,
  StripeCheckoutButtonStyled,
} from "./checkout.style";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItem,
  selectCartTotal,
} from "../../redux/cart/cart.selectors.js";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const CheckouPage = ({ cartItems, total }) => {
  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockStyle>Product</HeaderBlockStyle>
        <HeaderBlockStyle>Description</HeaderBlockStyle>
        <HeaderBlockStyle>Quantity</HeaderBlockStyle>
        <HeaderBlockStyle>Price</HeaderBlockStyle>
        <HeaderBlockStyle>Remove</HeaderBlockStyle>
      </CheckoutHeaderContainer>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <TotalContainer>Total: ${total}</TotalContainer>
      <TestWarningContainer>
        *Please use this test credit card for payments*
        <br />
        4242 4242 4242 4242 | Exp: 11/21 | CVV: 123
      </TestWarningContainer>
      <StripeCheckoutButtonStyled price={total} />
    </CheckoutPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItem,
  total: selectCartTotal,
});
export default connect(mapStateToProps)(CheckouPage);
