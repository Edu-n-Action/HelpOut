import Navbar from "@/components/homepage/navbar/Navbar";
import Menu from "./Menu";

const {
  default: CommunityHeader,
} = require("@/components/common/communityProfile/communityHeader");

const Community = () => {
  return (
    <div className="w-full h-fit min-h-screen bg-back flex flex-col items-center">
      <Navbar community={true} />
      <div className="w-full md:w-[33%] bg-back">
        <CommunityHeader />
        <div className="w-full bg-back">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Community;
