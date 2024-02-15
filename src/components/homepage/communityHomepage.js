"use client";

import Image from "next/image";
import ProgressBar from "../common/progressbar/progressBar";
import EventTask from "../common/eventProfile/eventTask";

import { useState } from "react";
import DonationTask from "../common/eventProfile/donationTask";

const CommunityHomepage = ({
  eventList = [
    {
      id: "123",
      header: "",
      title: "Mengajar Kampung Pemulung Yogyakarta",
      start: "12 Februari 2023",
      finished: true,
    },
    {
      id: "123",
      header: "",
      title: "Mengajar Kampung Pemulung Yogyakarta",
      start: "13 Februari 2023",
      finished: true,
    },
    {
      id: "123",
      header: "",
      title: "Mengajar Kampung Pemulung Yogyakarta",
      start: "12 Februari 2023",
      finished: true,
    },
    {
      id: "123",
      header: "",
      title: "Mengajar Kampung Pemulung Yogyakarta",
      start: "12 Februari 2023",
      finished: true,
    },
    {
      id: "123",
      header: "",
      title: "Mengajar Kampung Pemulung Yogyakarta",
      start: "12 Februari 2023",
      finished: true,
    },
  ],
  donationList = [
    {
      id: "123",
      header: "",
      title: "Mengajar Kampung Pemulung Yogyakarta",
      start: "12 Februari 2023",
      received: 12000000,
      require: 24000000,
      finished: true,
    },
    {
      id: "123",
      header: "",
      title: "Mengajar Kampung Pemulung Yogyakarta",
      start: "13 Februari 2023",
      received: 100000,
      require: 24000000,
      finished: true,
    },
    {
      id: "123",
      header: "",
      title: "Mengajar Kampung Pemulung Yogyakarta",
      start: "12 Februari 2023",
      received: 10000000,
      require: 24000000,
      finished: true,
    },
    {
      id: "123",
      header: "",
      title: "Mengajar Kampung Pemulung Yogyakarta",
      start: "12 Februari 2023",
      received: 20000000,
      require: 24000000,
      finished: true,
    },
    {
      id: "123",
      header: "",
      title: "Mengajar Kampung Pemulung Yogyakarta",
      start: "12 Februari 2023",
      received: 15000000,
      require: 24000000,
      finished: true,
    },
  ],
  community = {
    name: "Komunitas Sekolah Marjinal",
  },
}) => {
  const [menu, setMenu] = useState(0);
  // 0 -> unchoosen
  // 1 -> choosen
  const lineColor = ["#D9D9D9", "#202832"];
  const bodyColor = ["#EFEFEF", "#202832"];
  const textColor = ["#202832", "#CEFD4A"];

  return (
    <div className="aspect-[430/932] min-h-fit h-screen w-full md:aspect-auto md:flex md:justify-center bg-back overflow-y-scroll ">
      <div className="hidden md:inline absolute md:aspect-[1440/465] w-[100%] bottom-0 z-0">
        <Image srcset={"/ornaments/wavy-low-deks.svg"} alt={"wave"} fill />
      </div>
      <div className="relative aspect-[430/932] flex flex-col justify-start pt-[12%] md:pt-[3%] pb-[12%] gap-[2.5%] md:gap-[4%] items-center font-greyprime w-full md:w-[33%] text-greysecond">
        <div className="inline md:hidden absolute aspect-[430/550] w-full bottom-0 z-0">
          <Image srcset={"/ornaments/wave-mobile.svg"} alt={"wave"} fill />
        </div>
        {/* header */}
        <div className="flex flex-col justify-between aspect-[387/110] w-[90%] z-1">
          <div className="aspect-[309/68] flex flex-col gap-[0%] w-[80%]">
            <div className="text-[4.8vw] md:text-[1.6vw] h-[45%]">
              Help is Waiting
            </div>
            <div className="font-semibold text-[4.8vw] md:text-[1.6vw] items-start">
              {community.name}
            </div>
          </div>
          <div className="aspect-[387/34] flex flex-row w-full gap-[2%]">
            <button
              className="aspect-[86/34] w-[20%] text-[3.6vw] md:text-[1.2vw] rounded-[5%/10%] flex justify-center items-center"
              style={{
                backgroundColor: lineColor[Number(menu === 0)],
              }}
              onClick={() => setMenu(0)}
            >
              <div
                className="aspect-[86/44] w-[94%] rounded-[5%/10%] flex justify-center items-center"
                style={{
                  backgroundColor: bodyColor[Number(menu === 0)],
                  color: textColor[Number(menu === 0)],
                }}
              >
                Events
              </div>
            </button>
            <button
              className="aspect-[96/34] w-[30.6%] text-[3.6vw] md:text-[1.2vw] rounded-[5%/10%] flex justify-center items-center"
              style={{
                backgroundColor: lineColor[Number(menu === 1)],
              }}
              onClick={() => setMenu(1)}
            >
              <div
                className="aspect-[96/31] w-[96%] rounded-[5%/10%] flex justify-center items-center"
                style={{
                  backgroundColor: bodyColor[Number(menu === 1)],
                  color: textColor[Number(menu === 1)],
                }}
              >
                Fundraising
              </div>
            </button>
          </div>
        </div>

        {menu === 0 &&
          (eventList.length ? (
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
                <div>Events</div>
                <div className="text-[2.5vw] md:text-[0.83vw] font-normal">
                  Held events of offline or online activities
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
                  <button className="relative aspect-[300/171] w-[90%] rounded-[6%/10%]">
                    <Image
                      src={"/properties/findingCommunity.svg"}
                      alt={"Let's find a community for you"}
                      fill
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        {menu === 1 &&
          (donationList.length ? (
            <>
              <div className="w-[90%] z-2 aspect-[387/62] font-semibold text-[5vw] md:text-[1.66vw]">
                <div>Fundraising</div>
                <div className="text-[2.5vw] md:text-[0.83vw] font-normal">
                  collect fundraising to held your humanitary event
                </div>
              </div>
              {donationList.map((item, index) => {
                return <DonationTask key={index} donationItem={item} />;
              })}
            </>
          ) : (
            <div className="relative z-2 w-[90%] aspect-[387/120] flex justify-center items-center gap-[3.5%] mt-[25%] md:mt-[7.5%]">
              <div className="aspect-[300/171] mt-[10%] w-[100%] z-1 bg-greydef flex justify-center items-center rounded-[6%/10%]">
                <div className="aspect-[300/171] w-[99%] bg-back active:bg-greydef flex justify-center items-center rounded-[6%/10%]">
                  <button className="relative aspect-[300/171] w-[90%] rounded-[6%/10%]">
                    <Image
                      src={"/properties/findingCommunity.svg"}
                      alt={"Let's find a community for you"}
                      fill
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CommunityHomepage;
