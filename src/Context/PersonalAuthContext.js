"use client"
import { useContext, createContext, useState, useEffect } from "react";

import { db, auth, storage } from '@/app/firebase'
import { getFirestore, collection, query, where, getDocs, addDoc, updateDoc, doc, orderBy, limit, startAt, endAt } from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"


import { useRouter } from "next/navigation";

import { GlobalAuth } from "./GlobalContext";

const PersonalAuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const router = useRouter();
    const [dataUser, SetDataUser] = useState(null);
    const { authFirebase, setAuthFirebase } = GlobalAuth();

    

    const updateProfileData = async (nama, bio, ttl, lokasi, profileImage) => {
        try {
            if(nama == "" & bio == "" & ttl == "", lokasi == "" & profileImage == undefined) {
                console.log("Belum diisi semua")
            }
            const MAX_FILE_SIZe = 5 * 1024 * 1024;
            const profileRefStorage = ref(storage, "profilePicture/" + authFirebase.uid + "-Profile")
            if (profileImage.size >= MAX_FILE_SIZe) {
                throw Error("File Size Limit Reached")
            }

            const snapshotProfile = await uploadBytes(profileRefStorage, profileImage);
            const profileID = snapshotProfile.ref.name;

            let getData;
            const q = query(collection(db, 'User'), where('userID', '==', authFirebase.uid));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                // You can access the document data here
                getData = { ...doc.data(), id: doc.id }
            });
            const documentRef = doc(db, "User", getData.id)
            await updateDoc(
                documentRef,
                {
                    nama: nama,
                    bio: bio,
                    ttl: ttl,
                    lokasi: lokasi,
                    profileImageRef : profileID,
                    profileDownload : await getDownloadURL(profileRefStorage),
                    profileFilled : true

                }
            )
        } catch (error) {
            console.log("Error updating document : ", error.message)
        }
    }

    const getDataSendiri = async () => {
        try {
            if(authFirebase == null) {
                return
            } else {
            let getData;
                const q = query(collection(db, 'User'), where('userID', '==', authFirebase.uid));
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    // You can access the document data here
                    getData = { ...doc.data(), id: doc.id }
                });
            // console.log(getData)
            SetDataUser(getData)
            if(getData.profileFilled) {

            } else router.push("/personal/profile/edit")
            }
        } catch (error) {
            
        }
    }

    const searchCommunity = async (searchQuery) => {
        let q;
        if (searchQuery.length == 0) {
            q = query(collection(db, 'community'),
                orderBy('nama'),
                limit(10)
            )
        }
        else {
            q = query(collection(db, 'community'),
                orderBy('nama'), // Order the documents by the field you want to search
                startAt(searchQuery), // Start at documents that have the field value greater than or equal to the search term
                endAt(searchQuery + '\uf8ff') // End at documents that have the field value less than the search term plus a Unicode character that is greater than any possible single character
            );
        }

        const querySnapshot = await getDocs(q);
        const docs = [];
        querySnapshot.forEach((doc) => {
            docs.push({ id: doc.id, ...doc.data() });
        });
        return docs
    }

    const getDataCommunity = async (idCommunity) => {
        const docRef = collection('community').doc(idCommunity);
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log('Document not found');
            return null;
        }

        const data = doc.data();

        // Resolve the references
        const eventRefs = data.event.map(ref => ref.get());
        const donasiRefs = data.donasi.map(ref => ref.get());
        const memberRefs = data.donasi.map(ref => ref.get());

        const [eventDocs, donasiDocs, memberDocs] = await Promise.all([Promise.all(eventRefs), Promise.all(donasiRefs), Promise.all(memberRefs)]);

        // Replace the references with the actual documents
        data.event = eventDocs.map(doc => doc.data());
        data.donasi = donasiDocs.map(doc => doc.data());
        data.donasi = memberDocs.map(doc => doc.data());

        return data;
    }

    const applyCommunity = async (idCommunity) => {
        let getData;
        const q = query(collection(db, 'User'), where('userID', '==', authFirebase.uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // You can access the document data here
            getData = { ...doc.data(), id: doc.id }
        });

        const communityRef = doc(db, "community", idCommunity);
        const userRef = doc(db, "User", getData.id)
        await updateDoc(userRef, {
            pendingCommunity: communityRef,
            
        })
        await updateDoc(communityDoc, {

        })
    }

    const leaveCommunity = async (idCommunity) => {
        try {
            let getData;
            const q = query(collection(db, 'User'), where('userID', '==', authFirebase.uid));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                // You can access the document data here
                getData = { ...doc.data(), id: doc.id }
            });
            const documentRef = doc(db, "User", getData.id)
            await updateDoc(
                documentRef,
                {
                    community: null
                }
            )
        } catch (error) {

        }
    }

    const givePermit = async (idEvent) => {

    }

    const attendEvent = async (idEvent) => {

    }

    useEffect(() => {
        async function checkAuth() {
            onAuthStateChanged(auth, (user) => {
                if(user) {
                    console.log("Success")
                    getDataSendiri()
                } else {
                    console.log("Failed")
                    router.push('/personal/login')
                }
            })
        }

        checkAuth()
        
      }, [authFirebase]);


    return (
        <PersonalAuthContext.Provider value={{ updateProfileData, searchCommunity, getDataSendiri, dataUser }}>
            {children}
        </PersonalAuthContext.Provider>
    )
}

export const PersonalAuth = () => {
    return useContext(PersonalAuthContext)
}