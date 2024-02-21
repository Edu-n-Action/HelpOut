import React from "react";
import Image from "next/image";

import InputText from "../common/input/inputText";
import CommunityCard from "./communityCard";

const searchPage = () => {
  let CommunityList = [
    {
      title: "Community",
      header: "",
      profile: "",
    },
  ];
  return (
    <div className="aspect-[430/932]  w-full pt-[5%] px-[5%] flex flex-col">
      <div className="relative flex flex-row mb-[3%] gap-[2%]">
        <InputText placeholder="Search" />
        <div className="relative aspect-[3/2] flex items-center justify-center w-[14%]">
          <div className="relative aspect-[1/1] w-[45%] right-[2%]">
            <Image src={"/icon/search-icon.svg"} alt={""} fill />
          </div>
        </div>
      </div>

      <div className="mb-[1%]">
        <h2 className="font-semibold text-2xl mb-[3%]">Community</h2>
        <div className="w-full h-[2px] bg-black mb-[4%]" />
      </div>
      {CommunityList.map((item, index) => {
        <CommunityCard key={index} data={item} />;
      })}
      <div className="aspect-[387/120] w-full">
        <div className="aspect-[387/120] w-full"></div>
      </div>
    </div>
  );
};

export default searchPage;
