import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";


const firebaseConfig = {
  apiKey: "AIzaSyDmM07ceQO66LJ5hP16VM888fIS_aknGx4",
  authDomain: "vanlife-e95aa.firebaseapp.com",
  projectId: "vanlife-e95aa",
  storageBucket: "vanlife-e95aa.appspot.com",
  messagingSenderId: "513010065405",
  appId: "1:513010065405:web:81fbbecb768ff1ffcf8394"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const vansCollectionRef = collection( db, "vans")

// export async function getVans() {
//   const querySnapShot = getDocs(vansCollectionRef)
//   const dataArray = (await querySnapShot).docs.map(doc => ({
//     ...doc.data(),
//     id:doc.id
//   }))
//   return dataArray
// }