import { IAutAction, IAuthContext } from "./type";

const AuthReducer: React.Reducer<IAuthContext, IAutAction> = (
  state,
  action
) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

export default AuthReducer;
