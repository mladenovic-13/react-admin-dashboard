import { useEffect, useState } from "react";
import { getDocument } from "../api/data";
import { IUser } from "../shared/types";

export const useUser = (id: string) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getDocument("users", id);
        setUser(res as IUser);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return { loading, user };
};
