"use client";

import Image from "next/image";

const Materials = ({
  materials = [
    "Buku Panduan Mengajar A",
    "Buku Panduan Mengajar B",
    "Buku Panduan Mengajar C",
    "Buku Panduan Mengajar D",
  ],
  add = true,
}) => {
  return (
    <div className="w-[90%] mt-[5%] h-fit flex-col gap-10">
      {materials.map((item, index) => {
        return (
          <button
            key={index}
            className="aspect-[385/75] w-full bg-greydef rounded-[3%/15%] mb-[4%] flex flex-row justify-center items-center md:text-[1.06vw] text-[3.2vw]"
          >
            <div className="relative aspect-[390/73] w-[99%] px-[3%] shadow-md bg-back rounded-[3%/15%] flex flex-row justify-between items-center md:text-[1.4vw] text-[4.2vw] active:bg-[lightgrey]">
              <div className="overflow-ellipsis">{item}</div>
              <div className="absolute aspect-[1/1] min-w-[6%] right-[3%]">
                <Image src={"/icon/dots-grid.svg"} alt="grid" fill />
              </div>
            </div>
          </button>
        );
      })}
      {add && (
        <button className="aspect-[385/75] w-full bg-greydef rounded-[3%/15%] mb-[4%] flex flex-row justify-center items-center md:text-[1.06vw] text-[3.2vw]">
          <div className="relative aspect-[390/73] w-[99%] px-[3%] shadow-md bg-back rounded-[3%/15%] flex flex-row justify-between items-center md:text-[1.4vw] text-[4.2vw] active:bg-[lightgrey]">
            <div className="absolute aspect-[1/1] min-w-[6%] left-[3%]">
              <Image src={"/icon/dots-grid.svg"} alt="grid" fill />
            </div>
            <div className="absolute aspect-[1/1] min-w-[6%] right-[3%]">
              <Image src={"/icon/add-basic.svg"} alt="grid" fill />
            </div>
          </div>
        </button>
      )}
    </div>
  );
};

export default Materials;
