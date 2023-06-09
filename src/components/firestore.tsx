import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";

type Auth = {
  onSubmit: () => void;
};

export const Firestore = () => {
  const [data, setData] = useState<any>([]);
  const [name, setName] = useState<any>({ name: "The Anh" });
  const [age, setAge] = useState<any>({ age: 21 });
  const [country, setCountry] = useState<any>({ country: "TP HCM" });

  const handleAdd = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await addDoc(collection(db, "Info"), {
        name: name,
        age: age,
        country: country,
        timeStamp: serverTimestamp(),
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      let list: any = [];
      try {
        const querySnapshot = await getDocs(collection(db, "Info"));
        querySnapshot.forEach((doc: any) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [name, age, country]);
  console.log(data.id);
  const handleDelete = async (id: any) => {
    try {
      await deleteDoc(doc(db, "Info", id));
      setData(data?.filter((item: any) => item.id !== id));
    } catch (err) {
      console.log("lỗi");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Fire store</h1>
      <div>
        <input
          className="border m-2"
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border m-2"
          type="text"
          placeholder="age"
          onChange={(e) => setAge(e.target.value)}
        />{" "}
        <input
          className="border m-2"
          type="text"
          placeholder="Country"
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <form onSubmit={handleAdd}>
        <button type="submit" className="border p-2 hover:bg-purple-500">
          Add data
        </button>
      </form>

      <div>
        {data &&
          data.map((data: any) => (
            <form onSubmit={handleDelete} key={data?.id}>
              <div className="flex gap-4 items-center justify-center">
                <div className="flex m-4 border items-center justify-center">
                  <p className="mx-4">Id: {data?.id}</p>
                  <p className="mx-4">Tôi tên là {data?.name}</p>
                  <p className="mx-4">Năm nay {data?.age}</p>
                  <p>Hiện đang sống ở {data?.country}</p>
                </div>
                <button
                  type="submit"
                  className="bg-red-500 text-white font-bold p-2 rounded-lg ">
                  Delete
                </button>
              </div>
            </form>
          ))}
      </div>
      <form>
        <button type="submit" className="border p-2 hover:bg-sky-500">
          Get Data Firebase
        </button>
      </form>

      {/* <button
        // onClick={() => bankrupt}
        className="border p-2 hover:bg-pink-500">
        Bankrupt
      </button> */}
    </div>
  );
};
