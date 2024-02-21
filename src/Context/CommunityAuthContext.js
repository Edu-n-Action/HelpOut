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

    const uploadDonationLink = async (headerImage, qrImage, judul, ceritaDonasi, dayEnd, dayStart, target, noRek, pesanTerimakasih) => {
        try {
            const MAX_FILE_SIZe = 5 * 1024 * 1024;
    
            let getData;
            const q = query(collection(db, 'community'), where('userID', '==', authFirebase.uid));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                // You can access the document data here
                getData = { ...doc.data(), id: doc.id }
            });
            const communityRef = doc(db, "community", getData.id)
            const donationRef = await addDoc(collection(db, "Donasi"), {
                communityLink : communityRef,
                ceritaDonasi : ceritaDonasi,
                judul : judul, 
                dayEnd : dayEnd, 
                dayStart : dayStart,
                target : target,
                noRek : noRek,
                pesanTerimakasih : pesanTerimakasih,
                active : true,
            })
            console.log("Donation Created")
    
            const documentRef = doc(db, "community", getData.id)
            await updateDoc(
                documentRef,
                {
                    donations : [...getData.donations, donationRef.id]
                }
            )
            const headerRefStorage = ref(storage, "DonationEventHeader/" + donationRef.id + "-HeaderDonation")
            const qrImageRefStorage = ref(storage, "donationLink/" + donationRef.id + "-QRDonation")
    
            if (headerImage.size >= MAX_FILE_SIZe || qrImage.size >= MAX_FILE_SIZe) {
                throw Error("File Size Limit Reached")
            }

            const snapshotHeader = await uploadBytes(headerRefStorage, headerImage);
            const snapshotQR = await uploadBytes(qrImageRefStorage, qrImage);
            console.log("Image Uploaded")

            await updateDoc(doc(db, "Donasi", donationRef.id), {
                headerID : snapshotHeader.ref.name,
                qrID : snapshotQR.ref.name,
                profileCommunityLink : getData.profileDownload,
                headerDownloadURL : await getDownloadURL(headerRefStorage),
                qrDownloadURL : await getDownloadURL(qrImageRefStorage)
            })
            console.log("Successs")
        } catch (error) {
            throw Error(error.message)
        }
    }

    const uploadNewEvent = async (headerImage, thumbnailImage, judul, keterangan, dayEnd, dayStart, anggota, panduan) => {
        try {
            const MAX_FILE_SIZe = 5 * 1024 * 1024;
            if (headerImage.size >= MAX_FILE_SIZe || ThumbnailImageRefStorage.size >= MAX_FILE_SIZe) {
                throw Error("File Size Limit Reached")
            }
            let getData;
            const q = query(collection(db, 'community'), where('userID', '==', authFirebase.uid));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                // You can access the document data here
                getData = { ...doc.data(), id: doc.id }
            });
            const communityRef = doc(db, "community", getData.id)

            // Proseskan anggota

            // End Proseskan anggota

            const eventRef = await addDoc(collection(db, "Donasi"), {
                communityLink : communityRef,
                keterangan : keterangan,
                judul : judul, 
                dayEnd : dayEnd, 
                dayStart : dayStart,
                panduan : panduan,
                anggota : anggota,
                active : true
            })
            console.log("Event Created")
    
            const documentRef = doc(db, "community", getData.id)
            await updateDoc(
                documentRef,
                {
                    events : [...getData.events, donationRef.id]
                }
            )
            const headerRefStorage = ref(storage, "DonationEventHeader/" + eventRef.id + "-HeaderEvent")
            const ThumbnailImageRefStorage = ref(storage, "donationLink/" + eventRef.id + "-ThumbnailEvent")

            const snapshotHeader = await uploadBytes(headerRefStorage, headerImage);
            const snapshotThumbnail = await uploadBytes(ThumbnailImageRefStorage, thumbnailImage);
            console.log("Image Uploaded")

            await updateDoc(doc(db, "Events", donationRef.id), {
                headerID : snapshotHeader.ref.name,
                thumbnailID : snapshotThumbnail.ref.name,
                profileCommunityLink : getData.profileDownload,
                headerDownloadURL : await getDownloadURL(headerRefStorage),
                thumbnailDownloadURL : await getDownloadURL(ThumbnailImageRefStorage)
            })
            console.log("Successs")
        } catch (error) {
            throw Error(error.message)
        }
    }

    const uploadBukuPanduan = async (filePDf, judul) => {
        try {
            const MAX_FILE_SIZe = 5 * 1024 * 1024;
            if (filePDf.size >= MAX_FILE_SIZe ) {
                throw Error("File Size Limit Reached")
            }
            let getData;
            const q = query(collection(db, 'community'), where('userID', '==', authFirebase.uid));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                // You can access the document data here
                getData = { ...doc.data(), id: doc.id }
            });
            const communityRef = doc(db, "community", getData.id )
            const subBukuPanduanRef = collection(communityRef, "bukuPanduan")
            
            const documenIDRef = await addDoc(subBukuPanduanRef, {
                judul : judul,
                filePDf: filePDf
            })
            console.log("Buku Panduan uploaded")
            
            const panduanStorageRef = ref(storage, "BukuPanduan/" + documenIDRef.id + "-Panduan-" + getData.id);
            const snapshotPDF = await uploadBytes(panduanStorageRef, filePDf);
            console.log("PDF Uplaoded")
            await updateDoc(documenIDRef, {
                pdfID : snapshotPDF.ref.name,
                pdfDownloadURL : await getDownloadURL(panduanStorageRef)
            })
            console.log("Successs")
        } catch (error) {
            throw Error(error.message)
        }
        
    }

    // Add member
    const addMember = async (idMember) => {
        let getData;
        const q = query(collection(db, 'community'), where('userID', '==', authFirebase.uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // You can access the document data here
            getData = { ...doc.data(), id: doc.id }
        });

        const filteredUser = getData.pendingMember.filter((ref) => {
            const parts = ref.split("/");
            return parts[1] == idMember 
        })

        const newListPending = getData.pendingMember.filter((ref) => {
            const parts = ref.split("/");
            return parts[1] != idMember 
        })

        if (filteredUser.length == 0 ) {
            console.log("No User Found")
            return
        }
        const userID = filteredUser[0].split("/")
        const userRef = doc(db, "User", userID[1])
        const communityRef = doc(db, "community", getData.id)
        await updateDoc(userRef, {
            pendingCommunity : null,
            community : communityRef
        })

        await updateDoc(communityRef, {
            pendingMember : newListPending,
            member : [...getData.member, userRef]
        })

    }

    // Reject Member
    const rejectMember = async (idMember) => {
        let getData;
        const q = query(collection(db, 'community'), where('userID', '==', authFirebase.uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // You can access the document data here
            getData = { ...doc.data(), id: doc.id }
        });

        const filteredUser = getData.pendingMember.filter((ref) => {
            const parts = ref.split("/");
            return parts[1] == idMember 
        })

        const newListPending = getData.pendingMember.filter((ref) => {
            const parts = ref.split("/");
            return parts[1] != idMember 
        })

        if (filteredUser.length == 0 ) {
            console.log("No User Found")
            return
        }
        const userID = filteredUser[0].split("/")
        const userRef = doc(db, "User", userID[1])
        const communityRef = doc(db, "community", getData.id)
        
        await updateDoc(userRef, {
            pendingCommunity : null,
            community : communityRef
        })
    }


    const value = {
        updateProfileData,
        uploadDonationLink,
        uploadNewEvent,
        uploadBukuPanduan,
        rejectMember,
        addMember
    };

    useEffect(() => {
        async function checkAuth() {
            onAuthStateChanged(auth, (user) => {
                if(user) {
                    console.log("Success")
                } else {
                    console.log("Failed")
                    router.push('/community/login')
                }
            })
        }
        checkAuth()
    }, [authFirebase]);


    return (
        <CommunityAuthContext.Provider value={value}>
            {children}
        </CommunityAuthContext.Provider>
    )
}

export const CommunityAuth = () => {
    return useContext(CommunityAuthContext)
}