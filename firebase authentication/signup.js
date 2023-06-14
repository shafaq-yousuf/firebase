// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";


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
var database = getDatabase();
const auth = getAuth();

var email = document.getElementById("email");
var password = document.getElementById("password");

window.saveData = function () {
    var obj = {
        email: email.value,
        password: password.value
    }
    console.log(obj);

    createUserWithEmailAndPassword(auth, obj.email, obj.password)
        .then(function (res) {
            console.log(res.user.uid);
            obj.id = res.user.uid;
            const reference = ref(database, `users/${obj.id}/`);
            set(reference, obj)
                .then(function () {
                    window.location.assign("login.html")
                })
                .catch(function (err) { alert(err.message) })
        })
        .catch(function (err) { alert(err.message) })

}












