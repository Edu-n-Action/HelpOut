import numberWithCommas from "@/const/formatNumber";
import Image from "next/image";

const DonationTask = ({
  donationItem = {
    id: "123",
    header: "",
    title: "Mengajar Kampung Pemulung Yogyakarta",
    start: "12 Februari 2023",
    received: 12000000,
    require: 24000000,
    finished: true,
  },
}) => {
  let percentage = (donationItem.received / donationItem.require) * 100;
  return (
    <div className="aspect-[387/187] z-20 w-[90%] bg-greydef flex justify-center items-center rounded-[4%/8%] shadow-xl text-greysecond">
      <div className="aspect-[387/141] w-[99.2%] bg-back rounded-[4%/8%] flex flex-col justify-between py-[2.5%] items-center">
        <div className="aspect-[367/73] w-[95%] bg-greydef rounded-[3%/10%]">
          {donationItem.header !== "" && (
            <Image src={header} alt={"Header"} fill />
          )}
        </div>
        <div className="aspect-[367/42] w-[95%] flex flex-row justify-between">
          <div className="aspect-[249.55/42] w-[68%] flex flex-col">
            <div className="w-full aspect-[249/23] text-[3.2vw] md:text-[1.066vw] mt-[2%] font-semibold truncate">
              {donationItem.title}
            </div>
            <div className="w-full aspect-[249/15] text-[2.7vw] md:text-[0.9vw] truncate">
              {donationItem.start}
            </div>
          </div>
        </div>
        <div className="aspect-[367/42] w-[95%] text-center flex flex-row justify-between items-end text-[3vw] md:text-[1vw]">
          <div className="aspect-[280/40] w-[72%] rounded-[6%/10%] active:bg-[lightgreen] flex flex-col items-center justify-center">
            <div className="aspect-[280/17] w-[100%] font-semibold text-left">
              {numberWithCommas(donationItem.received)}/
              {numberWithCommas(donationItem.require)}
            </div>
            <div className="aspect-[280/17] w-[100%] bg-greydef">
              <div
                className="h-full bg-greyprime"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
          </div>
          <button className="aspect-[77/35] w-[20.9%] rounded-[6%/10%] bg-greenYellow active:bg-[lightgreen] flex items-center justify-center">
            Check
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationTask;
