import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import HomePage from "./components/pages/homepage/homepage.component";
import IngredientsPage from "./components/pages/ingredientspage/ingredientspage.component";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/ingredients" component={IngredientsPage} />
      </Switch>
    </div>
  );
}

export default App;
