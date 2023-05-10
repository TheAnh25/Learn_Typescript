import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";

export const Firestore = () => {
  const [data, setData] = useState({});

  const handleAdd = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await addDoc(collection(db, "Info"), {
        name: "Thế Anh",
        age: 22,
        country: "TP HCM",
        timeStamp: serverTimestamp(),
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleGetData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = collection(db, "cities");
    const docRef = doc(db, "Info", res.id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Fire store</h1>
      <form onSubmit={handleAdd}>
        <button type="submit" className="border p-2 hover:bg-purple-500">
          Add data
        </button>
      </form>
      <form onSubmit={handleGetData}>
        <button type="submit" className="border p-2 hover:bg-sky-500">
          Get Data Firebase
        </button>
      </form>

      <button
        // onClick={() => bankrupt}
        className="border p-2 hover:bg-pink-500">
        Bankrupt
      </button>
    </div>
  );
};
