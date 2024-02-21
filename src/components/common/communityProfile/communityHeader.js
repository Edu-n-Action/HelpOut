"use client"
import Image from "next/image";

import { CommunityAuth } from "@/Context/CommunityAuthContext";


const CommunityHeader = ({
  data = {
    header: "",
    profilePicture: "",
    title: "Komunitas Sekolah Marjinal",
    eventCount: 1200,
    membersCount: 1200,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus in arcu eu lacinia. Nulla dapibus arcu ac eros molestie dapibus. Fusce lobortis purus sed purus dignissim, eu consectetur ligula scelerisque. Maecenas euismod velit id cursus gravida. Mauris at velit eget augue posuere eleifend.",
  },
}) => {
  const { dataUser } = CommunityAuth();
  return (
    <div className="relative w-full flex flex-col items-center bg-back">
      <div className="aspect-[430/160] w-full bg-greydef md:rounded-[2%/7%]">
        {dataUser?.headerDownload != "" && <img src={dataUser?.headerDownload} alt={""} className="object-fill max-h-[120px]" />}
      </div>
      <div className="absolute aspect-[1/1] w-[20%] flex justify-center items-center bg-[darkgrey] mt-[27%] rounded-[10%]">
        <div className="aspect-[1/1] w-[98%] bg-greydef rounded-[10%]">
          {dataUser?.profileDownload != "" && <img src={dataUser?.profileDownload} alt={""} className="object-fill" />}
        </div>
      </div>
      <div className="w-[90%] h-fit flex flex-col justify-between items-center mt-[11%] mb-[5%] text-center">
        <div className="aspect-[385/78] justify-center flex flex-row w-full">
          <div className="w-[78%] flex items-center font-product font-semibold text-greysecond md:text-[1.8vw] text-[5.3vw]">
            {dataUser?.nama}
          </div>
        </div>
        <div className="w-full h-fit md:text-[1.1vw] text-[3.2vw] mb-[4%]">
          {dataUser?.bio}
        </div>
        <div className="w-full flex flex-row justify-center h-fit md:text-[1.2vw] text-[3.3vw] mb-[2%]">
          <b>{dataUser?.eventTotal}</b>&nbsp;
          {dataUser?.eventTotal > 1 ? <div>Events</div> : <div>Event</div>}
          &nbsp;&nbsp;
          <b>{dataUser?.memberTotal}</b>&nbsp;
          {dataUser?.memberTotal > 1 ? <div>Members</div> : <div>Member</div>}
        </div>
      </div>
    </div>
  );
};

export default CommunityHeader;
