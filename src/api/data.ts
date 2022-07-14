import { DocumentData } from "firebase/firestore";
import { fetchChart, fetchData, fetchWidget } from "./axiosWrapper";

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

// GET DATA FOR WIDGETS
export const getWidget = async (type: string) => {
  const res = await fetchWidget(type);
  return res;
};

// GET DATA FOR MAIN CHART
export const getChartData = async () => {
  const res = await fetchChart("six-months");
  return res;
};
