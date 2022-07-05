import React, { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";
import { IAuthContext } from "./type";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user") || "") || null,
};

export const AuthContext = createContext<IAuthContext>(INITIAL_STATE);

interface IProviderProps {
  children: React.ReactNode;
}

export const AuthContextProvider: React.FC<IProviderProps> = ({
  children,
}): JSX.Element => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider value={{ user: state.user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
