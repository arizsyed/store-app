import React from "react";
import { connect } from "react-redux";

import Container from "../../components/container/container.component";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import OrderForm from "../../components/order-form/order-form.component";
import { selectBagTotal } from "../../store/bag/bag.selector";

import "./checkoutpage.styles.css";
import Modal from "../../components/modal/modal.component";

class CheckoutPage extends React.Component {
  render() {
    const { orderedItems, total, customer } = this.props;
    return (
      <React.Fragment>
        <Container>
          <div className="checkout-page">
            <div className="checkout-title">
              <h1>Ordered Items</h1>
            </div>
            <div className="checkout-header">
              <div className="col">
                <span>Item Name</span>
              </div>
              <div className="col">
                <span>Quantity</span>
              </div>
              <div className="col">Price</div>
              <div className="col">Remove</div>
            </div>
            {orderedItems.map((orderedItem) => (
              <CheckoutItem key={orderedItem.name} orderedItem={orderedItem} />
            ))}
            <div className="total">
              <span>Total: ${total}</span>
            </div>
          </div>
          <OrderForm />
        </Container>
        {customer && <Modal />}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  orderedItems: state.bag.orderedItems,
  total: selectBagTotal(state),
  customer: state.user.customer,
});

export default connect(mapStateToProps)(CheckoutPage);
