// import Image from "next/image";
// import PredictionChart from "./PredictionChart";
// import ActivityList from "./ActivityList";
// import AboutEvent from "./AboutEvent";
// import EventHeader from "../LiveMatch/EventHeader";



// const PredictionHome = () => {
//   return (
//    <>
//   <div className="mx-auto items-center justify-center w-[442px] p-4 bg-[#0f0f0f]  container">
//     <EventHeader/>
//     <PredictionChart/>
//     <ActivityList/>
//     <AboutEvent/>
    
    

//   </div>
//    </>
//   );
// };

// export default PredictionHome;

// import Image from "next/image";
// import PredictionChart from "./PredictionChart";
// import ActivityList from "./ActivityList";
// import AboutEvent from "./AboutEvent";
// import EventHeader from "../LiveMatch/EventHeader";

// const PredictionHome = () => {
//   return (
//     <>
//       <div 
//         className="mx-auto items-center justify-center w-[442px] p-4 container bg-cover bg-center"
//         style={{ backgroundImage: "url('/Image/Group 1000005858.png')" }}>
//         <EventHeader />
//         <PredictionChart />
//         <ActivityList />
//         <AboutEvent />
//       </div>
//     </>
//   );
// };

// export default PredictionHome;


import Image from "next/image";
import PredictionChart from "./PredictionChart";
import ActivityList from "./ActivityList";
import AboutEvent from "./AboutEvent";
import EventHeader from "../LiveMatch/EventHeader";
import PredctionButton from "./PredctionButton ";

const PredictionHome = () => {
  return (
    <>
      <div 
        className="relative  p-4 container bg-cover bg-center 
        mx-auto items-center justify-center w-[442px] bg-[#141414]  "
        style={{ backgroundImage: "url('/Image/Group 1000005858.png')" }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10">
          <EventHeader />
          <PredictionChart />
          <PredctionButton/>
          {/* <ActivityList />
          <AboutEvent /> */}
        </div>
      </div>
    </>
  );
};

export default PredictionHome;
