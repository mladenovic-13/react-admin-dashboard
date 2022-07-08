import algoliasearch from "algoliasearch";
import { getDocs } from "firebase/firestore";
import { usersCollection } from "./firebase";
import { IUser } from "./shared/types";

const client = algoliasearch("719VEXREAR", "87603e800adbe44cb6a3c7834dec8238");

export const index = client.initIndex("primary_search");

interface AlgoliaObject extends IUser {
  objectID: string;
}

export const setSearch = async () => {
  let users: AlgoliaObject[] = [];
  try {
    const usersSnapshot = await getDocs(usersCollection);
    usersSnapshot.forEach((doc) => {
      users.push({ ...doc.data(), objectID: doc.id });
    });

    await index.saveObjects(users);

    // Searching users by username and displayName
    await index.setSettings({
      searchableAttributes: ["username", "displayName"],
    });
  } catch (error) {
    console.log(error);
  }
};
