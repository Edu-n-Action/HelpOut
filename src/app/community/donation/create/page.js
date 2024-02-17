import FormDonation from "./formDonation";

const CreateDonation = () => {
  const submit = () => {};
  return (
    <div className="flex flex-col justify-center font-poppins font-normal items-center min-h-[100vh] bg-back">
      <div className="w-[100%] md:w-[45%] ld:w-[35%] flex flex-col aspect-[430/932] justify-between">
        <div className="w-[100%] aspect-[430/788] pt-[10%] flex flex-col items-center justify-around">
          <FormDonation/>
        </div>
      </div>
    </div>
  );
};

export default CreateDonation;
