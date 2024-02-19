import Navbar from "@/components/homepage/navbar/Navbar";
import Content from "./content";

const Profile = () => {
  return (
    <div className="w-full h-fit min-h-screen bg-back flex flex-col items-center">
      <Navbar community={false} />
      <Content />
    </div>
  );
};

export default Profile;
