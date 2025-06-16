import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  startAfter,
  getCountFromServer,
} from "firebase/firestore";
import { db } from "@/firebase/config";


const getTotalCoupons = async () => {
  const snapshot = await getCountFromServer(collection(db, "coupones"));
  return snapshot.data().count; // total documents
};

export const getCouponsPage = async (pageSize = 5, lastDoc = null) => {
  const baseQuery = query(
    collection(db, "coupones"),
    orderBy("createdAt", "desc"),
    limit(pageSize)
  );

  const finalQuery = lastDoc
    ? query(baseQuery, startAfter(lastDoc))
    : baseQuery;

  const snapshot = await getDocs(finalQuery);

  const coupons = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  // Return data and lastDoc to use for next page
  return {
    coupons,
    lastDoc: snapshot.docs[snapshot.docs.length - 1] || null,
  };
};

let lastVisibleDocs = {}; // keep track per page

export const fetchCourses = async (page = 1, pageSize = 6) => {
  const courseRef = collection(db, "coupones");

  const baseQuery = query(courseRef, orderBy("createdAt", "desc"), limit(pageSize));

  let q;

  if (page > 1 && lastVisibleDocs[page - 1]) {
    q = query(courseRef, orderBy("createdAt", "desc"), startAfter(lastVisibleDocs[page - 1]), limit(pageSize));
  } else {
    q = baseQuery;
  }

  const snapshot = await getDocs(q);

  if (snapshot.docs.length > 0) {
    lastVisibleDocs[page] = snapshot.docs[snapshot.docs.length - 1];
  }

  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export { fetchCourses, getTotalCoupons ,getCouponsPage};
