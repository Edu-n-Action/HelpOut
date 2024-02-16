import Image from "next/image";

const Profile = () => {
  const profile = {
    image: "",
    fullName: "Ken Bima Satria Gandasasmita",
    userName: "@chaossken",
    place: "Yogyakarta",
  };
  return (
    <div className="w-screen h-full bg-back flex flex-col justify-center items-center pt-[1%] md:bg-[red]">
      <div className="aspect-[430/72] md:w-[75%] xl:w-[45%] w-[90%] items-center flex flex-row text-[7.5vw] md:text-[3vw]">
        More
      </div>
      <div className="aspect-[430/252] md:w-[75%] xl:w-[45%] w-[90%] flex flex-col justify-between items-center">
        <div className="aspect-[1/1] w-[23.2%] bg-greydef rounded-[10%/10%]">
          <Image src={profile.image} alt="profile" fill />
        </div>
        <div className="aspect-[430/73] w-full flex flex-col items-center text-center">
          <div className="text-[4vw] md:text-[2.8vw] xl:text-[1.8vw] font-semibold">
            {profile.fullName}
          </div>
          <div className="text-[2.5vw] md:text-[2.1vw] xl:text-[1.1vw]">
            {profile.userName}
          </div>
          <div className="text-[3vw] md:text-[2.4vw] xl:text-[1.3vw] font-semibold">
            {profile.place}
          </div>
        </div>
        <button className="aspect-[125/34] w-[29%] rounded-[3%/10%] bg-greenYellow text-[2.5vw] md:text-[1.9vw] xl:text-[1.15vw] items-center active:bg-[green] justify-center flex font-semibold">
          Switch Account
        </button>
      </div>
    </div>
  );
};

export default Profile;
