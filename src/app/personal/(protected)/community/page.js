import PersonalCommunityHeader from "@/components/common/communityProfile/personalCommunityHeader";
import Menu from "./Menu";

import SearchPage from "@/components/searchCommunity/searchPage";
import PageCommunity from "@/components/common/communityProfile/pageCommunity";

import Image from "next/image";
import Navbar from "@/components/homepage/navbar/Navbar";

const {
  default: CommunityHeader,
} = require("@/components/common/communityProfile/communityHeader");

const Community = () => {
  return (
    <div className="w-full h-fit min-h-screen bg-back flex flex-col items-center">
      <Navbar community={false} />
      <div className="w-full md:w-[33%] overflow-y-scroll bg-back">
        <PageCommunity />
      </div>
    </div>
  );
};

export default Community;
