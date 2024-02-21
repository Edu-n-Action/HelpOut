"use client";

import InputFile from "@/components/common/input/inputFile";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const UploadToLibrary = () => {
  const [file, setFile] = useState("");
  return (
    <>
      <div className="w-full h-fit min-h-screen bg-back flex flex-col items-center">
        <div className="w-full md:w-[33%] bg-back pt-[11%] md:pt-[3%] flex flex-col justify-start items-center">
          {" "}
          <h1 className="aspect-[430/50] w-[90%] text-[7.5vw] md:text-[3vw] text-product text-left">
            Upload to Library
          </h1>
          <div className="h-fit w-[88.13%]">
            <form className="flex flex-col aspect-[379/500] w-[100%] justify-start pt-[5%]">
              <div className="w-full aspect-[379/200] flex flex-col justify-between">
                <div className="aspect-[379/127] w-full">
                  <div className="aspect-[379/27] font-semibold text-[6.7vw] md:text-[2vw]">
                    Title
                  </div>
                  <div className="relative w-full aspect-[379/29]">
                    <div className="aspect-[1/1] w-[5%] absolute top-0 bottom-0 my-auto right-[2%]">
                      <Image src={"/icon/pen.svg"} alt={"pen"} fill />
                    </div>
                    <input
                      className="w-full aspect-[379/29] outline-2 rounded-[2%/25%] pl-[2%] pr-[3%]"
                      placeholder={"Add Title"}
                      type={"text"}
                    />
                  </div>
                </div>
                <div className="aspect-[379/127] w-full">
                  <div className="aspect-[379/27] font-semibold text-[6.7vw] md:text-[2vw]">
                    Upload File
                  </div>
                  <div
                    className={`aspect-[379/40] w-full rounded-[3%/18%] relative flex flex-row bg-white justify-center items-center`}
                  >
                    <div className="aspect-[1/1] w-[5%] absolute top-0 bottom-0 my-auto right-[2%]">
                      <Image src={"/icon/pen.svg"} alt={"pen"} fill />
                    </div>
                    <div className="aspect-[7/1] w-[20%] absolute top-0 bottom-0 text-[grey] my-auto left-[2%]">
                      Add file
                    </div>
                    <input
                      type="file"
                      className="w-full h-full opacity-0"
                      onChange={(e) => {
                        setFile(e.target.files[0]);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="aspect-[379/60] w-[100%] flex justify-between text-[4.8vw] md:text-[2vw]">
                <input
                  type="submit"
                  value="Next"
                  onClick={() => {
                    setStep(step + 1);
                  }}
                  className="bg-greenYellow rounded-[4%/10%] w-[48%] aspect-[180/60] active:bg-[lightgreen]"
                />
                <Link
                  href="/community/community"
                  className="bg-greydef flex justify-center items-center rounded-[4%/10%] w-[48%] aspect-[180/60] active:bg-[darkgrey]"
                >
                  <div>Discard</div>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadToLibrary;
