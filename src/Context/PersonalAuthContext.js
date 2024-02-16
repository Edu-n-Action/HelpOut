"use client"
import { useContext, createContext, useState, useEffect } from "react";

import {db} from '@/app/firebase'
import { getFirestore, collection, query, where, getDocs, addDoc } from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, setPersistence } from "firebase/auth";
import { useRouter } from "next/navigation";

const PersonalAuthContext = createContext();

export const AuthContextProvider =({children}) => {
    const auth = getAuth();
    const router = useRouter();
    const [userData, setUser] = useState(null)


    useEffect(() => {
        
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
        });
        if(userData == null) {
            router.push("http://localhost:3000/personal/login")
        }
        
        return () => unsubscribe();
      }, [userData]);

    const emailSignIn = async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password).then( async (userCredential) => {
                const q = query(collection(db, 'User'), where('userID', '==', userCredential.user.uid));
                const querySnapshot = await getDocs(q);
                const data = querySnapshot.docs.map(doc => doc.data());
                setUser(userCredential.user)
                if(data.length == 0) {
                    setUser(null)
                    signOut(auth)
                }
            }
        )
    };

    const emailSignUp = async (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        await createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          // Signed up 
            const user = userCredential.user;
            const Collection = collection(db, 'User')
            const documentData = {
                email : user.email,
                userID : user.uid
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

    const emailLogOut = () => {
        signOut(auth);
        setUser(null);
    }

    const value = {
        userData,
        emailSignIn,
        emailSignUp,
        emailLogOut,
    };


    return (
    <PersonalAuthContext.Provider value={value}>
        {children}
    </PersonalAuthContext.Provider>
    )
}

export const PersonalAuth = () => {
    return useContext(PersonalAuthContext)
}