import sumTheNumber from "./sumNumber";
import mulTheNumber from "./mulNumber";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  sumTheNumber,
  mulTheNumber,
});

export default rootReducer;
