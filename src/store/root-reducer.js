import { combineReducers } from "redux";

import bagReducer from "./bag/bag.reducer";
import userReducer from "./user/user.reducer";

export default combineReducers({
  bag: bagReducer,
  user: userReducer,
});
