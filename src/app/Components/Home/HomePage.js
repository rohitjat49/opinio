import Image from "next/image";
import BatsmanComponent from "./Batsman";
import CardComponent from "./CardComponet";
import Matches from "./MatchCard";
import ButtonNav from "./ButtonNav";
import UserProfile from "./UserProfile";
import Host from "./Host";

const HomePage = () => {
  return (
   <>
  <div className=" mx-auto items-center justify-center w-[442px] bg-[#141414]  container">
    <UserProfile/>
    
    <Matches/>
    <Host/>
    
    {/* <BatsmanComponent/> */}
    <div className="mx-8">
    <CardComponent/>

    </div>
    <ButtonNav/>
    

  </div>
   </>
  );
};

export default HomePage;
