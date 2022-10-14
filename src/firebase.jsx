// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtp_XiOoqhfugUpLF1Cp6NLZG6RuN94hk",
  authDomain: "philip-timothe.firebaseapp.com",
  projectId: "philip-timothe",
  storageBucket: "philip-timothe.appspot.com",
  messagingSenderId: "132050615891",
  appId: "1:132050615891:web:ebf8def9e77f3733c8d0a6",
  measurementId: "G-GJS3QR98HF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
export const storageRef = ref(storage, `/Philip/Philp's Grey Wall.jpg`)