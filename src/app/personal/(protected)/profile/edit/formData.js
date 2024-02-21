"use client";
import React, { useState } from "react";
import InputImage from "@/components/common/input/inputImage";
import Image from "next/image";

import { PersonalAuth } from "@/Context/PersonalAuthContext";

export default function FormData(submit) {
  const { updateProfileData } = PersonalAuth();
  const [profil, SetProfil] = useState({
    gambar: undefined,
    nama: undefined,
    lokasi: undefined,
    bio: undefined,
    ttl: undefined,
  });
  const changeData = (value, key) => {
    SetProfil((old) => {
      return { ...old, [key]: value };
    });
  };
  const data = [
    { title: "Name", type: "text", placeholder: "Insert name", key: "nama" },
    {
      title: "Birthdate",
      type: "date",
      placeholder: "Insert birthdate",
      key: "ttl",
    },
    {
      title: "Location",
      type: "text",
      placeholder: "Insert location",
      key: "lokasi",
    },
  ];
  const tes = (e) => {
    e.preventDefault();
    updateProfileData(
      profil.nama,
      profil.bio,
      new Date(profil.ttl),
      profil.lokasi
    );
  };
  return (
    <form
      onSubmit={tes}
      className="flex flex-col aspect-[379/609] w-[100%] justify-around items-center"
    >
      <InputImage
        className="aspect-[1/1] w-[30%] rounded-[15%/15%]"
        add={true}
        SetValue={(value) => {
          changeData(value, "gambar");
        }}
        value={profil.gambar}
      />

      <div className="flex flex-col aspect-[379/496] w-[100%] justify-around">
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
                  value={profil[item.key]}
                  onChange={(e) => changeData(e.target.value, item.key)}
                />
              </div>
            </div>
          );
        })}
        <div className="relative w-full aspect-[379/100]">
          <div className="w-full aspect-[379/21] text-[4.8vw] md:text-[1.8vw] font-semibold">
            Bio
          </div>
          <textarea
            className="w-full aspect-[379/76] rounded-[2%/10%] pl-[2%] pr-[10%] pt-[1%] flex justify-center"
            name="myBio"
            rows="4"
            cols="50"
            placeholder="Masukkan bio"
            value={profil.bio}
            onChange={(e) => changeData(e.target.value, "bio")}
          ></textarea>
        </div>
        <div className="aspect-[379/60] w-[100%] flex justify-between text-[4.8vw] md:text-[2vw]">
          <input
            type="submit"
            value="Submit"
            className="bg-greenYellow rounded-[4%/10%] w-[48%] aspect-[180/60] active:bg-[lightgreen]"
          />
          <input
            type="button"
            onClick={() => {}}
            value="Discard"
            className="bg-greydef rounded-[4%/10%] w-[48%] aspect-[180/60] active:bg-[grey]"
          />
        </div>
      </div>
    </form>
  );
}
