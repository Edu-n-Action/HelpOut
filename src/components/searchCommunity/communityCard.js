import Image from "next/image";
import React from "react";

const communityCard = ({
  data = {
    title: "Komunitas Sekolah Marjinal",
    header: "",
    profile: "",
  },
}) => {
  console.log(data);
  return (
    <div className="aspect-[50/20] w-full my-[2%] shadow-xl bg-greydef flex justify-center rounded-[3%/7%] items-center">
      <div className="aspect-[50/19] w-[98%] p-[2%] flex-col items-start bg-back rounded-[3%/7%]">
        <div className="w-full relative">
          <div className="aspect-[40/5] w-full p-[2%] absolute bg-greydef rounded-[3%]">
            {data.header !== "" && <img src={data.header} alt={"community"} className="object-fill" />}
          </div>
        </div>

        <div className="relative z-20 mt-[7%] ml-[2%]">
          <div className="rounded-[50%] aspect-[1/1] w-[10%] border-2 border-greyprime bg-greydef">
            {data.profile !== "" && <img src={data.profile} alt={"communityc"} className="object-fill" />}
          </div>
          <h2 className="text-[3.4vw] md:text-[1vw] font-semibold mt-[1.4%]">
            {data.title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default communityCard;
