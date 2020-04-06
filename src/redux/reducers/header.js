import { CHANGE_HEADER_CLASS } from "../actionTypes";
const defaultClass = localStorage.getItem("selectedMenu");
export const initialState = {
  class: defaultClass !== "home" ? "default" : "topbar-dark"
};

const header = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_HEADER_CLASS:
      return {
        class: action.payload,
        error: null
      };

    default:
      return state;
  }
};

export default header;
