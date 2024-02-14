"use client";

import Image from "next/image";
import Link from "next/link";

let Confirm = ({
  message = "Event Ended",
  href = "/",
  buttonMessage = "Home",
}) => {
  return (
    <div className="relative aspect-[430/932] flex justify-center items-center md:aspect-[1280/720] w-full bg-back">
      <div className="hidden md:inline absolute md:aspect-[1440/465] w-[100%] bottom-0 z-0">
        <Image srcset={"/ornaments/wavy-low-deks.svg"} alt={"wave"} fill />
      </div>
      <div className="inline md:hidden absolute aspect-[430/550] w-full bottom-0 z-0">
        <Image srcset={"/ornaments/wave-mobile.svg"} alt={"wave"} fill />
      </div>
      <div className="font-product aspect-[360/320] md:aspect-[1440/1024] justify-start md:justify-center items-center flex flex-col w-[83.7%] md:w-[40%] z-10">
        <div className="text-[10vw] md:text-[4vw] font-semibold text-greysecond text-center">
          {message}
        </div>
        <Link
          href={href}
          className="text-[6vw] md:text-[3vw] bg-greenYellow rounded-[3%/10%] aspect-[275/64] md:aspect-[1440/380] w-[76.3%] md:w-[50%] active:bg-[lightgreen] flex justify-center items-center"
        >
          {buttonMessage}
        </Link>
      </div>
    </div>
  );
};

export default Confirm;
