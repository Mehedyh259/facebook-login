import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword,FacebookAuthProvider, signInWithPopup  } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);

//   create user
const createUser = (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password);
}
const signIn = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password)
}

const providerLogin = (provider) =>  signInWithPopup(auth, provider)
  


// observe the auth state change
useEffect(() => {
   const unsubscribe =  onAuthStateChanged(auth, currentUser => {
        console.log('auth state change', currentUser)
        setUser(currentUser)
    })
    return () => unsubscribe()
},[])

  const authInfo = {
    user,
    createUser,
    signIn,
    providerLogin
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProviders;
