import React from "react";

import CustomButton from "../../components/button/custom-button.component";
import Container from "../../components/container/container.component";

import strings from "../../Constants";

import "./homepage.styles.css";

const HomePage = ({ history }) => (
  <Container>
    <div className="homepage bckImage">
      <h1 className="greeting">{strings.WELCOME_GREETING}</h1>
      <p className="greet-caption">{strings.WELCOME_CAPTION}</p>
      <CustomButton type="button" inverted onClick={() => history.push("/ingredients")}>
        {strings.BTN_ORDER_SALAD}
      </CustomButton>
    </div>
  </Container>
);

export default HomePage;
