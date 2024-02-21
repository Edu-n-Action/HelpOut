import Navbar from "@/components/homepage/navbar/Navbar";
import PersonalHomepage from "@/components/homepage/personalHomepage";

const Home = async () => {
  
  return (
    <div className="w-full h-fit">
      {" "}
      <Navbar community={false} />
      <PersonalHomepage />
    </div>
  );
};

export default Home;
