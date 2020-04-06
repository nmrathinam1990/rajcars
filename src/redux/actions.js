import { CHANGE_HEADER_CLASS, CHANGE_MENU } from "./actionTypes";

function changeClassName(val) {
  if (val !== "home") return "default";
  return "topbar-dark";
}

export const changeHeaderClass = val => ({
  type: CHANGE_HEADER_CLASS,
  payload: changeClassName(val)
});

export const changeMenu = val => ({
  type: CHANGE_MENU,
  payload: val
});
