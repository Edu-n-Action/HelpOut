"use client";

import Image from "next/image";
import dateData from "@/const/cdate";
import InputDate from "@/components/common/inputDate/inputDate";
import InputImage from "@/components/common/inputImage/inputImage";

export default function FormDonation(submit) {
  const data = [
    { title: "Title", type: "text", placeholder: "Masukkan judul kegiatan" },
  ];
  const tes = () => {};
  return (
    <form
      onSubmit={tes}
      className="flex flex-col aspect-[379/788] w-[100%] justify-around"
    >
      <div className="w-full aspect-[379/127] flex flex-col justify-between">
        <div className="aspect-[379/127] w-full">
          <div className="aspect-[379/27] text-[4.8vw] md:text-[1.2vw]">
            Add header
          </div>
          <InputImage className="aspect-[379/100] w-full rounded-[3%/10%]" />
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
      <div className="relative w-full aspect-[379/179]">
        <div className="w-full aspect-[379/21] text-[4.8vw] md:text-[1.8vw] font-semibold">
          Cerita Donasi Kita
        </div>
        <textarea
          className="w-full aspect-[379/155] rounded-[2%/5%] pl-[2%] pr-[10%] pt-[1%] flex justify-center"
          name="myBio"
          rows="4"
          cols="50"
          placeholder="Masukkan cerita"
        ></textarea>
      </div>
      <div className="relative w-full aspect-[379/210] md:aspect-[379/195] flex flex-col justify-between">
        <div className="w-full flex flex-col justify-around aspect-[379/90]">
          <div className="w-full aspect-[379/21] text-[4.8vw] md:text-[1.8vw]">
            Date Started
          </div>

          <InputDate />
        </div>

        <div className="w-full flex flex-col justify-around aspect-[379/90]">
          <div className="w-full aspect-[379/21] text-[4.8vw] md:text-[1.8vw]">
            Date Ended
          </div>
          <InputDate />
        </div>
      </div>
      <div className="aspect-[379/60] w-[100%] flex justify-between text-[4.8vw] md:text-[2vw]">
        <input
          type="submit"
          value="Next"
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
  );
}
