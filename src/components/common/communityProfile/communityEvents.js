"use client";

const CommunityEvents = ({
  eventList = [
    "Mengajar di Kampung Pemulunga",
    "Mengajar di Kampung Pemulung",
    "Mengajar di Kampung Pemulung",
  ],
}) => {
  return (
    <div className="w-[90%] flex flex-col justify-start items-center bg-back mt-[5%]">
      {eventList.length ? (
        <div className="w-full h-fit">
          <div className="w-full h-fit flex-col gap-[10%]">
            {eventList.map((item, index) => {
              return (
                <div
                  key={index}
                  className="aspect-[385/75] w-full bg-greydef rounded-[3%/15%] mb-[4%] flex flex-row justify-center items-center md:text-[1.2vw] text-[3.2vw]"
                >
                  <div className="aspect-[390/73] w-[99%] px-[4%] shadow-md bg-back rounded-[3%/15%] flex flex-col justify-center items-start md:text-[1.06vw] text-[3.2vw] gap-[4%]">
                    <div className="max-w-[80%] break-words font-semibold truncate">
                      {item}
                    </div>
                    <button className="w-[20%] bg-greenYellow">Check</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default CommunityEvents;
