import {
  doc,
  setDoc,
  getDocs,
  getFirestore,
  serverTimestamp,
  collection,
} from "firebase/firestore";
import { db } from "../lib/firebase.config";

const Firestore = {
  readDocs: (...args) => {
    const [collection_name] = args
    let docs = [];
    const ref = collection(db, collection_name);
    return new Promise(async (resolve) => {
      try {
        const snapshots = await getDocs(ref);
        snapshots.forEach((doc) => {
          const docItem = { ...doc.data() };
          docs.push(docItem);
        });
        resolve(docs);
      } catch (error) {
        console.log(error, "no docs found");
      }
    });
  },

  writeDoc: (...args) => {
    const [inputs, collection_name] = args;
    return new Promise(async (resolve) => {
      const randomIndex = Math.floor(Math.random() * 1000000);
      try {
        const docRef = doc(db, "stocks", `${randomIndex}`);
        await setDoc(docRef, {
          title: inputs.title,
          path: inputs.path,
          createdAt: serverTimestamp(),
        });
        resolve("success");
      } catch (error) {
        console.log(error);
      }
    });
  },
};

export default Firestore;
