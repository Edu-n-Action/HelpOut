import Image from "next/image";

const ThankYou = ({
  data = {
    header: "",
    profilePicture: "",
    category: "volunteering",
    qr: "",
    account: "12i12312301209",
    title: "Donasi Kampung Pemulung Yogyakarta",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus in arcu eu lacinia. Nulla dapibus arcu ac eros molestie dapibus. Fusce lobortis purus sed purus dignissim, eu consectetur ligula scelerisque. Maecenas euismod velit id cursus gravida. Mauris at velit eget augue posuere eleifend.",
  },
}) => {
  return (
    <div className="aspect-[430/932] md:aspect-[1280/720] w-full flex justify-center items-center bg-greysecond">
      <div className="md:aspect-[1280/720] w-[85%] md:w-[70%] text-greenYellow flex flex-col text-center justify-center items-center">
        <div className="text-[5vw] md:text-[2vw]">Thank You For Helping</div>
        <div className="text-[6vw] md:text-[3vw] text-wrap font-semibold">
          {data.title}
        </div>
        <div className="text-[3.7vw] md:text-[1.5vw]">
          every help by you matters
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
