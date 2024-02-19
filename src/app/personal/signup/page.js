"use client";

import React, { useState } from "react";
import SignupForm from "@/components/auth/formSignUp/SignupForm";

function page() {
  return (
    <div className="h-screen w-full bg-[#2F3A47] flex items-center flex-col">
      <h1 className="text-5xl text-white font-semibold mt-[115px]">
        <span className="text-[#CEFD4A]">Help</span>
        <span className="text-white">Out</span> App
      </h1>
      <div className="mt-9 w-full h-full bg-[#EEEEEE] rounded-t-lg flex items-center flex-col px-[5%]">
        <SignupForm />
        <p className="text-xl mt-8">or Sign In with</p>
        <button
          className="bg-transparent rounded-lg border-2 border-[#2F3A47]/50 py-2 max-w-[283px] w-full z-[10] text-center text-lg mt-4"
          href={"/"}
        >
          Google
        </button>
        <p className="text-3xl mt-14">
          already have an account?{" "}
          <a href="/" className="font-bold hover:cursor-pointer">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default page;
