import React from "react";
import { Link } from "react-router-dom";
import strings from "../../Constants";

import BagIcon from "../bag-icon/bag-icon.component";

import "./header.styles.css";

const Header = () => (
  <div className="header">
    <Link to="/" className="title-container">
      <h1>{strings.HEADER_TITLE}</h1>
    </Link>
    <div className="nav-item">
      <Link to="/ingredients" className="nav-link">
        {strings.INGRED_HEADING}
      </Link>
      <BagIcon />
    </div>
  </div>
);

export default Header;
