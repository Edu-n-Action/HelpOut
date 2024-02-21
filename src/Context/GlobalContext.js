"use client"
import { useContext, createContext, useState, useEffect } from "react";

import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, setPersistence, browserSessionPersistence } from "firebase/auth";
import { getFirestore, collection, query, where, getDocs, addDoc } from 'firebase/firestore'
import { auth, db } from "@/app/firebase"

import { useRouter } from "next/navigation";

const FirebaseAuthContext = createContext();

export const FirebaseContextProvider = ({ children }) => {
    const [authFirebase, setAuthFirebase] = useState(null)
    console.log(authFirebase)
    useEffect(() => {
        
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setAuthFirebase(currentUser);   
        });
        if(authFirebase == null) {
            
        }

        return () => unsubscribe();
    }, [authFirebase]);

    const emailLogOut = () => {
        signOut(auth);
        setAuthFirebase(null);
    }

    const emailSignInPersonal = async (email, password) => {
        try {
            await setPersistence(auth, browserSessionPersistence).then(async () => {
                await signInWithEmailAndPassword(auth, email, password).then(async (userCredential) => {
                    const q = query(collection(db, 'User'), where('userID', '==', userCredential.user.uid));
                    const querySnapshot = await getDocs(q);
                    const data = querySnapshot.docs.map(doc => doc.data());
                    if (data.length == 0) {
                        signOut(auth)
                        return
                    }
                    setAuthFirebase(userCredential.user)
                    console.log(data)
                    console.log("LOGIN")
                }
                )
            })
            
        } catch (error) {
            console.log(error.message)
        }
    };

    const emailSignInCommunity = async (email, password) => {
        try {
            await setPersistence(auth, browserSessionPersistence).then(async () => {
                await signInWithEmailAndPassword(auth, email, password).then(async (userCredential) => {
                    const q = query(collection(db, 'community'), where('userID', '==', userCredential.user.uid));
                    const querySnapshot = await getDocs(q);
                    const data = querySnapshot.docs.map(doc => doc.data());
                    if (data.length == 0) {
                        signOut(auth)
                        return
                    }
                    setAuthFirebase(userCredential.user)
                    console.log(data)
                }
                )
            })
            
        } catch (error) {
            console.log(error.message)
        }
    };

    const emailSignUpCommunity = async (email, password) => {
        await createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                // Signed up 
                const user = userCredential.user;
                const Collection = collection(db, 'community')
                const documentData = {
                    email: user.email,
                    userID: user.uid,
                    member: [],
                    pendingMember: [],
                    donations: [],
                    events: [],
                    profileFilled: false
                }
                const newData = await addDoc(Collection, documentData)
                console.log(newData)
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
        try {
            await createUserWithEmailAndPassword(auth, email, password)
                .then(async (userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    const Collection = collection(db, 'User')
                    const documentData = {
                        email: user.email,
                        userID: user.uid,
                        eventDiikuti: [],
                        community: null,
                        pendingCommunity: null,
                        profileFilled: false,
                        notification: []
                    }
                    const newData = await addDoc(Collection, documentData)
                    console.log("Account Created")
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage)
                    // ..
                });
        } catch (error) {
            console.log(error)
        }
    };

    // TODO
    const AddDonor = async (idDonasi, nama, jumlah) => {

    }

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