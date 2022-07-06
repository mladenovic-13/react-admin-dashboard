import React, { useState } from "react";
import { OrderForm, Wrapper } from "./style";
import CloseIcon from "@mui/icons-material/Close";
import { useData } from "../../hooks/useData";
import { IProduct } from "../../shared/types";
import { SubmitButton } from "../../pages/new/style";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";

interface IProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  userID: string;
}

const NewOrderModal = ({ setOpenModal, userID }: IProps) => {
  const products = useData("Product") as IProduct[];
  const [orderData, setOrderData] = useState<{
    product?: string;
    amount?: number;
    method?: string;
    status?: string;
    userID: string;
  }>({
    userID: userID,
    method: "Cash",
    status: "Pending",
    amount: 1,
  });

  const handleSelect = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const id = e.target.id;
    const value = e.target.value;

    setOrderData({ ...orderData, [id]: value });
  };

  const handleNewOrder = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    setOrderData({ ...orderData });
    try {
      await addDoc(collection(db, "orders"), orderData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <div onClick={() => setOpenModal(false)} className="close">
        <CloseIcon fontSize="large" className="closeIcon" />
      </div>
      <OrderForm onSubmit={handleNewOrder}>
        <label htmlFor="product">Product:</label>
        <select
          onChange={handleSelect}
          className="select"
          name="product"
          id="product"
          required
        >
          <option value="" hidden>
            Coose product...
          </option>
          {products.map((product: IProduct) => (
            <option key={product.id} value={product.title}>
              {product.title}
            </option>
          ))}
        </select>
        <label htmlFor="amount">Amount</label>
        <br />
        <input
          onChange={handleSelect}
          className="input"
          type="number"
          defaultValue={1}
          name="amount"
          id="amount"
        />
        <br />
        <label htmlFor="product">Payment Method:</label>
        <select
          onChange={handleSelect}
          className="select"
          name="method"
          placeholder="Choose product..."
          id="method"
        >
          <option value="Cash">Cash</option>
          <option value="Debit">Debit Card</option>
          <option value="Credit">Credit Card</option>
        </select>
        <label htmlFor="status">Status:</label>
        <select
          onChange={handleSelect}
          className="select"
          name="status"
          placeholder="Choose product..."
          id="status"
        >
          <option value="Pending">Pending</option>
          <option value="Aproved">Aproved</option>
        </select>
        <div className="buttonWrapper">
          <SubmitButton style={{ marginTop: "16px" }} type="submit">
            ADD ORDER
          </SubmitButton>
        </div>
      </OrderForm>
    </Wrapper>
  );
};

export default NewOrderModal;
