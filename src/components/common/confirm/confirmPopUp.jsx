"use client";

import Image from "next/image";

const ConfirmPopUp = ({
  message = "Are you sure want to leave?",
  name = "Komunitas Sekolah Marjinal",
  img = "",
  buttonLeft = "Leave",
  buttonLeftOnClick = () => {},
  buttonRight = "Discard",
  buttonRightOnClick = () => {},
}) => {
  return (
    <div className="absolute w-screen h-screen bg-[grey] bg-opacity-25 z-30 flex justify-center items-center">
      <div className="aspect-[376/411] w-[87.4%] md:w-[27%] rounded-[4%/3.5%] bg-back flex flex-col justify-center items-center text-center">
        <div className="aspect-[376/220] w-[100%] rounded-[4%/3.5%] bg-back flex flex-col justify-evenly items-center text-center gap-[2%]">
          <div className="text-[4.2vw] md:text-[1.4vw]">{message}</div>
          <div className="aspect-[1/1] w-[20%] bg-greydef rounded-[10%]">
            {img !== "" && <Image src={img} alt={""} fill />}
          </div>
          <div className="text-[4.8vw] md:text-[1.6vw] font-semibold">
            {name}
          </div>
          <div className="text-[2.4vw] md:text-[0.8vw] font-semibold">
            aktivitas berikut tidak bisa dikembalikan
          </div>
        </div>
        <div className="aspect-[326/57] text-[4.5vw] md:text-[1.5vw] w-[86.7%] flex flex-row justify-between">
          <button
            onClick={buttonLeftOnClick}
            className="aspect-[155/57] w-[47.5%] rounded-[5%/12%] bg-greenYellow active:bg-[lightgreen]"
          >
            {buttonLeft}
          </button>
          <button
            onClick={buttonRightOnClick}
            className="aspect-[155/57] w-[47.5%] flex justify-center items-center rounded-[5%/12%] bg-greydef"
          >
            <div className="aspect-[155/55] w-[98.5%] rounded-[5%/12%] bg-back active:bg-greydef flex justify-center items-center">
              <div>{buttonRight}</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPopUp;
