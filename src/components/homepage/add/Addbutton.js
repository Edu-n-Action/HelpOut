"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const AddButton = ({ community = false }) => {
  const pathname = usePathname();
  const target = pathname.split("/");

  return (
    <button className="fixed aspect-[1/1] w-[2.6%] bottom-[25%] left-0 right-0 mx-auto z-99">
      <Image src={"/icon/add.svg"} alt={""} fill />
    </button>
  );
};

export default AddButton;
