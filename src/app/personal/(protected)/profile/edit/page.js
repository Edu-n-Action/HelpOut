import FormData from "./formData";

const EditProfile = ({ createOrEdit = true }) => {
  const submit = () => {};
  return (
    <div className="flex flex-col justify-center font-poppins font-normal items-center min-h-[100vh] bg-back">
      <div className="w-[100%] md:w-[35%] flex flex-col aspect-[430/788] justify-between">
        <div className="w-[100%] aspect-[430/788] pt-[20%] flex flex-col items-center justify-around">
          <h1 className="text-[7.5vw] md:text-[3vw] text-product text-center">
            {createOrEdit == true ? (
              <div>Create Profile</div>
            ) : (
              <div>Edit Profile</div>
            )}
          </h1>

          <div className="aspect-[379/609] w-[88.13%]">
            <FormData />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
