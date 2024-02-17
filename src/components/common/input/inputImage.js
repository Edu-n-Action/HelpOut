"use client";
import React, { useState } from "react";
import Image from "next/image";

function InputImage({
  className = "aspect-[1/1] w-[30%] rounded-[15%/15%]",
  SetValue = () => { },
  value = "",
  add = false,
}) {
  return (
    <div
      className={`${className} relative flex flex-row bg-greydef justify-center items-center`}
    >
      {add && (
        <div className="absolute aspect-[1/1] w-[30%]">
          <Image src={"/icon/add-photo.svg"} alt="add" fill />
        </div>
      )}

      {
        value && (
          <Image src={URL.createObjectURL(value)} fill />
        )
      }

      <input
        type="file"
        className="w-full h-full opacity-0"
        accept="image/jpeg, image/png image/jpg"
        onChange={(e) => { SetValue(e.target.files[0]) }}
      />
    </div>
  );
}

export default InputImage;
