import React from "react";
import Container from "../../container/container.component";
import IngredientItem from "../../ingredient-item/ingredient-item.component";

import INGREDIENT_DATA from "./ingredients.data";
import "./ingredientspage.styles.css";

class IngredientsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: INGREDIENT_DATA.items,
    };
  }

  render() {
    const { items } = this.state;
    return (
      <Container>
        <div className="ingredient-preview">
          <h1 className="ingredient-name">{"Ingredients"}</h1>
          <div className="preview">
            {items.map(({ id, ...otherItemsProps }) => (
              <IngredientItem key={id.toString()} {...otherItemsProps} />
            ))}
          </div>
        </div>
      </Container>
    );
  }
}

export default IngredientsPage;
