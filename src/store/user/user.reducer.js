const INITIAL_STATE = {
  customer: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CUSTOMER":
      return {
        ...state,
        customer: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
