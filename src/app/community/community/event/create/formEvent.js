"use client";

import Image from "next/image";
import dateData from "@/const/cdate";

export default function FormEvent(submit) {
  const data = [
    { title: "Judul", type: "text", placeholder: "Masukkan judul kegiatan" },
    {
      title: "Keterangan",
      type: "text",
      placeholder: "Masukkan penjelasan kegiatan",
    },
  ];
  const tes = () => {};
  return (
    <form
      onSubmit={tes}
      className="flex flex-col aspect-[379/788] w-[100%] justify-around"
    >
      <div className="w-full aspect-[379/272] flex flex-col justify-between">
        <div className="aspect-[379/127] w-full">
          <div className="aspect-[379/27] text-[4.8vw] md:text-[1.2vw]">
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
          <div className="aspect-[379/27] text-[4.8vw] md:text-[1.2vw]">
            Add main tumbnail
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
      <div className="relative w-full aspect-[379/210] md:aspect-[379/195] flex flex-col justify-between">
        <div className="w-full flex flex-col justify-around aspect-[379/90]">
          <div className="w-full aspect-[379/21] text-[4.8vw] md:text-[1.8vw]">
            Date Started
          </div>
          <div className="flex flex-row justify-between aspect-[379/60] w-[100%]">
            <div className="flex flex-col aspect-[120/60] w-[32%]">
              <div className="aspect-[120/27] w-[100%] text-[3.7vw] md:text-[1.5vw]">
                Day
              </div>
              <select className="aspect-[120/35] w-[100%] text-[4.2vw] md:text-[1.2vw] bg-greydef rounded-[4%/10%]">
                <option selected>hari</option>
                {dateData.day.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex flex-col aspect-[120/60] w-[32%]">
              <div className="aspect-[120/27] w-[100%] text-[3.7vw] md:text-[1.5vw]">
                Month
              </div>
              <select className="aspect-[120/35] w-[100%] text-[4.2vw] md:text-[1.2vw] bg-greydef rounded-[4%/10%]">
                <option selected>bulan</option>
                {dateData.month.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex flex-col aspect-[120/60] w-[32%]">
              <div className="aspect-[120/27] w-[100%] text-[3.7vw] md:text-[1.5vw]">
                Year
              </div>
              <select className="aspect-[120/35] w-[100%] text-[4.2vw] md:text-[1.2vw] bg-greydef rounded-[4%/10%]">
                <option selected>tahun</option>
                {dateData.year.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col justify-around aspect-[379/90]">
          <div className="w-full aspect-[379/21] text-[4.8vw] md:text-[1.8vw]">
            Date Ended
          </div>
          <div className="flex flex-row justify-between aspect-[379/60] w-[100%]">
            <div className="flex flex-col aspect-[120/60] w-[32%]">
              <div className="aspect-[120/27] w-[100%] text-[3.7vw] md:text-[1.5vw]">
                Day
              </div>
              <select className="aspect-[120/35] w-[100%] text-[4.2vw] md:text-[1.2vw] bg-greydef rounded-[4%/10%]">
                <option selected>hari</option>
                {dateData.day.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex flex-col aspect-[120/60] w-[32%]">
              <div className="aspect-[120/27] w-[100%] text-[3.7vw] md:text-[1.5vw]">
                Month
              </div>
              <select className="aspect-[120/35] w-[100%] text-[4.2vw] md:text-[1.2vw] bg-greydef rounded-[4%/10%]">
                <option selected>bulan</option>
                {dateData.month.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex flex-col aspect-[120/60] w-[32%]">
              <div className="aspect-[120/27] w-[100%] text-[3.7vw] md:text-[1.5vw]">
                Year
              </div>
              <select className="aspect-[120/35] w-[100%] text-[4.2vw] md:text-[1.2vw] bg-greydef rounded-[4%/10%]">
                <option selected>tahun</option>
                {dateData.year.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="aspect-[379/60] w-[100%] flex justify-between text-[4.8vw] md:text-[2vw]">
        <input
          type="submit"
          value="Next"
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
