"use client";

// title = []
const MenuButton = ({ title, setValue, value }) => {
  const buttonStyle =
    `h-full rounded-[1%/3%] md:text-[1.33vw] text-[4vw] font-semibold text-center flex items-center justify-center ` +
    (title.length == 2 ? "w-[49.5%]" : "w-[33%]");
  // 0 -> unchoosen
  // 1 -> choosen
  const backgroundColor = ["#2F3A47", "#CEFD4A"];
  const fontColor = ["#CEFD4A", "#2F3A47"];
  return (
    <div className="aspect-[430/45] w-full flex flex-row justify-around">
      {title.map((item, index) => {
        return (
          <button
            key={index}
            className={`${buttonStyle}`}
            style={{
              backgroundColor: backgroundColor[Number(value == index)],
              color: fontColor[Number(value == index)],
            }}
            onClick={() => setValue(index)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default MenuButton;
