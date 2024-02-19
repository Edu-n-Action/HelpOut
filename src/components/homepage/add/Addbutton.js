"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const AddButton = ({ community = false }) => {
  const pathname = usePathname();
  const target = pathname.split("/");

  return <div></div>;
};

export default AddButton;
