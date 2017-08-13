
import * as firebase from 'firebase';

// should go in a secret file
const config = {
    apiKey: "AIzaSyCxFHIgAjauvccckfglwTuZsp3vyQIBb3s",
    authDomain: "jpgo-b7d41.firebaseapp.com",
    databaseURL: "https://jpgo-b7d41.firebaseio.com",
    projectId: "jpgo-b7d41",
    storageBucket: "jpgo-b7d41.appspot.com",
    messagingSenderId: "150840185972"
};
firebase.initializeApp(config);

export default firebase;
