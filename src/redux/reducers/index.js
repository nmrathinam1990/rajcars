import { combineReducers } from "redux";

import header from "./header";
import menu from "./menu";

const rootReducer = combineReducers({
  headerClass: header,
  activeMenu: menu
});

export default rootReducer;
