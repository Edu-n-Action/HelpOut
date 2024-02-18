"use client"
import { useContext, createContext, useState, useEffect } from "react";

import { db, auth, storage } from '@/app/firebase'
import { getFirestore, collection, query, where, getDocs, addDoc, doc, updateDoc } from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, setPersistence } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"


import { useRouter } from "next/navigation";

import { GlobalAuth } from "./GlobalContext";
const CommunityAuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const auth = getAuth();
    const router = useRouter();
    const { authFirebase, emailLogOut, setAuthFirebase } = GlobalAuth();


    useEffect(() => {
        /* if(authFirebase == null) {
            router.push("http://localhost:3000/personal/login")
        } */
    }, []);

    const updateProfileData = async (nama, bio, lokasi, headerImage, profileImage) => {
        try {
            const MAX_FILE_SIZe = 5 * 1024 * 1024;
            const headerRefStorage = ref(storage, "profilePicture/" + authFirebase.uid + "-Header")
            const profileRefStorage = ref(storage, "profilePicture/" + authFirebase.uid + "-Profile")
            if (headerImage.size >= MAX_FILE_SIZe || profileImage.size >= MAX_FILE_SIZe) {
                throw Error("File Size Limit Reached")
            }
            await uploadBytes(headerRefStorage, headerImage)
                .then(async (snapshot) => {
                    console.log("Header uplaod")

                    // Get ID or file name
                    const headerID = snapshot.ref.name;
                    await uploadBytes(profileRefStorage, profileImage)
                        .then(async (snapshot) => {
                            console.log("Profile uplaod")

                            // Get ID or file name
                            const profileID = snapshot.ref.name;

                            let getData;
                            const q = query(collection(db, 'community'), where('userID', '==', authFirebase.uid));
                            const querySnapshot = await getDocs(q);
                            querySnapshot.forEach((doc) => {
                                // You can access the document data here
                                getData = { ...doc.data(), id: doc.id }
                            });
                            const documentRef = doc(db, "community", getData.id)
                            await updateDoc(
                                documentRef,
                                {
                                    headerImageRef: headerID,
                                    profileImageRef: profileID,
                                    headerDownload: await getDownloadURL(headerRefStorage),
                                    profileDownload: await getDownloadURL(profileRefStorage),
                                    nama: nama,
                                    bio: bio,
                                    lokasi: lokasi
                                }
                            )
                            console.log("Data updated")
                        })
                })
        } catch (error) {
            console.log("Error updating document : ", error.message)
        }
    }


    const value = {
        updateProfileData
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