"use client";
import Image from "next/image";
import PredictionChart from "./PredictionChart";
import EventHeader from "../LiveMatch/EventHeader";
import PredctionButton from "./PredctionButton ";

const PredictionHome = () => {
  return (
    <div
      className="relative p-4 mx-auto w-[440px] bg-[#141414] bg-cover bg-center"
      style={{ backgroundImage: "url('/Image/Group 1000005858.png')" }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10">
        <EventHeader />
        <PredictionChart />
        <PredctionButton/>
      </div>
    </div>
  );
};

export default PredictionHome;

