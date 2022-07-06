import React from "react";
import { OrderForm, Wrapper } from "./style";
import CloseIcon from "@mui/icons-material/Close";
import { useData } from "../../hooks/useData";
import { IProduct } from "../../shared/types";

interface IProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  userID: string;
}

const NewOrderModal = ({ setOpenModal, userID }: IProps) => {
  const products = useData("Product") as IProduct[];

  return (
    <Wrapper>
      <div onClick={() => setOpenModal(false)} className="close">
        <CloseIcon fontSize="large" className="closeIcon" />
      </div>
      <OrderForm>
        <label htmlFor="product">Product:</label>
        <select name="product" placeholder="Choose product...">
          {products.map((product: IProduct) => (
            <option value={product.title}>{product.title}</option>
          ))}
        </select>
        <label htmlFor="amount">Amount</label>
        <input type="number" name="amount" />
        <label htmlFor="product">Payment Method:</label>
        <select name="method" placeholder="Choose product...">
          <option value="Cash">Cash</option>
          <option value="Debit">Debit Card</option>
          <option value="Credit">Credit Card</option>
        </select>
        <label htmlFor="product">Status:</label>
        <select name="product" placeholder="Choose product...">
          <option value="Pending">Pending</option>
          <option value="Aproved">Aproved</option>
        </select>
        <button type="submit">ADD ORDER</button>
      </OrderForm>
    </Wrapper>
  );
};

export default NewOrderModal;
