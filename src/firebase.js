import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAitTEFTNL3Q_QAYpeIY40OWq66z6sCqVc",

  authDomain: "portofolio-ddfca.firebaseapp.com",

  projectId: "portofolio-ddfca",

  storageBucket: "portofolio-ddfca.appspot.com",

  messagingSenderId: "929473197067",

  appId: "1:929473197067:web:0f5b0272aeae6e8b9fc30e",

  measurementId: "G-0MFW8F79WF",
};

export const app = initializeApp(firebaseConfig);
export const store = getFirestore(app);
export const storage = getStorage(app);

const analytics = getAnalytics(app);
