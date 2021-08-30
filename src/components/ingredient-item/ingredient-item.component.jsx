import React from "react";
import { connect } from "react-redux";

import CustomButton from "../button/custom-button.component";
import { addItem } from "../../store/bag/bag.actions";

import "./ingredient-item.styles.css";

const IngredientItem = ({ item, addItem }) => {
  const { name, price } = item;

  return (
    <div className="ingredient-item">
      <div className="ingredient-img" style={{ backgroundImage: `url(./images/${name}.jpg)` }} />
      <div className="ingredient-item-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to Bag
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(IngredientItem);
