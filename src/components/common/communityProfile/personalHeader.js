"use client";

import Image from "next/image";
import { useState } from "react";
import { PersonalAuth } from "@/Context/PersonalAuthContext";
const PersonalHeader = ({
  data = {
    header: "",
    profilePicture: "",
    title: "Ken Bima Satria Gandasasmita",
    location: "Yogyakarta",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus in arcu eu lacinia. Nulla dapibus arcu ac eros molestie dapibus. Fusce lobortis purus sed purus dignissim, eu consectetur ligula scelerisque. Maecenas euismod velit id cursus gravida. Mauris at velit eget augue posuere eleifend.",
  },
}) => {
  const { getDataSendiri, dataUser } = PersonalAuth();
  return (
    <div className="relative w-full flex flex-col items-center bg-back">
      <div className="aspect-[387/100] w-full font-semibolds flex justify-center items-end mb-[4%]">
        <div className="text-[7.5vw] md:text-[2.5vw] w-[90%] text-product">
          More
        </div>
      </div>
      <div className="aspect-[1/1] w-[25%] flex justify-center items-center bg-greydef rounded-[10%]">
        {dataUser?.profileDownload != "" && (
          <img srcset={dataUser?.profileDownload} alt={""} className="object-fill" />
        )}
      </div>
      <div className="w-[90%] h-fit flex flex-col justify-between items-center mt-[2%] mb-[5%] text-center">
        <div className="flex flex-row items-center justify-center w-full">
          <div className="w-[90%] flex items-center font-product text-center font-semibold text-greysecond md:text-[1.6vw] text-[5vw]">
            {dataUser?.nama}
          </div>
        </div>
        <div className="w-full h-fit md:text-[1.2vw] text-[3.3vw] mb-[2%] font-semibold">
          {dataUser?.lokasi}
        </div>
        <div className="w-full h-fit md:text-[1.1vw] text-[3.2vw] mb-[1%]">
          {dataUser?.bio}
        </div>
      </div>
    </div>
  );
};

export default PersonalHeader;
