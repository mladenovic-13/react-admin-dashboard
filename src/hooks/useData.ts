import { useEffect, useState } from "react";
import { getCollection } from "../api/data";
import { IOrder, IProduct, IUser } from "../shared/types";

export type ListType = "User" | "Product" | "Order";
export type DataType = IUser[] | IProduct[] | IOrder[];

// Custom hook that accepts type of Firebase collection
// and returns data if success or null if failed
export const useData = (type: ListType) => {
  const [data, setData] = useState<DataType>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    switch (type) {
      case "User":
        (async () => {
          try {
            const res = await getCollection("users");
            setData(res as IUser[]);
            setLoading(false);
          } catch (error) {
            console.log(error);
          }
        })();
        break;
      case "Product":
        (async () => {
          try {
            const res = await getCollection("products");
            setData(res as IProduct[]);
            setLoading(false);
          } catch (error) {
            console.log(error);
          }
        })();
        break;
      case "Order":
        (async () => {
          try {
            const res = await getCollection("orders");
            setData(res as IOrder[]);
            setLoading(false);
          } catch (error) {
            console.log(error);
          }
        })();
        break;

      default:
        break;
    }
  }, [type]);

  return { loading, data };
};
