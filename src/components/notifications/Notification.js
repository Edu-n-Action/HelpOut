"use client";

import Image from "next/image";
import Navbar from "../homepage/navbar/Navbar";

const NotifBlock = ({ message }) => {
  return (
    <div className="h-fit w-full bg-greydef flex justify-center items-center rounded-[3%/15%] shadow-md">
      <div className="min-h-[98%] h-fit w-[99.5%] bg-back rounded-[3%/15%] pl-[4%] py-[5%] pr-[4%] flex flex-row items-center gap-[2%]">
        <div className="min-w-[5%] flex justify-center items-center h-fit">
          <div className="aspect-[20/20] w-[92%] rounded-[50%/50%] bg-[black]"></div>
        </div>
        <div className="text-[2.8vw] md:text-[1.2vw]">{message}</div>
      </div>
    </div>
  );
};

const Notif = ({
  community = true,
  notifList = [
    "You have been assigned to event A Yoasl;dlkasdlks ajldja dlkajld kkajsld lku have been assigned to event A You have been assigned to event AYou have been assigned to event A",
    "You have been assigned to event A",
    "You have been assigned to event A",
    "You have been assigned to event A",
    "You have been assigned to event A",

    "You have been assigned to event B",
    "You have been assigned to event B",
    "You have been assigned to event B",
  ],
}) => {
  return (
    <div className="w-full h-full bg-back overflow-auto">
      <Navbar community={community} />
      <div className="hidden md:inline fixed md:aspect-[1440/465] w-[100%] bottom-0 z-0">
        <Image srcset={"/ornaments/wavy-low-deks.svg"} alt={"wave"} fill />
      </div>
      <div className="inline md:hidden absolute aspect-[430/550] w-full bottom-0 z-0">
        <Image srcset={"/ornaments/wave-mobile.svg"} alt={"wave"} fill />
      </div>
      <div className="relative w-full min-h-[100vh]] flex items-center mx-auto justify-center py-[10%] md:py-[5%] overflow-hidden">
        <div className="relative z-20 w-full md:w-[45%] pb-[50%] md:pb-[19%] flex justify-center">
          <div className="w-[90%] flex flex-col gap-[3%]">
            <h1 className="font-semibold text-[7.5vw] md:text-[2.5vw] text-product text-left pl-[2%]">
              Notification
            </h1>
            {notifList.map((item, index) => {
              return <NotifBlock key={index} message={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notif;
