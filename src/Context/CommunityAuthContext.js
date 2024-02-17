"use client"
import { useContext, createContext, useState, useEffect } from "react";

import {db} from '@/app/firebase'
import { getFirestore, collection, query, where, getDocs, addDoc } from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, setPersistence } from "firebase/auth";


import { useRouter } from "next/navigation";

import { GlobalAuth } from "./GlobalContext";

const CommunityAuthContext = createContext();

export const AuthContextProvider =({children}) => {
    const auth = getAuth();
    const router = useRouter();
    const { authFirebase, emailLogOut, setAuthFirebase } = GlobalAuth();


    useEffect(() => {
        if(authFirebase == null) {
            router.push("http://localhost:3000/personal/login")
        }
      }, []);

    const emailSignIn = async (email, password) => {
        try {
            await setPersistence(auth, "SESSION")
            await signInWithEmailAndPassword(auth, email, password).then( async (userCredential) => {
                    const q = query(collection(db, 'community'), where('userID', '==', userCredential.user.uid));
                    const querySnapshot = await getDocs(q);
                    const data = querySnapshot.docs.map(doc => doc.data());
                    setAuthFirebase(userCredential.user)
                    if(data.length == 0) {
                        setAuthFirebase(null)
                        emailLogOut()
                    }
                }
            )
        } catch (error) {
            
        }
    };

    const emailSignUp = async (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        await createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          // Signed up 
            const user = userCredential.user;
            const Collection = collection(db, 'community')
            const documentData = {
                email : user.email,
                userID : user.uid
            }
            const newData = await addDoc(Collection, documentData)
          // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            // ..
        });
    };

    const value = {
        emailSignIn,
        emailSignUp,
    };


    return (
    <CommunityAuthContext.Provider value={value}>
        {children}
    </CommunityAuthContext.Provider>
    )
}

export const CommunityAuth = () => {
    return useContext(CommunityAuthContext)
}