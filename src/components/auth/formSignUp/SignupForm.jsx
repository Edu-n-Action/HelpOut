"use client";
import React, {useState} from "react";
import InputTextTransparent from "@/components/common/inputText/inputTextTransparent";

import { collection, addDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import {db} from '@/app/firebase'
function SignupForm() {
  const [signupData, SetSignup] = useState({
    email : undefined,
    password : undefined,
    confirmPassword : undefined
  })
  
  const setPassword = (value) => {
    SetSignup(old => {
      return {...old, "password" : value}
    })
  }

  const setEmail = (value) => {
    SetSignup(old => {
      return {...old, "email" : value}
    })
  }

  const setConfirmPassword = (value) => {
    SetSignup(old => {
      return {...old, "confirmPassword" : value}
    })
  }

  const submitForm = async (e) => {
    e.preventDefault()
    if(signupData.email != "" && signupData.password != "") {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, signupData.email, signupData.password)
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
    }
    
  }
  return (
    <form className="max-w-[600px] w-full flex flex-col items-center"
      onSubmit={submitForm}
    >
      <div className="max-w-[550px] w-full mt-[60px] mb-[10px]">
        <h2 className="font-bold text-2xl">Create an account</h2>
      </div>
      <InputTextTransparent
        className={"max-w-[550px]"}
        placeholder="Email"
        email={true}
        value={signupData.email}
        SetValue={setEmail}
      />
      <InputTextTransparent
        className={"mt-5 max-w-[550px]"}
        placeholder="Password"
        value={signupData.password}
        SetValue={setPassword}
      />
      <InputTextTransparent
        className={"mt-5 max-w-[550px]"}
        placeholder="Confirm Password"
        value={signupData.confirmPassword}
        SetValue={setConfirmPassword}
      />
      <button
        className="bg-[#CEFD4A] py-3 w-full z-[10] text-center text-xl mt-9"
        href={"/"}
        type="submit"
      >
        Sign Up
      </button>
    </form>
  );
}

export default SignupForm;
