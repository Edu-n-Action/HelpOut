"use client"
import { useContext, createContext, useState, useEffect } from "react";

import {db} from '@/app/firebase'
import { getFirestore, collection, query, where, getDocs, addDoc } from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, setPersistence, browserSessionPersistence } from "firebase/auth";


import { useRouter } from "next/navigation";

import { GlobalAuth } from "./GlobalContext";

const PersonalAuthContext = createContext();

export const AuthContextProvider =({children}) => {
    const router = useRouter();
    const { authFirebase } = GlobalAuth();


    /* useEffect(() => {
        if(authFirebase == null) {
            router.push("http://localhost:3000/personal/login")
        }
      }, []); */


    return (
    <PersonalAuthContext.Provider>
        {children}
    </PersonalAuthContext.Provider>
    )
}

export const PersonalAuth = () => {
    return useContext(PersonalAuthContext)
}