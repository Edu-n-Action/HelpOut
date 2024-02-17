import PersonalCommunityHeader from "@/components/common/communityProfile/personalCommunityHeader";
import Menu from "./Menu";

const {
  default: CommunityHeader,
} = require("@/components/common/communityProfile/communityHeader");

const Community = () => {
  return (
    <div className="w-full h-fit min-h-screen bg-back flex flex-col items-center">
      <div className="w-full md:w-[33%] bg-back">
        <PersonalCommunityHeader />
        <div className="w-full bg-back">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Community;
