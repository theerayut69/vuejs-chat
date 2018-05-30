import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBWY_wsybBgvRyoQei5ESY9hMYXyFbh_AM",
    authDomain: "vuejs-chat-77e8d.firebaseapp.com",
    databaseURL: "https://vuejs-chat-77e8d.firebaseio.com",
    projectId: "vuejs-chat-77e8d",
    storageBucket: "vuejs-chat-77e8d.appspot.com",
    messagingSenderId: "494784058077"
};
const firebaseApp = firebase.initializeApp(config)
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()