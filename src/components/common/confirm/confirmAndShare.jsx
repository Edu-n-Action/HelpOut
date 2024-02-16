"use client";

import Image from "next/image";
import Link from "next/link";

let ConfirmAndShare = ({
  message = "Donation is Live!",
  href = "/",
  shareClick = () => {},
  buttonMessage = "Home",
}) => {
  return (
    <div className="relative aspect-[430/932] flex justify-center items-center md:aspect-[1280/720] w-full bg-back text-greysecond">
      <div className="hidden md:inline absolute md:aspect-[285/619] w-[15%] bottom-0 right-0 z-0">
        <Image srcset={"/ornaments/dekstop-lb.svg"} alt={"wave"} fill />
      </div>
      <div className="inline md:hidden absolute aspect-[224/385] w-[50%] bottom-0 z-0 right-0">
        <Image srcset={"/ornaments/mobile-lb.svg"} alt={"wave"} fill />
      </div>
      <div className="font-product aspect-[320/224] justify-start md:justify-center items-center flex flex-col w-[74%] md:w-[40%] z-10">
        <div className="aspect-[320/116] px-[4%] text-[10vw] md:text-[4.1vw] flex justify-center md:px-[10%] items-center font-semibold text-center w-full">
          {message}
        </div>
        <div className="aspect-[281/116] w-[87.8%] md:w-[45%] md:aspect-[281/100] flex flex-col justify-between items-center">
          <button
            onClick={shareClick}
            className="text-[6vw] md:font-semibold md:text-[1.8vw] bg-greenYellow rounded-[3%/10%] aspect-[281/54] md:aspect-[238/47] w-[100%] md:w-[85%] hover:bg-[lightgreen] active:bg-[lightgreen] flex justify-center items-center"
          >
            Share
          </button>
          <Link
            href={"/community/community/donation"}
            className="text-[6vw] md:font-semibold md:text-[1.8vw] bg-greydef rounded-[3%/10%] aspect-[281/54] md:aspect-[238/47] w-[100%] md:w-[85%] flex justify-center items-center"
          >
            <div className="bg-back rounded-[3%/10%] aspect-[280/53] md:aspect-[238/46] md:w-[98%] w-[98.5%] hover:bg-[lightgrey] active:bg-[lightgrey] flex justify-center items-center">
              {buttonMessage}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConfirmAndShare;
