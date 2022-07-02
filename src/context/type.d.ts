type IDarkModeContext = {
  isDarkMode: boolean;
  dispatch?: React.Dispatch<IAction>;
};
type IAction = { type: "LIGHT" | "DARK" | "TOGGLE" };
