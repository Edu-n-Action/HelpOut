"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import InputTextTransparent from "@/components/common/input/inputTextTransparent";

import { collection, addDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { GlobalAuth } from "@/Context/GlobalContext";

import { db } from "@/app/firebase";
function SignupForm({ community = true }) {
  const router = useRouter()
  const { emailSignUpCommunity, emailSignUpPersonal } = GlobalAuth();
  const [signupData, SetSignup] = useState({
    email: undefined,
    password: undefined,
    confirmPassword: undefined,
  });

  const setPassword = (value) => {
    SetSignup((old) => {
      return { ...old, password: value };
    });
  };

  const setEmail = (value) => {
    SetSignup((old) => {
      return { ...old, email: value };
    });
  };

  const setConfirmPassword = (value) => {
    SetSignup((old) => {
      return { ...old, confirmPassword: value };
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      if (community) {
        emailSignUpCommunity(signupData.email, signupData.password);
        router.push("/community/login")
      } else {
        emailSignUpPersonal(signupData.email, signupData.password);
        router.push("/personal/login")
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <form
      className="max-w-[600px] w-full flex flex-col items-center"
      onSubmit={submitForm}
    >
      <div className="max-w-[550px] w-full mt-[60px] mb-[10px]">
        <h2 className="font-bold text-2xl">Create an account</h2>
      </div>
      <InputTextTransparent
        className={"max-w-[550px]"}
        placeholder="Email"
        type="email"
        value={signupData.email}
        SetValue={setEmail}
      />
      <InputTextTransparent
        className={"mt-5 max-w-[550px]"}
        placeholder="Password"
        value={signupData.password}
        SetValue={setPassword}
        type="password"
      />
      <InputTextTransparent
        className={"mt-5 max-w-[550px]"}
        placeholder="Confirm Password"
        value={signupData.confirmPassword}
        SetValue={setConfirmPassword}
        type="password"
      />
      <button
        className="bg-[#CEFD4A] py-3 w-full z-[10] text-center text-xl mt-9"
        href={"/signup"}
        type="submit"
      >
        Sign Up
      </button>
    </form>
  );
}

export default SignupForm;
