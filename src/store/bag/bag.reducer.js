import { placeItemInBag } from "./bag.utils";

const INITIAL_STATE = {
  orderedItems: [],
};

const bagReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        orderedItems: placeItemInBag(state.orderedItems, action.payload),
      };

    case "CLEAR_ITEM":
      return {
        ...state,
        orderedItems: state.orderedItems.filter((orderedItem) => orderedItem.name !== action.payload.name),
      };

    default:
      return state;
  }
};

export default bagReducer;
