import Image from "next/image";

const EventTask = ({
  eventItem = {
    id: "123",
    header: "",
    title: "Mengajar Kampung Pemulung Yogyakarta",
    start: "12 Februari 2023",
    role: "Member",
    finished: true,
  },
}) => {
  return (
    <div className="aspect-[387/144] z-20 w-[90%] bg-greydef flex justify-center items-center rounded-[4%/8%] shadow-xl text-greysecond">
      <div className="aspect-[387/141] w-[99.2%] bg-back rounded-[4%/8%] flex flex-col justify-between py-[2.5%] items-center">
        <div className="aspect-[367/73] w-[95%] bg-greydef rounded-[3%/10%]">
          {eventItem.header !== "" && (
            <Image src={header} alt={"Header"} fill />
          )}
        </div>
        <div className="aspect-[367/42] w-[95%] flex flex-row justify-between">
          <div className="aspect-[249.55/42] w-[68%] flex flex-col">
            <div className="w-full aspect-[249/23] text-[3.2vw] md:text-[1.066vw] font-semibold truncate">
              {eventItem.title}
            </div>
            <div className="w-full aspect-[249/15] text-[2.7vw] md:text-[0.9vw] truncate">
              {eventItem.start}
            </div>
          </div>
          <div className="aspect-[110/42] w-[30%] text-center flex flex-col justify-around items-center text-[3vw] md:text-[1vw]">
            <div className="aspect-[110/20] w-full bg-grey flex items-end justify-center">
              {eventItem.role}
            </div>
            <button className="aspect-[72/20] w-[66%] rounded-[3%/14%] bg-greenYellow active:bg-[lightgreen] flex items-center justify-center">
              Check
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventTask;
