import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.css";

const Header = () => (
  <div className="header">
    <Link to="/" className="title-container">
      <h1>Salad Shop</h1>
    </Link>
    <div className="checkout-cart"></div>
  </div>
);

export default Header;
