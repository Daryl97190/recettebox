import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database";

const firebaseApp = firebase.initializeApp( {
    apiKey: "xxxxxx",
    authDomain: "xxxxxx",
    databaseURL: "xxxxxx",
    projectId: "xxxxxx",
    storageBucket: "xxxxxx",
    messagingSenderId: "xxxxxx",
    appId: "xxxxxx"
})
const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base
