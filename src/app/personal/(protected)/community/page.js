

import PersonalCommunityHeader from "@/components/common/communityProfile/personalCommunityHeader";
import Menu from "./Menu";

import SearchPage from "@/components/searchCommunity/searchPage";

import Image from "next/image";

const {
  default: CommunityHeader,
} = require("@/components/common/communityProfile/communityHeader");

const Community = () => {
  return (
    <div className="w-full h-fit min-h-screen bg-back flex flex-col items-center">
      <div className="w-full md:w-[33%] bg-back ">
        {/* <PersonalCommunityHeader />
        <div className="w-full bg-back">
          <Menu />
        </div> */}
        <SearchPage />
      </div>
    </div>
  );
};

export default Community;
