"use client";

import { useState } from "react";

const ListRole = ["Ketua", "Anggota", "Sekretaris", "Bendahara"];

const RoleBlock = ({
  setPeers = () => {},
  peers = {
    name: "Salman Faiz",
    join: true,
    role: "",
    jobdesk: "",
  },
}) => {
  return (
    <div className="flex flex-col aspect-[387/75] w-[100%] justify-between text-greyprime">
      <div className="flex flex-row aspect-[387/27] justify-between w-[100%]">
        <div className="flex flex-col aspect-[241/40] w-[62%] bg-greydef justify-center shadow-lg items-center rounded-[3%/14%]">
          <div className="flex flex-row gap-[4%] aspect-[241/37] w-[98%] bg-back rounded-[3%/14%] justify-start pl-[5%] items-center">
            <div className="aspect-[1/1] w-[7%] bg-greyprime flex justify-center items-center rounded-[50%/50%]">
              <div className="aspect-[1/1] w-[89%] bg-back rounded-[50%/50%]"></div>
            </div>
            <div className="w-[80%] rounded-[50%/50%] text-[1.2vw]">
              {peers.name}
            </div>
          </div>
        </div>
        <div className="flex flex-col aspect-[140/40] text-center w-[35%] bg-greydef justify-center shadow-lg items-center rounded-[3%/14%]">
          <div className="flex flex-col text-[1vw] aspect-[120/33] text-center justify-center items-center w-[97%] bg-back rounded-[3%/14%]">
            <select className="flex flex-col text-[1vw] aspect-[100/20] text-center justify-center items-center w-[70%] bg-back rounded-[3%/14%]">
              <option defaultValue={"Anggota"}>Anggota</option>
              {ListRole.map((item, index) => {
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
      <div className="shadow-lg flex flex-row justify-center items-center aspect-[387/29] rounded-[1%/8%] w-[100%] bg-greydef">
        <input
          className="w-[99%] aspect-[387/26] rounded-[1%/10%] text-greyprime outline-0 text-[1vw] pl-[2%] pr-[3%]"
          placeholder={"Masukkan deskripsi pekerjaan"}
          type={"text"}
        />
      </div>
    </div>
  );
};

const SelectPeers = ({ setStep, step }) => {
  const [peers, setPeers] = useState(0);
  let people = [
    {
      name: "Salman Faiz",
      join: true,
      role: "",
      jobdesk: "",
    },
    {
      name: "Ken Satria",
      join: true,
      role: "",
      jobdesk: "",
    },
    {
      name: "Polikarpus Arya",
      join: true,
      role: "",
      jobdesk: "",
    },
    {
      name: "Wafi Afdi",
      join: true,
      role: "",
      jobdesk: "",
    },
  ];
  return (
    <div className="w-[100%] flex flex-col items-center justify-start">
      <h1 className="aspect-[430/50] w-[90%] text-[7.5vw] md:text-[3vw] text-product text-left text-greyprime">
        Select Peers
      </h1>

      <div className="flex flex-col justify-start bg-back h-fit w-[90%]">
        <div className="h-fit flex flex-col overflow-auto w-full gap-[15px] md:gap-[20px] mt-[3%]">
          {people.map((item, index) => {
            return <RoleBlock key={index} setPeers={setPeers} peers={item} />;
          })}
          <div className="aspect-[379/60] w-[100%] mt-[3%] flex justify-between text-[4.8vw] md:text-[2vw]">
            <button
              onClick={() => {
                // setStep(step + 1);
              }}
              className="bg-greenYellow rounded-[4%/10%] w-[48%] aspect-[180/60] active:bg-[lightgreen]"
            >
              Next
            </button>
            <button
              onClick={() => {}}
              className="bg-greydef rounded-[4%/10%] w-[48%] aspect-[180/60] active:bg-[darkgrey]"
            >
              Discard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectPeers;
