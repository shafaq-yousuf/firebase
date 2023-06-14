import app from "./firebaseconfig";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getDatabase, set, ref, onValue, push, } from "firebase/database";

const auth = getAuth(app);
const db = getDatabase(app);


let UserSignup = (obj) => {
    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, obj.email, obj.password)
            .then((res) => {
                let uid = res.user.uid;
                obj.id = uid;
                const Reference = ref(db, `users/${obj.id}`);
                set(Reference, obj)
                    .then((res) => { resolve(console.log(res)) })
                    .catch((err) => { reject(err.message) })
            }
            )
            .catch((err) => { reject(err.message) })
    })
};
let userLogin = (obj) => {
    return new Promise((resolve, rej) => {
        signInWithEmailAndPassword(auth, obj.email, obj.password).then(
            (res) => {
                let uid = res.user.uid;
                obj.id = uid;
                let Reference = ref(db, `users/${obj.id}`);
                onValue(Reference, (dt) => {
                    if (dt.exists()) {
                        resolve(dt.val())
                    } else {
                        rej("err")
                    }
                })
            }
        ).catch((err) => { rej(err.message) })
    })
};
let checkAuth = () => {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                resolve(uid)
            } else { reject("user not logged in") }
        })
    })
}
let userLogOut = () => {
    signOut(auth)
}
let getFBdata = (nodeName, id) => {
    let Reference = ref(db, `${nodeName}/${id ? id : ""}`);
    return new Promise((resolve, reject) => {
        onValue(Reference, (dt) => {
            if (dt.exists()) {
                if (id) {
                    resolve(dt.val())
                } else {
                    resolve(Object.values(dt.val()))
                }
            } else {
                reject("no data found")
            }
        })
    })
};
let postFBdata = (nodeName, obj, id) => {
    return new Promise((resolve, reject) => {
        if (id) {
            let Reference = ref(db, `${nodeName}/${id ? id : ""}`);
            set(Reference, obj)
                .then((res) => { resolve(res) })
                .catch((err) => { reject(err) })
        } else {
            let keyRef = ref(db, `${nodeName}`);
            obj.id = push(keyRef).key;
            let postRef = ref(db, `${nodeName}/${obj.id}`);
            set(postRef, obj)
                .then((res) => { resolve(res) })
                .catch((err) => { reject(err) })
        }
    })
};
let delFBdata = () => { };
let editFBdata = () => { };

export { UserSignup, userLogin, checkAuth, getFBdata, userLogOut, postFBdata };