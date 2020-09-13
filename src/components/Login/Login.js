import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';



const Login = () => {
const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    // Initialize Firebase
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    const handelGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            // The signed-in user info.
            const { displayName, email } = result.user;
            const sigendInUser = { name: displayName, email }
            // console.log(sigendInUser);
            setLoggedInUser(sigendInUser)
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    }
    return (
        <div>
            <h1>This is Login</h1>
            <button onClick={handelGoogleSignIn}>Google Sign in</button>
        </div>
    );
};

export default Login;