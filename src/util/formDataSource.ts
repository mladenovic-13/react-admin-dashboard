import { HTMLInputTypeAttribute } from "react";

export interface FormDataSource {
  id: string;
  label: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
}

export const formUserInputs: FormDataSource[] = [
  {
    id: "username",
    label: "Username",
    type: "text",
    placeholder: "john_doe",
  },
  {
    id: "displayName",
    label: "Name and Surname",
    type: "text",
    placeholder: "John Doe",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "john_doe@mail.com",
  },
  {
    id: "phone",
    label: "Phone",
    type: "text",
    placeholder: "+380991234567",
  },
  {
    id: "password",
    label: "Password",
    type: "password",
    placeholder: "********",
  },
  {
    id: "address",
    label: "Address",
    type: "text",
    placeholder: "123 Main St",
  },
  {
    id: "country",
    label: "Country",
    type: "text",
    placeholder: "United States",
  },
];

export const formProductInput: FormDataSource[] = [
  {
    id: "title",
    label: "Title",
    type: "text",
    placeholder: "Apple Macbook Pro",
  },
  {
    id: "description",
    label: "Description",
    type: "text",
    placeholder: "Description",
  },
  {
    id: "category",
    label: "Category",
    type: "text",
    placeholder: "Computers",
  },
  {
    id: "price",
    label: "Price",
    type: "text",
    placeholder: "100",
  },
  {
    id: "stock",
    label: "Stock",
    type: "text",
    placeholder: "in stock",
  },
];
export const formOrderInput: FormDataSource[] = [
  {
    id: "product",
    label: "Product",
    type: "text",
    placeholder: "Apple Macbook Pro",
  },
  {
    id: "amount",
    label: "Amount",
    type: "number",
    placeholder: "",
  },
  {
    id: "method",
    label: "Payment Method",
    type: "text",
    placeholder: "",
  },
  {
    id: "status",
    label: "Status",
    type: "text",
    placeholder: "",
  },
];
