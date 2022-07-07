import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { IOreder, IProduct, IUser } from "../shared/types";

export type DataType = IUser[] | IProduct[] | IOreder[];
export type ListType = "User" | "Product" | "Order";

// Custom hook that accepts type of Firebase collection
// and returns data if success or null if failed
export const useData = (type: ListType) => {
  const [data, setData] = useState<DataType>([]);

  useEffect(() => {
    // LISTEN (REALTIME)
    if (type === "User") {
      const unsubUsers = onSnapshot(
        collection(db, "users"),
        (snapshot) => {
          let dataArray: IUser[] = [];
          snapshot.docs.forEach((doc) => {
            dataArray.push({ id: doc.id, ...doc.data() } as IUser);
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
        collection(db, "products"),
        (snapshot) => {
          let dataArray: IProduct[] = [];
          snapshot.docs.forEach((doc) => {
            dataArray.push({ id: doc.id, ...doc.data() } as IProduct);
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
        collection(db, "orders"),
        (snapshot) => {
          let dataArray: IOreder[] = [];
          snapshot.docs.forEach((doc) => {
            dataArray.push({ id: doc.id, ...doc.data() } as IOreder);
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
