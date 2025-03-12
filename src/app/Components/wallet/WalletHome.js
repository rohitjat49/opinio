"use clinet";
import React from "react";
import WalletUi from "./WalletUi";
import RecentTransactions from "./RecentTransactions";
import EventHeader from "../LiveMatch/EventHeader";

const WalletHome = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-[#333333] ">
        <div
          className="relative mx-auto w-full min-h-screen max-w-[440px] px-6 bg-cover bg-center rounded-lg flex flex-col justify-center shadow-lg"
          style={{ backgroundImage: "url('/Image/Group 1000005858.png')" }}
        >
          <div className="absolute inset-0 bg-black/50 rounded-lg"></div>

          <div className="relative z-10 text-center text-white flex flex-col justify-center h-full">
            <EventHeader />
            <WalletUi />
            <RecentTransactions />
          </div>
        </div>
      </div>
    </>
  );
};

export default WalletHome;
