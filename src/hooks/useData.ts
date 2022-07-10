import { onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import {
  ordersCollection,
  productsCollection,
  usersCollection,
} from "../firebase";
import { IOrder, IProduct, IUser } from "../shared/types";

export type ListType = "User" | "Product" | "Order";
export type DataType = IUser[] | IProduct[] | IOrder[];

// Custom hook that accepts type of Firebase collection
// and returns data if success or null if failed
export const useData = (type: ListType) => {
  const [data, setData] = useState<DataType>([]);

  useEffect(() => {
    // LISTEN (REALTIME)
    if (type === "User") {
      const unsubUsers = onSnapshot(
        usersCollection,
        (snapshot) => {
          let dataArray: IUser[] = [];
          snapshot.docs.forEach((doc) => {
            dataArray.push({ ...doc.data(), id: doc.id } as IUser);
          });
          setData(dataArray);
        },
        (error) => {
          console.log(error);
        }
      );
      // Cleanup function
      return () => {
        unsubUsers();
      };
    } else if (type === "Product") {
      const unsubProducts = onSnapshot(
        productsCollection,
        (snapshot) => {
          let dataArray: IProduct[] = [];
          snapshot.docs.forEach((doc) => {
            dataArray.push({ ...doc.data(), id: doc.id } as IProduct);
          });
          setData(dataArray);
        },
        (error) => {
          console.log(error);
        }
      );

      // Cleanup function
      return () => {
        unsubProducts();
      };
    } else if (type === "Order") {
      const unsubOrders = onSnapshot(
        ordersCollection,
        (snapshot) => {
          let dataArray: IOrder[] = [];
          snapshot.docs.forEach((doc) => {
            dataArray.push({ ...doc.data(), id: doc.id } as IOrder);
          });
          setData(dataArray);
        },
        (error) => {
          console.log(error);
        }
      );

      // Cleanup function
      return () => {
        unsubOrders();
      };
    }
  }, [type]);

  return data;
};
