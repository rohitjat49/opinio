import CardComponent from "../Components/Home/CardComponet";
import Matches from "../Components/Home/MatchCard";
import ButtonNav from "../Components/Home/ButtonNav"; 
import UserProfile from "../Components/Home/UserProfile";
import Host from "../Components/Home/Host";

const HomePage = () => {
  return (
    <>
      <div className="mx-auto items-center justify-center w-[442px] bg-[#141414] container">
        <UserProfile />
        <Matches />
        <Host />
        <div className="mx-8">
          <CardComponent />
        </div>
        <ButtonNav />
      </div>
    </>
  );
};

export default HomePage;
