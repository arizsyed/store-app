import React from "react";
import { connect } from "react-redux";

import { ReactComponent as OrderBagIcon } from "../../assets/bag-icon.svg";
import { selectBagItemsCount } from "../../store/bag/bag.selector";

import "./bag-icon.styles.css";

const BagIcon = ({ itemCount }) => (
  <div className="bag-icon">
    <OrderBagIcon className="order-bag-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProps = (state) => ({
  itemCount: selectBagItemsCount(state),
});
export default connect(mapStateToProps)(BagIcon);
