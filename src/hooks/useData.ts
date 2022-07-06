import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { IProduct, IUser } from "../shared/types";

export type DataType = IUser[] | IProduct[];

// Custom hook that accepts type of Firebase collection
// and returns data if success or null if failed
export const useData = (type: "User" | "Product") => {
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
    } else {
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
    }
  }, [type]);

  return data;
};
