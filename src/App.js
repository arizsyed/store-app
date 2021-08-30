import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import IngredientsPage from "./pages/ingredientspage/ingredientspage.component";
import CheckoutPage from "./pages/checkoutpage/checkoutpage.component";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/ingredients" component={IngredientsPage} />
        <Route path="/checkout" component={CheckoutPage} />
      </Switch>
    </div>
  );
}

export default App;
