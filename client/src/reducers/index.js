import { combineReducers } from "redux";
import restaurant from "./restaurant-reducer";
import user from "./user-reducer";

const rootReducer = combineReducers({
  restaurant,
  user
});

export default rootReducer;
