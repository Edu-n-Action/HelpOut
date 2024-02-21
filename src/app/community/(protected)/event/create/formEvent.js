"use client";

import Image from "next/image";
import dateData from "@/const/cdate";
import InputDate from "@/components/common/input/inputDate";
import InputImage from "@/components/common/input/inputImage";
import { useState } from "react";
import getDate from "@/components/utils/getDate";

export default function FormEvent(submit, setStep, step) {
  const data = [
    { title: "Title", type: "text", placeholder: "Insert event's title" },
    {
      title: "Job Description",
      type: "text",
      placeholder: "Insert Job Description",
    },
  ];
  const tes = () => {};

  const [dateStart, setDateStart] = useState([0, 0, 0]);
  const [dateEnd, setDateEnd] = useState([0, 0, 0]);

  console.log(dateStart);
  console.log(dateEnd);

  console.log(getDate(dateStart));
  console.log(getDate(dateEnd));

  return (
    <>
      <h1 className="aspect-[430/50] w-[90%] text-[7.5vw] md:text-[3vw] text-product text-left">
        Make an Event
      </h1>

      <div className="aspect-[379/688] w-[88.13%]">
        <form
          onSubmit={tes}
          className="flex flex-col aspect-[379/788] w-[100%] justify-around"
        >
          <div className="w-full aspect-[379/272] flex flex-col justify-between">
            <div className="aspect-[379/127] w-full">
              <div className="aspect-[379/27] text-[4.8vw] md:text-[1.2vw]">
                Add header
              </div>
              <InputImage className="aspect-[379/100] w-full rounded-[3%/10%]" />
            </div>
            <div className="aspect-[379/127] w-full">
              <div className="aspect-[379/27] text-[4.8vw] md:text-[1.2vw]">
                Add main tumbnail
              </div>
              <InputImage className="aspect-[100/100] w-[26.3%] rounded-[10%/10%]" />
            </div>
          </div>
          {data.map((item, index) => {
            return (
              <div key={index} className="w-full aspect-[379/50]">
                <div className="w-full aspect-[379/21] text-[4.8vw] md:text-[1.8vw] font-semibold">
                  {item.title}
                </div>
                <div className="relative w-full aspect-[379/29]">
                  {item.type != "date" ? (
                    <div className="aspect-[1/1] w-[5%] absolute top-0 bottom-0 my-auto right-[2%]">
                      <Image src={"/icon/pen.svg"} alt={"pen"} fill />
                    </div>
                  ) : (
                    <div></div>
                  )}
                  <input
                    className="w-full aspect-[379/29] rounded-[2%/25%] pl-[2%] pr-[3%]"
                    placeholder={item.placeholder}
                    type={item.type}
                  />
                </div>
              </div>
            );
          })}
          <div className="relative w-full aspect-[379/210] md:aspect-[379/195] flex flex-col justify-between">
            <div className="w-full flex flex-col justify-around aspect-[379/90]">
              <div className="w-full aspect-[379/21] text-[4.8vw] md:text-[1.8vw]">
                Date Started
              </div>
              <InputDate SetValue={setDateStart} value={dateStart} />
            </div>

            <div className="w-full flex flex-col justify-around aspect-[379/90]">
              <div className="w-full aspect-[379/21] text-[4.8vw] md:text-[1.8vw]">
                Date Ended
              </div>
              <InputDate SetValue={setDateEnd} value={dateEnd} />
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
            <input
              type="button"
              onClick={() => {}}
              value="Discard"
              className="bg-greydef rounded-[4%/10%] w-[48%] aspect-[180/60] active:bg-[darkgrey]"
            />
          </div>
        </form>
      </div>
    </>
  );
}
