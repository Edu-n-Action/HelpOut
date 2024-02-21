"use client";

import CommunityHeader from "@/components/common/communityProfile/communityHeader";
import Link from "next/link";

const Content = ({ data }) => {
  const logout = () => {};
  return (
    <div className="aspect-[430/932] w-full md:w-[33%] overflow-y-scroll bg-back flex flex-col items-center">
      <CommunityHeader />
      <button
        onClick={logout}
        className="text-[3vw] md:text-[1vw] aspect-[114/32] w-[29.4%] bg-greenYellow rounded-[3%/12%]"
      >
        Switch Account
      </button>
      <div className="w-[90%] mt-[10%] flex flex-col">
        <div className="text-[3.6vw] md:text-[1.2vw] font-semibold h-fit">
          Another
        </div>
        <Link
          href={"./profile/edit/"}
          className="aspect-[371/59] w-full bg-greydef mt-[4.2%] flex justify-center items-center rounded-[2%/12%] shadow-lg"
        >
          <div className="aspect-[371/56] w-[99.5%] flex items-center pl-[5%] bg-back rounded-[2%/12%]">
            <div className="text-[3vw] md:text-[1vw] font-semibold">
              Settings
            </div>
          </div>
        </Link>
      </div>
      {/* <SearchPage /> */}
    </div>
  );
};

export default Content;
