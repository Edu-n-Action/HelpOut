import EventProfile from "@/components/common/eventProfile/eventProfile";
import Menu from "./menu";

const EventHome = () => {
  return (
    <div className="w-full h-fit bg-back flex flex-col items-center">
      <div className="w-full md:w-[33%] bg-back">
        <EventProfile />

        <div className="w-full bg-back">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default EventHome;
