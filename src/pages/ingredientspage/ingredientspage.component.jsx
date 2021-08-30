import React from "react";

import CustomButton from "../../components/button/custom-button.component";
import Container from "../../components/container/container.component";
import IngredientItem from "../../components/ingredient-item/ingredient-item.component";

import strings from "../../Constants";

import "./ingredientspage.styles.css";

class IngredientsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    fetch("/api/ingredients")
      .then((response) => response.json())
      .then((res) => this.setState((oldState) => ({ ...oldState, items: [...res[0].items] })))
      .catch((error) => console.log(error));
  }

  render() {
    const { items } = this.state;
    return (
      <Container>
        <div className="ingredient-preview">
          <div className="title-btn-block">
            <h1 className="ingredient-name">{strings.INGRED_HEADING}</h1>
            <CustomButton type="button" onClick={() => this.props.history.push("/checkout")} inverted>
              {strings.BTN_CHECKOUT}
            </CustomButton>
          </div>
          <div className="preview">
            {items.map((item) => (
              <IngredientItem key={item.name} item={item} />
            ))}
          </div>
        </div>
      </Container>
    );
  }
}

export default IngredientsPage;
