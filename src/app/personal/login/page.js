"use client";

import React, { useState } from "react";
import LoginForm from "@/components/auth/formLogin/LoginForm";

function page() {
  return (
    <div className="h-screen w-full bg-[#2F3A47] flex items-center flex-col">
      <h1 className="text-5xl text-white font-semibold mt-[115px]">
        <span className="text-[#CEFD4A]">Help</span>
        <span className="text-white">Out</span> App
      </h1>
      <div className="mt-9 w-full h-full bg-[#EEEEEE] rounded-t-lg flex items-center flex-col px-[5%]">
        <LoginForm title="Login to your account" community={false}/>
        <p className="text-xl mt-8">or Login with</p>
        {/* <button
          className="bg-transparent rounded-lg border-2 border-[#2F3A47]/50 py-2 max-w-[283px] w-full z-[10] text-center text-lg mt-4"
          href={"/"}
        >
          Google
        </button> */}
        <p className="text-3xl mt-14 mb-5">
          Dont have an account?{" "}
          <a href="/personal/signup" className="font-bold hover:cursor-pointer">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default page;
