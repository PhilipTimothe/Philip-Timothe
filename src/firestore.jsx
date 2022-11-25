// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDocs, getFirestore, collection } from "firebase/firestore";
// import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5OgT0FmGgkRjW03IoUYeT28qzHpbMgtc",
  authDomain: "philiptimothe-980a1.firebaseapp.com",
  projectId: "philiptimothe-980a1",
  storageBucket: "philiptimothe-980a1.appspot.com",
  messagingSenderId: "617280967901",
  appId: "1:617280967901:web:98995fa5b83e3a9a1db734",
  measurementId: "G-QCP6DGY3ZN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export const getAllSocials = async (path) => {
  const querySnapshot = await getDocs(collection(db, path));
  return querySnapshot;
};

export const getAllJobs = async (path) => {
  const querySnapshot = await getDocs(collection(db, path));
  return querySnapshot;
};

export const getAllProjects = async (path) => {
  const querySnapshot = await getDocs(collection(db, path));
  return querySnapshot;
};

// const storage = getStorage();
// const listRef = ref(storage,)

export const getImage = async () => {
  // getDownloadURL(
  //   ref(
  //     storage,
  //     "gs://philiptimothe-980a1.appspot.com/Employer-Images/C&S.jpeg"
  //   )
  // )
  //   .then((url) => {
  // `url` is the download URL for 'images/stars.jpg'
  // Or inserted into an <img> element
  // const img = document.getElementById("myimg");
  // img.setAttribute("src", url);
  // console.log(url);
  // return url;
  // })
  // .catch((error) => {
  //   // Handle any errors
  // });
};
