import FormEvent from "./formEvent";
import HandleCreateEvent from "./handleCreateEvent";

const CreateEvent = () => {
  const submit = () => {};
  return (
    <div className="flex flex-col justify-start py-[10%] md:py-[3%] w-[100%] min-h-[100vh] font-poppins font-normal items-center bg-back">
      <div className="w-[100%] md:w-[45%] flex flex-col items-center justify-start">
        <HandleCreateEvent />
      </div>
    </div>
  );
};

export default CreateEvent;
