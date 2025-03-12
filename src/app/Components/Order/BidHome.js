
import Image from "next/image";

import EventHeader from "../LiveMatch/EventHeader";
import BettingBid from "./BettingBid";

const BidHome = () => {
  return (
    <>
    <div className="mx-auto items-center justify-center w-[442px] p-4 bg-[#3C3C3C] container">
    
        <div className="relative z-10">
          <EventHeader />
          <BettingBid/>
         
        </div>
      </div>
    </>
  );
};

export default BidHome;
