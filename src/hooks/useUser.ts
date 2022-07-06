import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { IUser } from "../shared/types";

export const useUser = (id: string): IUser => {
  const [user, setUser] = useState<IUser>({} as IUser);
  useEffect(() => {
    const fetchUser = async () => {
      const docRef = doc(db, "users", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) setUser(docSnap.data() as IUser);
      else console.log("No such user!");
    };
    fetchUser();
  }, [id]);

  return user;
};
