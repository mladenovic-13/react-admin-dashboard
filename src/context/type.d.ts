import { User as FirebaseUser } from "firebase";

// Dark Mode Context
type IDarkModeContext = {
  isDarkMode: boolean;
  dispatch?: React.Dispatch<IAction>;
};
type IAction = { type: "LIGHT" | "DARK" | "TOGGLE" };

// AuthContext
type IAuthContext = {
  user: FirebaseUser | null;
  dispatch?: React.Dispatch<IAuthAction>;
};
type IAutAction = {
  type: "LOGIN" | "LOGOUT";
  payload: FirebaseUser | null;
};
