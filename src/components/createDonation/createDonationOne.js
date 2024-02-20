"use client";

import Image from "next/image";
import dateData from "@/const/cdate";
import InputDate from "@/components/common/input/inputDate";
import InputImage from "@/components/common/input/inputImage";
import { useState } from "react";

import React from "react";

function CreateDonationOne({ SetData, Data, SetIndex }) {
  const changeData = (key, value) => {
    SetData((old) => {
      return {
        ...old,
        [key]: value,
      };
    });
  };

  const setHeaderPicture = (value) => {
    SetData((old) => {
      return {
        ...old,
        gambar: value,
      };
    });
  };

  const data = [
    {
      title: "Title",
      type: "text",
      placeholder: "Masukkan judul kegiatan",
      key: "title",
    },
  ];
  const [dateStart, setDateStart] = useState([0, 0, 0]);
  const [dateEnd, setDateEnd] = useState([0, 0, 0]);

  console.log(dateStart);
  console.log(dateEnd);

  console.log(getDate(dateStart));
  console.log(getDate(dateEnd));
  return (
    <>
      <div className="w-full aspect-[379/127] flex flex-col justify-between">
        <div className="aspect-[379/127] w-full">
          <div className="aspect-[379/27] text-[4.8vw] md:text-[1.2vw]">
            Add header
          </div>
          <InputImage
            SetValue={(value) => setHeaderPicture(value)}
            value={Data.gambar}
            className="aspect-[379/100] w-full rounded-[3%/10%]"
          />
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
                onChange={(e) => changeData(item.key, e.target.value)}
                value={Data["title"]}
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
          value={Data.cerita}
          onChange={(e) => changeData("cerita", e.target.value)}
        ></textarea>
      </div>
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
          type="button"
          value="Next"
          className="bg-greenYellow rounded-[4%/10%] w-[48%] aspect-[180/60] active:bg-[lightgreen]"
          onClick={(e) => {
            console.log(Data);
            SetIndex(1);
          }}
        />
        <input
          type="button"
          value="Discard"
          className="bg-greydef rounded-[4%/10%] w-[48%] aspect-[180/60] active:bg-[darkgrey]"
        />
      </div>
    </>
  );
}

export default CreateDonationOne;
