// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDsJujp7J7KqaLoL5MIifZnFBaO8uXHmk0",
    authDomain: "fir-auth-2f4df.firebaseapp.com",
    databaseURL: "https://fir-auth-2f4df-default-rtdb.firebaseio.com",
    projectId: "fir-auth-2f4df",
    storageBucket: "fir-auth-2f4df.appspot.com",
    messagingSenderId: "80315625983",
    appId: "1:80315625983:web:b471556568115cefdef7ca",
    measurementId: "G-9N1EBS0XQL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();
const auth = getAuth();
var email = document.getElementById("email");
var password = document.getElementById("password");

window.login = function () {
    var obj = {
        email: email.value,
        password: password.value,
    }
    console.log(obj);

    signInWithEmailAndPassword(auth, obj.email, obj.password).then(function (res) {
        console.log(res.user.uid);
        const reference = ref(auth, `users/${ref.user.uid}`);
        onValue(reference, function (dt) {
            console.log(dt.val());
        })
    })
        .catch(function (err) { err.message })
}
