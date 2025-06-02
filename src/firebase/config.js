// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore,collection, addDoc, serverTimestamp } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSENGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// const sampleData = [
//   { title: "React Mastery", url: "https://example.com/1", createdAt: serverTimestamp() },
//   { title: "Next.js Crash Course", url: "https://example.com/2", createdAt: serverTimestamp() },
//   { title: "Firebase Bootcamp", url: "https://example.com/3", createdAt: serverTimestamp() },
//   { title: "JavaScript Essentials", url: "https://example.com/4", createdAt: serverTimestamp() },
//   { title: "TypeScript for Beginners", url: "https://example.com/5", createdAt: serverTimestamp() },
//   { title: "Tailwind CSS Mastery", url: "https://example.com/6", createdAt: serverTimestamp() },
//   { title: "HTML & CSS Fundamentals", url: "https://example.com/7", createdAt: serverTimestamp() },
//   { title: "Node.js and Express", url: "https://example.com/8", createdAt: serverTimestamp() },
//   { title: "MongoDB Crash Course", url: "https://example.com/9", createdAt: serverTimestamp() },
//   { title: "Docker for Devs", url: "https://example.com/10", createdAt: serverTimestamp() },
//   { title: "Git & GitHub Masterclass", url: "https://example.com/11", createdAt: serverTimestamp() },
//   { title: "Python for Web", url: "https://example.com/12", createdAt: serverTimestamp() },
//   { title: "Django Quickstart", url: "https://example.com/13", createdAt: serverTimestamp() },
//   { title: "Flutter for Beginners", url: "https://example.com/14", createdAt: serverTimestamp() },
//   { title: "Kotlin Android Basics", url: "https://example.com/15", createdAt: serverTimestamp() },
//   { title: "Swift UI Development", url: "https://example.com/16", createdAt: serverTimestamp() },
//   { title: "Java Full Stack", url: "https://example.com/17", createdAt: serverTimestamp() },
//   { title: "C# .NET API Building", url: "https://example.com/18", createdAt: serverTimestamp() },
//   { title: "AWS Cloud Fundamentals", url: "https://example.com/19", createdAt: serverTimestamp() },
//   { title: "PostgreSQL for Developers", url: "https://example.com/20", createdAt: serverTimestamp() },
// ];

// async function addSampleCourses() {
//   const colRef = collection(db, "coupones");
//   for (const data of sampleData) {
//     await addDoc(colRef, data);
//     console.log("Added:", data.title);
//   }
// }

// addSampleCourses();


export {app,db}