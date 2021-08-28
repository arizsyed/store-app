import React from "react";

import CustomButton from "../../button/custom-button.component";
import Container from "../../container/container.component";

import "./homepage.styles.css";

const HomePage = ({ history }) => (
  <Container>
    <div className="homepage bckImage">
      <h1 className="greeting">Welcome to Salad Shop</h1>
      <p className="greet-caption">
        Our recipe for great taste - We are focused on one thing and only one thing, creating the highest quality and
        most delicious salads ever!
      </p>
      <CustomButton type="button" onClick={() => history.push("/ingredients")}>
        Order Salad
      </CustomButton>
    </div>
  </Container>
);

export default HomePage;
