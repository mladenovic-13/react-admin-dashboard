import React, { createContext, useReducer } from "react";
import DarkModeReducer from "./darkModeReducer";
import { IDarkModeContext } from "./type";

const INITAIL_STATE = {
  isDarkMode: false,
};

export const DarkModeContext = createContext<IDarkModeContext>(INITAIL_STATE);

interface IProviderProps {
  children: React.ReactNode;
}

export const DarkModeContextProvider: React.FC<IProviderProps> = ({
  children,
}): JSX.Element => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITAIL_STATE);
  return (
    <DarkModeContext.Provider
      value={{ isDarkMode: state.isDarkMode, dispatch }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};
