"use client"
import { useContext, createContext, useState, useEffect } from "react";

import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, setPersistence } from "firebase/auth";
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore'
import { auth, db } from "@/app/firebase"

import { useRouter } from "next/navigation";

const FirebaseAuthContext = createContext();

export const FirebaseContextProvider = ({ children }) => {
    const [authFirebase, setAuthFirebase] = useState(null)

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setAuthFirebase(currentUser);
        });

        return () => unsubscribe();
    }, [authFirebase]);

    const emailLogOut = () => {
        signOut(auth);
        setAuthFirebase(null);
    }

    const emailSignInPersonal = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password).then(async (userCredential) => {
                const q = query(collection(db, 'User'), where('userID', '==', userCredential.user.uid));
                const querySnapshot = await getDocs(q);
                const data = querySnapshot.docs.map(doc => doc.data());
                setAuthFirebase(userCredential.user)
            }
            )
        } catch (error) {
            console.log(error.message)
        }
    };

    const emailSignInCommunity = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password).then(async (userCredential) => {
                const q = query(collection(db, 'community'), where('userID', '==', userCredential.user.uid));
                const querySnapshot = await getDocs(q);
                const data = querySnapshot.docs.map(doc => doc.data());
                setAuthFirebase(userCredential.user)
            }
            )
        } catch (error) {
            console.log(error.message)
        }
    };

    const emailSignUpCommunity = async (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        await createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                // Signed up 
                const user = userCredential.user;
                const Collection = collection(db, 'community')
                const documentData = {
                    email: user.email,
                    userID: user.uid
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

    const emailSignUpPersonal = async (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        await createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                // Signed up 
                const user = userCredential.user;
                const Collection = collection(db, 'User')
                const documentData = {
                    email: user.email,
                    userID: user.uid
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
        authFirebase,
        emailLogOut,
        setAuthFirebase,
        emailSignUpPersonal,
        emailSignInPersonal,
        emailSignUpCommunity,
        emailSignInCommunity
    };


    return (
        <FirebaseAuthContext.Provider value={value}>
            {children}
        </FirebaseAuthContext.Provider>
    )
}

export const GlobalAuth = () => {
    return useContext(FirebaseAuthContext)
}