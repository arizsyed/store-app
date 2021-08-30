import React from "react";
import { connect } from "react-redux";

import { clearItem } from "../../store/bag/bag.actions";

import "./checkout-item.styles.css";

const CheckoutItem = ({ orderedItem, clearItem }) => {
  const { name, quantity, price } = orderedItem;
  return (
    <div className="checkout-item">
      <span className="checkout-item-name">{name}</span>
      <span className="checkout-item-qty">{quantity}</span>
      <span className="checkout-item-price">{price}</span>
      <div className="remove-btn" onClick={() => clearItem(orderedItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
