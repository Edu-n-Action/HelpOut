"use client";

const MemberPresence = ({
  user = {
    attended: [
      {
        name: "Ken Bima Satria Gandasasmita",
        // role: "Hipster",
      },
      {
        name: "Polikarpus Arya Pradhanika",
        role: "Hacker",
      },
    ],
    permit: [
      {
        name: "Wafi Afdi Alfaruqqi",
        role: "Hacker",
      },
    ],
  },
}) => {
  return (
    <div className="w-[90%] flex flex-col justify-center items-center bg-back">
      {user.attended.length ? (
        <div className="w-full h-fit">
          <div className="w-full aspect-[385/60] flex items-center md:text-[1.33vw] text-[4vw] font-semibold">
            Attended
          </div>
          <div className="w-full h-fit flex-col gap-10">
            {user.attended.map((item, index) => {
              return (
                <div
                  key={index}
                  className="aspect-[385/75] w-full bg-greydef rounded-[3%/15%] mb-[4%] flex flex-row justify-center items-center md:text-[1.06vw] text-[3.2vw]"
                >
                  <div className="aspect-[390/73] w-[99%] px-[4%] shadow-md bg-back rounded-[3%/15%] flex flex-row justify-between items-center md:text-[1.06vw] text-[3.2vw]">
                    <div className="break-words">{item.name}</div>
                    {item.role && (
                      <div className="font-semibold min-w-[25%]">
                        <div>{item.role}</div>
                        <button className="md:text-[0.86vw] text-[2.6vw] font-l text-[#AEE90A]">
                          See details
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div></div>
      )}
      {user.permit.length ? (
        <div className="w-full h-fit">
          <div className="w-full aspect-[385/60] flex items-center md:text-[1.33vw] text-[4vw] font-semibold">
            Permit
          </div>
          <div className="w-full h-fit flex-col gap-10">
            {user.permit.map((item, index) => {
              return (
                <div
                  key={index}
                  className="aspect-[385/75] w-full bg-greydef rounded-[3%/15%] mb-[4%] flex flex-row justify-center items-center md:text-[1.06vw] text-[3.2vw]"
                >
                  <div className="aspect-[390/73] w-[99%] px-[4%] shadow-md bg-back rounded-[3%/15%] flex flex-row justify-between items-center md:text-[1.06vw] text-[3.2vw]">
                    <div className="break-words">{item.name}</div>
                    {item.role && (
                      <div className="font-semibold min-w-[25%]">
                        <div>{item.role}</div>
                        <button className="md:text-[0.86vw] text-[2.6vw] font-l text-[#AEE90A]">
                          See details
                        </button>
                      </div>
                    )}
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

export default MemberPresence;
