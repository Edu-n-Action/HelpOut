import AddButton from "@/components/homepage/add/Addbutton";
import CommunityHomepage from "@/components/homepage/communityHomepage";
import PersonalHomepage from "@/components/homepage/communityHomepage";
import Navbar from "@/components/homepage/navbar/Navbar";

const Home = () => {
  return (
    <div className="w-full h-fit">
      {" "}
      <Navbar community={true} buttonLink="1" />
      <CommunityHomepage />
    </div>
  );
};

export default Home;
