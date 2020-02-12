import * as firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCQOj6kQJO4wIPewF4IlYYhqP5m1kGwlzU",
    authDomain: "shopify-ecommercetsx.firebaseapp.com",
    databaseURL: "https://shopify-ecommercetsx.firebaseio.com",
    projectId: "shopify-ecommercetsx",
    storageBucket: "shopify-ecommercetsx.appspot.com",
    messagingSenderId: "639722876780",
    appId: "1:639722876780:web:91bf505b60648a206a8d49",
    measurementId: "G-M7S1XRC7G6"
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;