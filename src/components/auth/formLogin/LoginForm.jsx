"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import InputTextTransparent from "@/components/common/inputText/inputTextTransparent";



import { signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth";
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore'
import { db, auth } from '@/app/firebase';

import { PersonalAuth } from "@/Context/PersonalAuthContext";
import { GlobalAuth } from "@/Context/GlobalContext";

function LoginForm({ community = true }) {
  const router = useRouter();
  const { emailLogOut, emailSignInPersonal, authFirebase, emailSignInCommunity } = GlobalAuth();

  const [signinData, SetSignin] = useState({
    email: undefined,
    password: undefined,
  })

  const setPassword = (value) => {
    SetSignin(old => {
      return { ...old, "password": value }
    })
  }

  const setEmail = (value) => {
    SetSignin(old => {
      return { ...old, "email": value }
    })
  }


  const submitLogin = async (event) => {
    event.preventDefault();
    try {
      if (community) {
        await emailSignInCommunity(signinData.email, signinData.password)
      }
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <form className="max-w-[600px] w-full flex flex-col items-center" onSubmit={submitLogin}>
      <div className="max-w-[550px] w-full mt-[60px] mb-[10px]">
        <h2 className="font-bold text-2xl">Login to your account</h2>
      </div>
      <InputTextTransparent
        className={"max-w-[550px]"}
        placeholder="Email"
        type="email"
        value={signinData.email}
        SetValue={setEmail}
      />
      <InputTextTransparent
        className={"mt-5 max-w-[550px]"}
        placeholder="Password"
        value={signinData.password}
        SetValue={setPassword}
        type="password"
      />
      <button
        className="bg-[#CEFD4A] py-3 w-full z-[10] text-center text-xl mt-9"
        type="submit"
      >
        Login
      </button>
      <button
        className="bg-[#CEFD4A] py-3 w-full z-[10] text-center text-xl mt-9"
        type="button"
        onClick={e => emailLogOut()}
      >
        Logout
      </button>
    </form>
  );
}

export default LoginForm;
