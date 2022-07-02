import { HTMLInputTypeAttribute } from "react";

export interface FormDataSource {
  id: number;
  label: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
}

export const formUserInputs: FormDataSource[] = [
  {
    id: 1,
    label: "Username",
    type: "text",
    placeholder: "john_doe",
  },
  {
    id: 2,
    label: "Name and Surname",
    type: "text",
    placeholder: "John Doe",
  },
  {
    id: 3,
    label: "Email",
    type: "email",
    placeholder: "john_doe@mail.com",
  },
  {
    id: 4,
    label: "Phone",
    type: "text",
    placeholder: "+380991234567",
  },
  {
    id: 5,
    label: "Password",
    type: "password",
    placeholder: "********",
  },
  {
    id: 6,
    label: "Address",
    type: "text",
    placeholder: "123 Main St",
  },
  {
    id: 7,
    label: "Country",
    type: "text",
    placeholder: "United States",
  },
];