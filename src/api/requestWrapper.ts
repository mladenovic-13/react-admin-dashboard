import axios from "axios";
import { auth } from "../firebase";

export const fetchData = async (collection: string, docID: string) => {
  try {
    const token = (await getToken()) as string;
    const res = await axios.get(
      `http://localhost:8000/api/${collection}/${docID}`,
      {
        headers: { authorization: `Bearer ${token}` },
      }
    );
    return res.data;
  } catch (error) {
    throw new Error();
  }
};

// user.getIdToken cant be called in function
// firebase thing
const getToken = async () => {
  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken();
        if (token) {
          resolve(token);
        } else {
          reject("Can not get token.");
        }
      }
    });
  });
};
