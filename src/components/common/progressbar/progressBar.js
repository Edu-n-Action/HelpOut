const ProgressBar = ({
  title = "Title",
  subtitle = "",
  finished = 21,
  total = 30,
}) => {
  let percentage = (finished / total) * 100;
  return (
    <div className="aspect-[387/120] w-full flex flex-col justify-between bg-greysecond pl-[5%] pt-[7%] pb-[1%] text-[white] rounded-[5%/15%]">
      <div className="relative aspect-[348/40] w-[90%]">
        <div className="aspect-[348/17] w-full text-[5.5vw] md:text-[1.83vw] font-semibold mb-[-2%]">
          {title}
        </div>
        {subtitle !== "" && (
          <div className="pr-[5%] aspect-[348/19] w-full flex flex-row justify-between text-[3vw] md:text-[1vw]">
            <div>{subtitle}</div>
            <div>
              {finished}/{total}
            </div>
          </div>
        )}
      </div>
      {subtitle !== "" && (
        <div className="aspect-[332/19] w-[88%] mb-[3%] bg-greydef">
          <div
            className={"h-full bg-greenYellow"}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      )}
      {subtitle === "" && (
        <div className="aspect-[348/40] mb-[3%] w-[90%] text-[2.7vw] md:text-[0.9vw]">
          <div className="aspect-[348/21] w-full pl-[1%]">
            {finished}/{total}
          </div>
          <div className="aspect-[348/19] w-full bg-greydef">
            <div
              className={"h-full bg-greenYellow"}
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
