import * as firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'
import { red } from 'chalk'

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

export const createUserProfileDocument = async (userAuth: firebase.User, additionalData?: {}) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log(red("Error creating user: \n" + error))
        }
    }
    return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;