
import Image from "next/image";

import EventHeader from "../LiveMatch/EventHeader";
import BettingBid from "./BettingBid";

const BidHome = () => {
  return (
    <>
    <div className="mx-auto items-center justify-center w-[442px] p-4 bg-[#3C3C3C] container">
      {/* <div 
        className="relative mx-auto items-center justify-center w-[442px] p-4 container bg-cover bg-center"
        style={{ backgroundImage: "url('/Image/Group 1000005858.png')" }}
      > */}
        {/* <div className="absolute inset-0 bg-black/50"></div> */}

        {/* Content */}
        <div className="relative z-10">
          <EventHeader />
          <BettingBid/>
          {/* <ActivityList />
          <AboutEvent /> */}
        </div>
      {/* </div> */}
      </div>
    </>
  );
};

export default BidHome;
