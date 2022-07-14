import { DocumentData } from "firebase/firestore";
import { fetchData, fetchWidget } from "./axiosWrapper";

// GET SINGLE DOCUMENT FROM FIREBASE
export const getDocument = async (
  collection: string,
  docID: string
): Promise<DocumentData> => {
  const res = await fetchData(collection, docID);
  return res as Promise<DocumentData>;
};

// GET COLLECTION FROM FIREBASE
export const getCollection = async (
  collection: string
): Promise<DocumentData[]> => {
  const res = fetchData(collection, "");
  return res as Promise<DocumentData[]>;
};

export const getWidget = async (type: string) => {
  const res = await fetchWidget(type);
  return res;
};
