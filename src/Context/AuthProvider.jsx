import React from 'react'
import { AuthContext } from './AuthContext'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Firebase/firebase.config'

const AuthProvider = ({ children }) => {
    const registeruser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const authInfo = {
        registeruser,
        signInUser,

    }
    return (
        <AuthContext value={authInfo} >
            {children}
        </AuthContext>
    )
}

export default AuthProvider