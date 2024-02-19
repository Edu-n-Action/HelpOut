import AddButton from "@/components/homepage/add/addbutton";
import CommunityHomepage from "@/components/homepage/communityHomepage";
import PersonalHomepage from "@/components/homepage/communityHomepage";
import Navbar from "@/components/homepage/navbar/Navbar";

const Home = () => {
  return (
    <div className="w-full h-fit">
      {" "}
      <AddButton />
      <Navbar community={true} />
      <CommunityHomepage />
    </div>
  );
};

export default Home;
