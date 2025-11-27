import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { auth } from '../Firebase/firebase.config'

const googleProvider=new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user,setUser] =useState(null);
    const [loading,setLoading]=useState(true);

    const registeruser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signInUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
     const signInGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
     }

     const logOut=()=>{
        setLoading(true);
        return signOut(auth);
     }

     const updateUserProfile=(profile)=>{
        return updateProfile(auth.currentUser,profile)
     }
     useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(curentUser)=>{
        setUser(curentUser);
    })
    return()=>{
        unsubscribe();
    }

     },[])
    const authInfo = {
        user,
        loading,
        logOut, 
        registeruser,
        signInUser,
        signInGoogle,
         updateUserProfile,
    }
   
    return (
        <AuthContext value={authInfo} >
            {children}
        </AuthContext>
    )
}

export default AuthProvider