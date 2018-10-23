import { combineReducers } from "redux";
import restaurants from "./restaurant-reducer";
import user from "./user-reducer";

const rootReducer = combineReducers({
  restaurants,
  user
});

export default rootReducer;
