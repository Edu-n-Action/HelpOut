"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import InputImage from "@/components/common/input/inputImage";
import Image from "next/image";

import { CommunityAuth } from "@/Context/CommunityAuthContext";

export default function FormData(submit) {
  const { updateProfileData, dataUser } = CommunityAuth();
  const router = useRouter()

  const [profil, SetProfil] = useState({
    gambar: {file : dataUser?.profileDownload || undefined, local: false},
    header: {file: dataUser?.headerDownload || undefined, locall:false},
    nama: dataUser?.nama || "",
    lokasi: dataUser?.lokasi || "",
    bio: dataUser?.bio || "",
    ttl: dataUser?.ttl || ""
  })
  const changeData = (value, key) => {
    SetProfil((old) => {
      return { ...old, [key]: value }
    })
  }
  const data = [
    { title: "Name", type: "text", placeholder: "Masukkan nama", key: "nama" },
    {
      title: "Location",
      type: "text",
      placeholder: "Masukkan lokasi",
      key: "lokasi"
    },
  ];
  const tes = async (e) => {
    e.preventDefault();
    try {
      await updateProfileData(profil.nama, profil.bio, profil.lokasi, profil.header, profil.gambar)
      console.log("SUCCESS")
      router.push("/community/profile")
    } catch (error) {
      console.log(error)
      console.log("Failed")
    }

    useEffect(() => {
      SetProfil(old => {
        return {
          gambar: {file : dataUser?.profileDownload || undefined, local: false},
            header: {file: dataUser?.headerDownload || undefined, locall:false},
            nama: dataUser?.nama || "",
            lokasi: dataUser?.lokasi || "",
            bio: dataUser?.bio || "",
            ttl: dataUser?.ttl || ""
        }
        
      })
    },[dataUser])

  };
  return (
    <form
      onSubmit={tes}
      className="flex flex-col aspect-[379/759] w-[100%] justify-around"
    >
      <div className="w-full aspect-[379/272] flex flex-col justify-between">
        <div className="aspect-[379/127] w-full">
          <div className="aspect-[379/27] text-[4.6vw] md:text-[1.2vw]">
            Add header
          </div>
          <InputImage fill={false} SetValue={(value) => changeData(value, "header")} value={profil.header} className="aspect-[379/100] w-full rounded-[3%/10%]" />
        </div>
        <div className="aspect-[379/127] w-full">
          <div className="aspect-[379/27] text-[4.6vw] md:text-[1.2vw]">
            Add Profile
          </div>
          <InputImage SetValue={(value) => changeData(value, "gambar")} value={profil.gambar} className="aspect-[100/100] w-[26.3%] rounded-[10%/10%]" />
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
                value={profil[item.key]}
                onChange={(e) => changeData(e.target.value, item.key)}
              />
            </div>
          </div>
        );
      })}
      <div className="relative w-full aspect-[379/179]">
        <div className="w-full aspect-[379/21] text-[4.8vw] md:text-[1.8vw] font-semibold">
          Bio
        </div>
        <textarea
          className="w-full aspect-[379/155] rounded-[2%/5%] pl-[2%] pr-[10%] pt-[1%] flex justify-center"
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
          onClick={() => { }}
          value="Discard"
          className="bg-greydef rounded-[4%/10%] w-[48%] aspect-[180/60] active:bg-[darkgrey]"
        />
      </div>
    </form>
  );
}
