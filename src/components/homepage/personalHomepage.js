"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import ProgressBar from "../common/progressbar/progressBar";
import EventTask from "../common/eventProfile/eventTask";
import Navbar from "./navbar/Navbar";
import { PersonalAuth } from "@/Context/PersonalAuthContext";



const PersonalHomepage = ({
  eventList = [
    {
      id: "123",
      header: "",
      title: "Mengajar Kampung Pemulung Yogyakarta",
      start: "12 Februari 2023",
      role: "Member",
      finished: true,
    },
    {
      id: "123",
      header: "",
      title: "Mengajar Kampung Pemulung Yogyakarta",
      start: "13 Februari 2023",
      role: "Member",
      finished: true,
    },
    {
      id: "123",
      header: "",
      title: "Mengajar Kampung Pemulung Yogyakarta",
      start: "12 Februari 2023",
      role: "Member",
      finished: true,
    },
    {
      id: "123",
      header: "",
      title: "Mengajar Kampung Pemulung Yogyakarta",
      start: "12 Februari 2023",
      role: "Member",
      finished: true,
    },
    {
      id: "123",
      header: "",
      title: "Mengajar Kampung Pemulung Yogyakarta",
      start: "12 Februari 2023",
      role: "Member",
      finished: true,
    },
  ],
  user = {
    picture: "",
    fullName: "Ken Bima Satria G.",
  },
}) => {
  const { getDataSendiri, dataUser } = PersonalAuth();
  return (
    <div className="aspect-[430/932] min-h-fit h-screen w-full md:aspect-auto md:flex md:justify-center bg-back overflow-y-scroll">
      <div className="hidden md:inline absolute md:aspect-[1440/465] w-[100%] bottom-0 z-0">
        <Image srcset={"/ornaments/wavy-low-deks.svg"} alt={"wave"} fill />
      </div>
      <div className="relative aspect-[430/932] flex flex-col justify-start pt-[12%] md:pt-[3%] pb-[12%] gap-[2.5%] md:gap-[4%] items-center font-greyprime w-full md:w-[33%] text-greysecond">
        <div className="inline md:hidden absolute aspect-[430/550] w-full bottom-0 z-0">
          <Image srcset={"/ornaments/wave-mobile.svg"} alt={"wave"} fill />
        </div>
        {/* header */}
        <div className="flex flex-row justify-between aspect-[387/68] w-[90%] z-1">
          <div className="aspect-[309/68] flex flex-col gap-[0%] w-[80%]">
            <div className="text-[5.2vw] md:text-[1.73vw] h-[45%]">Hello,</div>
            <div className="font-semibold text-[5.3vw] md:text-[1.76vw] items-start">
              {dataUser?.nama} 
            </div>
          </div>
          <div className="aspect-[1/1] w-[17%] rounded-[15%/15%] bg-[darkgrey]">
            {dataUser?.profileDownload != "" && (
              <img src={dataUser?.profileDownload} alt={"picture"} className="object-fill" />
            )}
          </div>
        </div>

        {dataUser?.eventDiikuti.length ? (
          <>
            <div className="relative z-2 w-[90%] aspect-[387/120] gap-[3.5%] mt-[7.5%]">
              <ProgressBar
                title={"Event cleared"}
                subtitle="let's join events and help more"
                finished={12}
                total={30}
              />
            </div>
            <div className="w-[90%] z-2 aspect-[387/62] font-semibold text-[5vw] md:text-[1.66vw]">
              <div>Event Assigned</div>
              <div className="text-[2.5vw] md:text-[0.83vw] font-normal">
                Assigned volunteering event held by your community
              </div>
            </div>
            {eventList.map((item, index) => {
              return <EventTask key={index} eventItem={item} />;
            })}
          </>
        ) : (
          <div className="relative z-2 w-[90%] aspect-[387/120] flex justify-center items-center gap-[3.5%] mt-[25%] md:mt-[7.5%]">
            <div className="aspect-[300/171] mt-[10%] w-[100%] z-1 bg-greydef flex justify-center items-center rounded-[6%/10%]">
              <div className="aspect-[300/171] w-[99%] bg-back active:bg-greydef flex justify-center items-center rounded-[6%/10%]">
                <a className="relative aspect-[300/171] w-[90%] rounded-[6%/10%] cursor-pointer" href="/personal/community">
                  <Image
                    src={"/properties/findingCommunity.svg"}
                    alt={"Let's find a community for you"}
                    fill
                  />
                </a>
              </div>
            </div>
          </div>
        )}
        <div className="relative z-2 aspect-[387/40] md:aspect-[387/85] w-full">
          <div className="aspect-[387/40] md:aspect-[387/85] w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default PersonalHomepage;
