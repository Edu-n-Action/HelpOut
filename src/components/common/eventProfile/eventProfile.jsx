"use client";

import Image from "next/image";

const EventProfile = ({
  eventTitle = "Mengajar Kampung Pemulung Yogyakarta",
  imgSrc = "",
  headerSrc = "",
  leftTitle = "Info",
  leftOnClick = () => {},
  rightTitle = "back",
  rightOnClick = () => {},
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute",
}) => {
  return (
    <div className="w-full flex flex-col items-center bg-back">
      <div className="aspect-[430/160] w-full bg-greydef md:rounded-[2%/7%]">
        {/* <Image src={headerSrc} alt={"header"} fill /> */}
        Header
      </div>
      <div className="w-[90%] h-fit flex flex-col justify-between items-center mt-[5%] mb-[5%]">
        <div className="aspect-[385/78] flex flex-row w-full">
          <div className="aspect-[1/1] w-[22%] rounded-[10%] bg-greydef">
            Profile
            {/* <Image src={imgSrc} alt={"profile"} fill /> */}
          </div>
          <div className="w-[78%] flex items-center ml-[4.5%] font-product font-semibold text-greysecond md:text-[1.6vw] text-[4.8vw]">
            {eventTitle}
          </div>
        </div>
        <div className="w-full h-fit md:text-[1.06vw] text-[3.2vw] mt-[5%] mb-[8%]">
          {description}
        </div>
        <div className="w-full aspect-[385/35] flex flex-row justify-between">
          <button
            onClick={leftOnClick}
            className="aspect-[213/35] w-[49%] rounded-[4%/20%] bg-greenYellow flex justify-center items-center md:text-[1.5vw] text-[4.5vw] active:bg-[lightgreen]"
          >
            {leftTitle}
          </button>
          <button
            onClick={rightOnClick}
            className="aspect-[213/35] w-[49%] rounded-[4%/20%] bg-[black] flex justify-center items-center"
          >
            <div className="aspect-[213/38] md:w-[99%] w-[99.5%] rounded-[3%/20%] bg-back md:text-[1.5vw] text-[4.5vw] flex justify-center items-center active:bg-[lightgrey]">
              {rightTitle}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventProfile;
