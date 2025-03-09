import Image from "next/image";
import PredictionChart from "./PredictionChart";
import ActivityList from "./ActivityList";
import AboutEvent from "./AboutEvent";



const PredictionHome = () => {
  return (
   <>
  <div className="mx-auto items-center justify-center w-[442px] p-4 bg-[#0f0f0f] container">
    
    <PredictionChart/>
    <ActivityList/>
    {/* <AboutEvent/> */}
    
    

  </div>
   </>
  );
};

export default PredictionHome;