import { CHANGE_MENU } from "../actionTypes";

const defaultMenu = localStorage.getItem('selectedMenu');
export const initialState = {
  menu: defaultMenu ? defaultMenu : "home"
};

const menu = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MENU:
      return {
        menu: action.payload,
        error: null
      };

    default:
      return state;
  }
};

export default menu;