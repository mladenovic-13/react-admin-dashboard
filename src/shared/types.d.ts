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
