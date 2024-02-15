import FormDonation from "./formDonation";

const CreateDonation = () => {
  const submit = () => {};
  return (
    <div className="flex flex-col justify-center font-poppins font-normal items-center min-h-[100vh] bg-back">
      <div className="w-[100%] md:w-[45%] ld:w-[35%] flex flex-col aspect-[430/932] justify-between">
        <div className="w-[100%] aspect-[430/788] pt-[10%] flex flex-col items-center justify-around">
          <h1 className="aspect-[430/50] w-[90%] text-[7.5vw] md:text-[3vw] text-product text-left">
            Make a Donation
          </h1>

          <div className="aspect-[379/688] w-[88.13%]">
            <FormDonation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateDonation;
