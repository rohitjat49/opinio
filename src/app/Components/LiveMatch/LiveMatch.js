import Image from "next/image";
import EventHeader from "./EventHeader";
import LiveScore from "./LiveScore";
import ButtonNav from "../Home/ButtonNav";
import PredictionTabs from "./PredictionTabs";
const LiveMatch = () => {
  return (
    <>
      <div className="mx-auto items-center justify-center w-[442px] p-4 bg-[#0f0f0f] container">
        <EventHeader />
        <LiveScore />
        <PredictionTabs />
        <ButtonNav />
      </div>
    </>
  );
};

export default LiveMatch;
