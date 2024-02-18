"use client";

import { useState } from "react";

const LibBlock = ({ title }) => {
  const [choosen, setChoosen] = useState(0);
  const bg = ["#EFEFEF", "#CEFD4A"];
  const border = ["#2F3A47", "#2F3A47"];
  return (
    <button
      onClick={() => setChoosen(1 - choosen)}
      className="aspect-[352/40] w-full flex justify-center items-center bg-greydef rounded-[2.4%/24%]"
    >
      <div className="aspect-[352/38] w-[99%] bg-back rounded-[2.4%/24%] px-[4%] py-[1%] flex flex-row justify-start items-center gap-[3%] text-[4vw] md:text-[1.4vw]">
        <div
          className="w-[6%] aspect-[1/1] flex justify-center items-center rounded-[50%/50%]"
          style={{ backgroundColor: border[choosen] }}
        >
          <div
            className="aspect-[1/1] w-[92%] rounded-[50%/50%]"
            style={{ backgroundColor: bg[choosen] }}
          ></div>
        </div>
        <div className="flex items-center">{title}</div>
      </div>
    </button>
  );
};

const UploadMaterials = ({ SetStep = () => {}, step }) => {
  let lib = [
    {
      title: "Panduan buku A",
    },
    {
      title: "Panduan buku A",
    },
    {
      title: "Panduan buku A",
    },
    {
      title: "Panduan buku A",
    },
    {
      title: "Panduan buku A",
    },

    {
      title: "Panduan buku A",
    },
  ];
  return (
    <div className="w-[100%] flex flex-col items-center justify-start">
      <h1 className="aspect-[430/50] w-[90%] text-[7.5vw] md:text-[3vw] text-product text-left text-greyprime">
        Upload Materials
      </h1>

      <div className="flex flex-col justify-start bg-back h-fit w-[90%]">
        <div className="h-fit flex flex-col overflow-auto w-full gap-[15px] md:gap-[20px]">
          <div className="h-fit w-full items-center text-[5.4vw] md:text-[1.6vw]">
            <div>Choose from library</div>
          </div>
          {lib.map((item, index) => {
            return <LibBlock key={index} title={item.title} />;
          })}
          <div className="aspect-[379/60] w-[100%] flex justify-between text-[4.8vw] md:text-[2vw]">
            <button
              onClick={() => {
                SetStep(step + 1);
              }}
              className="bg-greenYellow rounded-[4%/10%] w-[48%] aspect-[180/60] active:bg-[lightgreen]"
            >
              Upload
            </button>
            <button
              onClick={() => {}}
              className="bg-greydef rounded-[4%/10%] w-[48%] aspect-[180/60] active:bg-[darkgrey]"
            >
              Discard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadMaterials;
