import React from "react";

const DarkModeReducer: React.Reducer<IDarkModeContext, IAction> = (
  state,
  action
) => {
  switch (action.type) {
    case "LIGHT":
      return { isDarkMode: false };
    case "DARK":
      return { isDarkMode: true };
    case "TOGGLE":
      return { isDarkMode: !state.isDarkMode };
    default:
      return state;
  }
};

export default DarkModeReducer;
