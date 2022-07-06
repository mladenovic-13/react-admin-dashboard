import { Location, useLocation } from "react-router-dom";

interface LocationWithState extends Location {
  state: { type?: "User" | "Product" };
}

export const useAppLocation = (): LocationWithState =>
  useLocation() as LocationWithState;
