import React from "react";

import "./ingredient-item.styles.css";

const IngredientItem = ({ name, price }) => (
  <div className="ingredient-item">
    <div className="ingredient-img" style={{ backgroundImage: `url(./images/${name}.jpg)` }} />
    <div className="ingredient-item-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
  </div>
);

export default IngredientItem;
