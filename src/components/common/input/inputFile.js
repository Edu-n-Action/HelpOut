"use client";
import React, { useState } from "react";
import Image from "next/image";

function InputFile({
  className = "aspect-[1/1] w-[30%] rounded-[15%/15%]",
  SetValue = () => {},
  value = "",
  add = false,
  fill = true,
}) {
  return (
    <div
      className={`${className} relative flex flex-row bg-greydef justify-center items-center`}
    >
      <input
        type="file"
        className="w-full h-full opacity-0"
        onChange={(e) => {
          SetValue(e.target.files[0]);
        }}
      />
    </div>
  );
}

export default InputFile;
