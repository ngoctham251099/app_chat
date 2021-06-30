import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyC3IKKOlmxJmkXtMOxCd0lzRNqL1z7_HAc",
    authDomain: "app-chat-a4db7.firebaseapp.com",
    projectId: "app-chat-a4db7",
    storageBucket: "app-chat-a4db7.appspot.com",
    messagingSenderId: "117707189027",
    appId: "1:117707189027:web:98091dee427af91006ba96",
    measurementId: "G-DH2W4BMECX"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
}

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
export default firebase;