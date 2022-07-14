// Styled Components Types
interface ITheme {
  theme: Theme;
}
export interface Theme {
  color: {
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
    cardTitle: string;
    background: string;
    textColor: string;
  };
}

// User type
export interface IUser {
  id: string;
  username: string;
  displayName: string;
  email: string;
  address: string;
  phone: string;
  img: string;
  country: string;
}
// Product type
export interface IProduct {
  id: string;
  title: string;
  description: string;
  category: string;
  stock: string;
  price: number;
  total: number;
}
// Order type
export interface IOrder {
  id: string;
  product: string;
  amount: number;
  method: string;
  status: string;
  userID: string;
  total: number;
}

// Widget types
export type WidgetType = "USERS" | "ORDERS" | "EARNINGS" | "BALANCE";

// Widget Data Type
export interface IWidgetData {
  type: WidgetType;
  value: string;
  linkTitle: string;
  icon: React.ReactNode;
  stats: {
    value: number;
    positive: boolean;
  };
}

export interface IWidgetWrapper {
  data: IWidgetData;
  loading: boolean;
}
