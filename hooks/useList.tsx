import { collection, DocumentData, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { Movie } from "../typings";
function useList(uid: string | undefined) {
  const [list, setList] = useState<Movie[] | DocumentData[]>([]);
  useEffect(() => {
    console.log("db uid");
    if (!uid) return;
    console.log("there");
    const myListCollectionRef = collection(db, "customers", uid, "myList");
    console.log(myListCollectionRef);
    return onSnapshot(myListCollectionRef, (snapshot) => {
      const listData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setList(listData);
    });
  }, [db, uid]);
  return list;
}

export default useList;
