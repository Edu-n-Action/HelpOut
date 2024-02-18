import Image from "next/image";

const Donate = ({
  data = {
    qr: "",
    account: "12i12312301209",
  },
  setStep = () => {},
  step = 0,
}) => {
  return (
    <div className="relative w-full min-h-fit bg-back">
      <div className="relative aspect-[430/932] md:aspect-[1280/720] w-full flex flex-col justify-start md:justify-evenly pt-[3%] items-center gap-[2%] bg-back">
        <div className="hidden md:inline absolute md:aspect-[1440/465] w-[100%] bottom-0 z-0">
          <Image srcset={"/ornaments/wavy-low-deks.svg"} alt={"wave"} fill />
        </div>
        <div className="inline md:hidden absolute aspect-[430/550] w-full bottom-0 z-0">
          <Image srcset={"/ornaments/wave-mobile-2.svg"} alt={"wave"} fill />
        </div>
        <div className="w-[70%] h-fit pl-[2%] md:pl-[1%] rounded-[3%/10%] md:rounded-[1%/17%] text-wrap text-[6vw] md:mt-0 mt-[7%] md:text-[3vw] font-semibold text-greenYellow bg-greyprime">
          Lets Help Together. For the better future
        </div>
        <div className="relative z-2 md:bg-transparent md:bottom-0 text-[2.8vw] font-semibold md:top-0 md:my-auto px-[4%] flex flex-col md:flex-row justify-center items-center md:items-baseline md:justify-between aspect-[430/700] md:aspect-[1267/640] w-[90%] z-2">
          <div className="aspect-[458/640] w-[80%] md:w-[36%] flex flex-col justify-start gap-[3%] items-center md:items-start">
            <div className="text-[4.5vw] md:text-[2.4vw] aspect-[339/360] flex flex-col justify-between items-center md:items-baseline w-[90%]">
              <div>Scan Here</div>
              <div className="aspect-[1/1] w-[90%] bg-greydef rounded-[5%]">
                {data.qr != "" && <Image src={data.qr} alt={""} fill />}
              </div>
            </div>
            <div className="hidden md:flex text-[4vw] md:text-[1.8vw]">or</div>
            <div className="text-[4.5vw] mt-[7%] md:mt-0 md:text-[2.4vw] aspect-[336/90] flex flex-col items-center md:items-baseline justify-between w-[90%]">
              <div>Transfer Here</div>
              <div className="aspect-[366/46] w-full bg-greydef rounded-[2%/8%] flex justify-center items-center">
                <div className="aspect-[366/42] w-[98%] bg-back rounded-[2%/8%] flex justify-center items-center">
                  <div className="text-[2.6vw] md:text-[1.2vw]">
                    {data.account}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="aspect-[458/350] md:aspect-[458/640] w-[80%] md:w-[36%] flex flex-col justify-between md:justify-start md:gap-[6%]">
            <div className="aspect-[479/80] w-full flex flex-col gap-[0%]">
              <div className="text-[3.5vw] md:text-[1.5vw]">Nama</div>
              <div className="relative w-full text-[2.3vw] md:text-[1vw] aspect-[379/40] rounded-[2%/12%] bg-greydef flex justify-center items-center">
                <div className="aspect-[1/1] w-[4%] absolute top-0 bottom-0 my-auto right-[3%]">
                  <Image src={"/icon/pen.svg"} alt={"pen"} fill />
                </div>
                <input
                  className="w-[99%] aspect-[379/36] rounded-[2%/12%] pl-[2%] pr-[8%] outline-0"
                  placeholder={"Masukkan Nama"}
                  type={"text"}
                />
              </div>
            </div>
            <div className="aspect-[479/80] w-full flex flex-col gap-[0%]">
              <div className="text-[3.5vw] md:text-[1.5vw]">Jumlah Donasi</div>
              <div className="relative w-full text-[2.3vw] md:text-[1vw] aspect-[379/40] rounded-[2%/12%] bg-greydef flex justify-center items-center">
                <div className="aspect-[1/1] w-[4%] absolute top-0 bottom-0 my-auto right-[3%]">
                  <Image src={"/icon/pen.svg"} alt={"pen"} fill />
                </div>
                <input
                  className="w-[99%] aspect-[379/36] rounded-[2%/12%] pl-[2%] pr-[8%] outline-0"
                  placeholder={"Masukkan Jumlah Donasi"}
                  type={"text"}
                />
              </div>
            </div>
            <button
              onClick={() => setStep(step + 1)}
              className="aspect-[336/50] font-normal text-[4.2vw] md:text-[2vw] rounded-[2%/15%] active:bg-[lightgreen] w-full bg-greenYellow"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
