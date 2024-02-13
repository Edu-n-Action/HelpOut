"use client";

import Image from "next/image";

export default function FormData(submit) {
  const data = [
    { title: "Name", type: "text", placeholder: "Masukkan nama" },
    {
      title: "Location",
      type: "text",
      placeholder: "Masukkan lokasi",
    },
  ];
  const tes = () => {};
  return (
    <form
      onSubmit={tes}
      className="flex flex-col aspect-[379/759] w-[100%] justify-around"
    >
      <div className="w-full aspect-[379/272] flex flex-col justify-between">
        <div className="aspect-[379/127] w-full">
          <div className="aspect-[379/27] text-[4.6vw] md:text-[1.2vw]">
            Add header
          </div>
          <div className="aspect-[379/100] w-full bg-greydef rounded-[3%/10%]">
            <input
              className="aspect-[379/100] w-full bg-greydef opacity-0 rounded-[3%/10%]"
              type="file"
              accept="image/jpeg, image/png, image/jpg"
            />
          </div>
        </div>
        <div className="aspect-[379/127] w-full">
          <div className="aspect-[379/27] text-[4.6vw] md:text-[1.2vw]">
            Add Profile
          </div>
          <div className="aspect-[100/100] w-[26.3%] bg-greydef rounded-[10%/10%]">
            <input
              className="aspect-[100/100] w-[100%] bg-greydef opacity-0 rounded-[10%/10%]"
              type="file"
              accept="image/jpeg, image/png, image/jpg"
            />
          </div>
        </div>
      </div>
      {data.map((item, index) => {
        return (
          <div key={index} className="w-full aspect-[379/50]">
            <div className="w-full aspect-[379/21] text-[4.8vw] md:text-[1.8vw] font-semibold">
              {item.title}
            </div>
            <div className="relative w-full aspect-[379/29]">
              {item.type != "date" ? (
                <div className="aspect-[1/1] w-[5%] absolute top-0 bottom-0 my-auto right-[2%]">
                  <Image src={"/icon/pen.svg"} alt={"pen"} fill />
                </div>
              ) : (
                <div></div>
              )}
              <input
                className="w-full aspect-[379/29] rounded-[2%/25%] pl-[2%] pr-[3%]"
                placeholder={item.placeholder}
                type={item.type}
              />
            </div>
          </div>
        );
      })}
      <div className="relative w-full aspect-[379/179]">
        <div className="w-full aspect-[379/21] text-[4.8vw] md:text-[1.8vw] font-semibold">
          Bio
        </div>
        <textarea
          className="w-full aspect-[379/155] rounded-[2%/5%] pl-[2%] pr-[10%] pt-[1%] flex justify-center"
          name="myBio"
          rows="4"
          cols="50"
          placeholder="Masukkan bio"
        ></textarea>
      </div>
      <div className="aspect-[379/60] w-[100%] flex justify-between text-[4.8vw] md:text-[2vw]">
        <input
          type="submit"
          value="Submit"
          className="bg-greenYellow rounded-[4%/10%] w-[48%] aspect-[180/60] active:bg-[lightgreen]"
        />
        <input
          type="button"
          onClick={() => {}}
          value="Discard"
          className="bg-greydef rounded-[4%/10%] w-[48%] aspect-[180/60] active:bg-[darkgrey]"
        />
      </div>
    </form>
  );
}
