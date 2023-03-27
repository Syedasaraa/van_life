import { initializeApp } from "firebase/app";
import { getFirestore, collection,doc, getDocs, getDoc, query, where } from "firebase/firestore/lite"

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

const vansCollectionRef = collection(db, "vans")

export async function getVans() {
    const querySnapshot = await getDocs(vansCollectionRef)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return dataArr
}

export async function getVan(id){
    const docRef = doc( db , "vans" , id)
    const vanSnapShot = await getDoc(docRef)
    return vanSnapShot.data()
}

export async function getHostVans(){
    const q = query(vansCollectionRef , where("hostId" , "==" , "123"))
    const querySnapShot = await getDocs(q)
    const dataArray = querySnapShot.docs.map(doc => ({
        ...doc.data(),
        id:doc.id
    }))

    return dataArray
}


// export async function getVans(id) {
//     const url = id ? `/api/vans/${id}` : `/api/vans`
//     const res = await fetch(url)
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans", 
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }

// export async function getHostVans (id) {
//     const url = id ? `/api/host/vans/${id}` : `/api/host/vans`
//     const res = await fetch (url)
//     if( !res.ok ) {
//         throw {
//             message : "Failed to fetch your vans",
//             statusText : res.statusText,
//             status : res.status
//         }
//     }

//     const data = await res.json()
//     return data.vans
// }

export async function loginUser (creds) {

    const res = await fetch("/api/login" ,
    {method: "post" , body: JSON.stringify(creds)}
    )
    const data = await res.json()
    if(!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status : res.status
        }
    }
    return data
}