import React from "react";
import ReactDOM from "react-dom";

import Summary from "../summary/summary.component";

import "./modal.styles.css";

const Backdrop = () => <div className="backdrop"></div>;

const Modal = () => (
  <React.Fragment>
    {ReactDOM.createPortal(<Backdrop />, document.getElementById("backdrop-root"))}
    {ReactDOM.createPortal(<Summary />, document.getElementById("overlay-root"))}
  </React.Fragment>
);

export default Modal;
