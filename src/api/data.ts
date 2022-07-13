import { fetchData } from "./requestWrapper";

// GET SINGLE DOCUMENT
export const getDocument = async (collection: string, docID: string) => {
  const res = await fetchData(collection, docID);
  return res;
};
