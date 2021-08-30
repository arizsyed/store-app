import React from "react";

import "./form-input.styles.css";

const FormInput = ({ handleInputChange, label, ...otherInputProps }) => (
  <div className="form-group">
    <label>{label}</label>
    <input className="form-input" onChange={handleInputChange} {...otherInputProps} />
  </div>
);

export default FormInput;
