import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuNnYOB89DI-ClBzTNNMwV8EiWJFclANg",
  authDomain: "money-keeper-26fe2.firebaseapp.com",
  databaseURL: "https://your-database-name.firebaseio.com",
  projectId: "money-keeper-26fe2",
  storageBucket: "money-keeper-26fe2.appspot.com",
  messagingSenderId: "61212896185",
  appId: "1:61212896185:web:47edae5e4559a4061d2468",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
