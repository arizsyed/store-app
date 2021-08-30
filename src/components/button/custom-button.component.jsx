import React from "react";

import "./custom-button.styles.css";

const CustomButton = ({ children, inverted, ...otherButtonProps }) => (
  <button className={`btn ${inverted ? "btn-inverted" : "btn-regular"}`} {...otherButtonProps}>
    {children}
  </button>
);

export default CustomButton;
