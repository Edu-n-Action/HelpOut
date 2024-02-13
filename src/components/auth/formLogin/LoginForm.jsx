"use client";
import React from "react";
import InputTextTransparent from "@/components/common/inputText/inputTextTransparent";
function LoginForm({
  SetForm = () => {},
  Form = undefined,
  title = "Create an Account",
}) {
  return (
    <form className="max-w-[600px] w-full flex flex-col items-center">
      <div className="max-w-[550px] w-full mt-[60px] mb-[10px]">
        <h2 className="font-bold text-2xl">Login to your account</h2>
      </div>
      <InputTextTransparent
        className={"max-w-[550px]"}
        placeholder="Email"
        email={true}
      />
      <InputTextTransparent
        className={"mt-5 max-w-[550px]"}
        placeholder="Password"
      />
      <button
        className="bg-[#CEFD4A] py-3 w-full z-[10] text-center text-xl mt-9"
        href={"/"}
      >
        Login
      </button>
    </form>
  );
}

export default LoginForm;
