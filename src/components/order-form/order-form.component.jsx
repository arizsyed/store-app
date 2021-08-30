import React from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../button/custom-button.component";
import { setCustomer } from "../../store/user/user.actions";

import "./order-form.styles.css";
import strings from "../../Constants";

class OrderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      notes: "",
      errors: "",
    };
  }

  validateForm = (name, email) => {
    let errors = "";
    const regexForStr = /^[a-zA-Z]{3,20}$/;
    const regexForEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (!regexForStr.test(name) || !regexForEmail.test(email)) {
      errors = strings.FORM_INVALID_ERROR;
    }

    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, notes } = this.state;

    const errors = this.validateForm(name, email);

    if (errors.length > 0) {
      this.setState({ errors });
      return;
    }

    this.props.setCustomer({
      name,
      email,
      notes,
    });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    if (this.state.errors) {
      this.setState({ errors: "" });
    }

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="order-form">
        <h2>Contact Details</h2>
        {this.state.errors && <p className="error-message">{this.state.errors}</p>}
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="name"
            value={this.state.name}
            label="Name"
            handleInputChange={this.handleInputChange}
          />
          <FormInput
            type="text"
            name="email"
            value={this.state.email}
            label="Email"
            handleInputChange={this.handleInputChange}
          />
          <div className="text-box">
            <label>Notes</label>
            <textarea
              name="notes"
              label="Notes"
              onChange={this.handleInputChange}
              value={this.state.notes}
              rows="8"
              cols="50"
            />
          </div>
          <CustomButton type="submit">Order</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCustomer: (user) => dispatch(setCustomer(user)),
});

export default connect(null, mapDispatchToProps)(OrderForm);
