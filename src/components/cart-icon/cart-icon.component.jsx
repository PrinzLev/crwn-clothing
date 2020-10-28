import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assests/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cart.action.js";
import { connect } from "react-redux";
import "./cart-icon.style.scss";

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispactch) => ({
  toggleCartHidden: () => dispactch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
