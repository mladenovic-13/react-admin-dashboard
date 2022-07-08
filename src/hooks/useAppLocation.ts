import { Location, useLocation } from "react-router-dom";
import { IOrder, IProduct, IUser } from "../shared/types";

interface LocationWithState extends Location {
  state: {
    type?: "User" | "Product";
    data?: IUser | IProduct | IOrder;
  };
}

export const useAppLocation = (): LocationWithState =>
  useLocation() as LocationWithState;
