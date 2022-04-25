// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2U0jcJDe0CI3TBUvQjL10ep3tuNGlbck",
  authDomain: "free-market-ae7b2.firebaseapp.com",
  projectId: "free-market-ae7b2",
  storageBucket: "free-market-ae7b2.appspot.com",
  messagingSenderId: "927951622154",
  appId: "1:927951622154:web:577335d84245cef4d18ff3",
  measurementId: "G-DV2EWN2CVM"
};
firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp }; 