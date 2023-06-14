// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBtMx7qhyXzPsoMAeauXL29TeLv45UQv1M",
    authDomain: "fb-database-2d564.firebaseapp.com",
    databaseURL: "https://fb-database-2d564-default-rtdb.firebaseio.com",
    projectId: "fb-database-2d564",
    storageBucket: "fb-database-2d564.appspot.com",
    messagingSenderId: "925273912412",
    appId: "1:925273912412:web:32077e08fcb5baeeeca299",
    measurementId: "G-5DQCTZBEKB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;