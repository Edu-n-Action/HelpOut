import Image from "next/image";

const DonationBox = ({
  data = {
    header: "",
    profilePicture: "",
    category: "volunteering",
    title: "Donasi Kampung Pemulung Yogyakarta",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus in arcu eu lacinia. Nulla dapibus arcu ac eros molestie dapibus. Fusce lobortis purus sed purus dignissim, eu consectetur ligula scelerisque. Maecenas euismod velit id cursus gravida. Mauris at velit eget augue posuere eleifend.",
  },
}) => {
  return (
    <div className="relative w-full h-fit bg-back">
      <div className="absolute z-20 aspect-[282/61] w-[65.5%] md:w-[20%] pl-[5%] md:pl-[2%] gap-[7%] flex justify-start items-center bg-back shadow-xl ml-[6.9%] md:ml-[3%] mt-[5.3%] md:mt-[3.4%] rounded-[5%/20%]">
        <div className="aspect-[1/1] w-[5.3%] rounded-[50%] bg-greenYellow"></div>
        <div className="md:text-[1.2vw] text-[3.5vw] font-semibold">
          {data.category}
        </div>
      </div>
      <div className="relative aspect-[430/932] md:aspect-[1280/720] w-full flex flex-col items-center bg-back">
        <div className="aspect-[430/219] md:aspect-[1280/240] w-full bg-greydef">
          {data.header != "" && <Image src={data.header} alt={""} fill />}
        </div>

        <div className="absolute aspect-[1/1] w-[34.7%] md:w-[15%] flex justify-center items-center bg-[darkgrey] mt-[33%] md:mt-[11%] rounded-[10%]">
          <div className="aspect-[1/1] w-[98%] bg-greydef rounded-[10%]">
            {data.profilePicture != "" && (
              <Image srcset={data.profilePicture} alt={""} fill />
            )}
          </div>
        </div>
        <div className="aspect-[387/539] md:aspect-[387/80] w-[90%] flex flex-col justify-start items-center mt-[22%] md:mt-[10%] mb-[5%] md:mb-[0%] text-center">
          <div className="aspect-[385/78] md:aspect-[1280/20] justify-center flex flex-row w-full">
            <div className="w-[78%] flex justify-center items-center font-product font-semibold text-greysecond md:text-[1.8vw] text-[5.3vw]">
              {data.title}
            </div>
          </div>
          <div className="aspect-[386/30] md:aspect-[360/10] w-full md:text-[1.1vw] flex justify-center items-center text-[3.2vw] mt-[3%] md:mt-[1%] font-semibold">
            Cerita Donasi Kita
          </div>
          <div className="w-full h-fit md:text-[1.1vw] text-[3.2vw] mb-[4%] md:mb-[1%]">
            {data.bio}
          </div>
          <button className="aspect-[387/49] outline-0 md:aspect-[600/40] md:mt-[1%] w-[60%] md:text-[1.1vw] text-[4.2vw] mb-[4%] bg-greenYellow active:bg-[lightgreen]">
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationBox;
