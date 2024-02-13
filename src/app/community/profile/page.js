import { Button, Input, ButtonGroup } from "@nextui-org/react";
import Image from "next/image";

const Profile = () => {
  return (
    <div className="flex flex-col justify-center font-poppins font-normal items-center min-h-[100vh] bg-back">
      <div className="w-[100%] md:w-[35%] flex flex-col aspect-[430/932] justify-between">
        <div className="w-[100%] aspect-[430/930] pt-[20%] flex flex-col items-center justify-around">
          <h1 className="text-[7.5vw] md:text-[3vw] text-product text-center">
            Create Profile
          </h1>
          <div className="aspect-[387/230] w-[90%] flex flex-col justify-between">
            <div className="aspect-[387/100] w-[100%]">
              <div className="text-[4vw] md:text-[1.2vw]">Add Header</div>
              <div className="bg-greydef aspect-[387/80] rounded-[4%/16%]">
                <Button>tes</Button>
              </div>
            </div>
            <div className="aspect-[387/100] w-[100%]">
              <div className="text-[4vw] md:text-[1.2vw]">Add Profile</div>
              <div className="bg-greydef aspect-[80/80] w-[20%] rounded-[16%/16%]">
                <Button>tes</Button>
              </div>
            </div>
          </div>
          <div className="aspect-[387/400] w-[90%] flex flex-col justify-between">
            <div className="aspect-[387/50] w-[100%]">
              <div className="aspect-[387/21] w-full text-[4vw] md:text-[1.6vw] font-bold">
                Name
              </div>
              <div className="relative aspect-[387/29] w-full text-[1.3vw] font-bold">
                <div className="absolute right-[1%] top-0 bottom-0 my-auto aspect-[1/1] w-[4.5%]">
                  <Image src={"/icon/pen.svg"} alt={"pen"} fill />
                </div>
                <input
                  name="myName"
                  className="w-full h-full rounded-[2%/8%] text-[3vw] md:text-[1vw] font-normal pl-[2%]"
                  placeholder="Masukan nama"
                />
              </div>
            </div>
            <div className="aspect-[387/50] w-[100%]">
              <div className="aspect-[387/21] w-full text-[4vw] md:text-[1.6vw] font-bold">
                Location
              </div>
              <div className="relative aspect-[387/29] w-full text-[1.3vw] font-bold">
                <div className="absolute right-[1%] top-0 bottom-0 my-auto aspect-[1/1] w-[4.5%]">
                  <Image src={"/icon/pen.svg"} alt={"pen"} fill />
                </div>
                <input
                  name="myLocation"
                  className="w-full h-full rounded-[2%/8%] text-[3vw] md:text-[1vw] font-normal pl-[2%]"
                  placeholder="Masukan lokasi"
                />
              </div>
            </div>
            <div className="aspect-[387/250] w-[100%]">
              <div className="aspect-[387/21] w-full text-[4vw] md:text-[1.6vw] font-bold">
                Bio
              </div>
              <div className="relative aspect-[387/221] w-full text-[1.3vw] font-bold">
                <div className="absolute right-[1%] top-0 bottom-0 my-auto aspect-[1/1] w-[4.5%]">
                  <Image src={"/icon/pen.svg"} alt={"pen"} fill />
                </div>
                <input
                  name="myBio"
                  className="w-full h-full rounded-[2%/2%] text-[3vw] md:text-[1vw] font-normal pl-[2%]"
                  placeholder="Masukan bio"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-between aspect-[430/55] w-[90%]">
            <div className="bg-greydef aspect-[200/55] w-[48%] bg-[greenYellow] rounded-[2%/5%] text-[4vw] md:text-[2vw] font-semibold flex justify-center items-center">
              <Button>Save</Button>
            </div>
            <div className="bg-greydef border-[1px] border-[black] rounded-[2%/5%] aspect-[200/55] font-semibold text-[4vw] md:text-[2vw] w-[48%] flex justify-center items-center">
              <Button>Discard</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
