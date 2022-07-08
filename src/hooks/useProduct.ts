import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { IProduct } from "../shared/types";

export const useProduct = (productName: string): IProduct => {
  const [product, setProduct] = useState<IProduct>({} as IProduct);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, "products", productName);
        const res = await getDoc(docRef);
        setProduct(res.data() as IProduct);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [productName]);

  return product;
};
