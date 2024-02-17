import Image from "next/image";

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
  return (
    <div className="relative w-full flex flex-col items-center bg-back">
      <div className="aspect-[430/160] w-full bg-greydef md:rounded-[2%/7%]">
        {data.header != "" && <Image src={data.header} alt={""} fill />}
      </div>
      <div className="absolute aspect-[1/1] w-[20%] flex justify-center items-center bg-[darkgrey] mt-[27%] rounded-[10%]">
        <div className="aspect-[1/1] w-[98%] bg-greydef rounded-[10%]">
          {data.profilePicture != "" && (
            <Image srcset={data.profilePicture} alt={""} fill />
          )}
        </div>
      </div>
      <div className="w-[90%] h-fit flex flex-col justify-between items-center mt-[11%] mb-[5%] text-center">
        <div className="aspect-[385/78] justify-center flex flex-row w-full">
          <div className="w-[78%] flex items-center font-product font-semibold text-greysecond md:text-[1.8vw] text-[5.3vw]">
            {data.title}
          </div>
        </div>
        <div className="w-full h-fit md:text-[1.1vw] text-[3.2vw] mb-[4%]">
          {data.bio}
        </div>
        <div className="w-full flex flex-row justify-center h-fit md:text-[1.2vw] text-[3.3vw] mb-[4%]">
          <b>{data.eventCount}</b>&nbsp;
          {data.eventCount > 1 ? <div>Events</div> : <div>Event</div>}
          &nbsp;&nbsp;
          <b>{data.membersCount}</b>&nbsp;
          {data.membersCount > 1 ? <div>Members</div> : <div>Member</div>}
        </div>
      </div>
    </div>
  );
};

export default CommunityHeader;
