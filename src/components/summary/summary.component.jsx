import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { selectBagTotal } from "../../store/bag/bag.selector";
import CustomButton from "../button/custom-button.component";

import "./summary.styles.css";
import strings from "../../Constants";

const Summary = ({ orderedItems, total, customer, history }) => {
  const handleClose = () => {
    history.push("/");
    window.location.reload();
  };

  return (
    <div className="summary">
      <div className="summary-content">
        <h3 className="customer-greeting-name">{`Hi ${customer.name}`}</h3>
        <span className="customer-greeting-message">{strings.THANK_DELIVERY_MSG}</span>
      </div>
      <h1>{strings.SUMMARY_TITLE}</h1>
      <ul className="summary-list">
        {orderedItems.map((orderedItem) => (
          <li key={orderedItem.name} className="list-item">
            <span>{orderedItem.name}</span>
            <span>{`${orderedItem.quantity} x ${orderedItem.price}`}</span>
          </li>
        ))}
        <li className="list-total">
          <span>Total: ${total}</span>
        </li>
      </ul>
      <CustomButton onClick={handleClose}>Close</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  orderedItems: state.bag.orderedItems,
  customer: state.user.customer,
  total: selectBagTotal(state),
});

export default withRouter(connect(mapStateToProps)(Summary));
