import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database";

const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyAZBrefDMiXnUAs4fucipa8OR9kb3N3HK0",
    authDomain: "recettebox-c54d4.firebaseapp.com",
    databaseURL: "https://recettebox-c54d4.firebaseio.com",
    projectId: "recettebox-c54d4",
    storageBucket: "recettebox-c54d4.appspot.com",
    messagingSenderId: "1030484441611",
    appId: "1:1030484441611:web:2137dd8f7252338440250e"
})
const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base