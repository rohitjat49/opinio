// const AboutEvent = () => {
//     return (
//       <div className=" text-white p-4 rounded-lg w-full ">
//         <h2 className="text-lg font-medium mb-4">About the event</h2>
  
//         {/* Top Section with Each Label & Value in a Separate Div */}
//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-gray-400">
//           <div>
//             <span className="font-normal text-lg">Trader</span>
//             <p className="text-xl font-medium text-white">56</p>
//           </div>
//           <div>
//             <span className="font-normal text-lg">Volume</span>
//             <p className="text-xl font-medium text-white">11.6k</p>
//           </div>
//           <div>
//             <span className="font-normal text-lg">Yes</span>
//             <p className="text-xl font-medium text-white">68%</p>
//           </div>
//           <div>
//             <span className="font-normal text-lg">No</span>
//             <p className="text-xl font-medium text-white">32%</p>
//           </div>
//         </div>
  
//         {/* Divider */}
//         <div className="border-t border-gray-700 my-4"></div>
  
//         {/* Time Section */}
//         <div className="text-sm text-gray-400">
//           <div>
//             <span className="font-normal text-lg">Started</span>
//             <p className="text-xl font-medium text-white">05 March 2025, 02:30 PM</p>
//           </div>
  
//           <div className="mt-4">
//             <span className="font-normal text-lg">Ending at</span>
//             <p className="text-xl font-medium text-white">05 March 2025, 09:30 PM</p>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default AboutEvent;

// import { ChevronRight } from "lucide-react";

// const AboutEvent = () => {
//   return (
//     <div className="bg-black text-white p-6 rounded-lg w-full max-w-lg mx-auto">
//       {/* About the Event Section */}
//       <h2 className="text-lg font-medium mb-4">About the Event</h2>

//       {/* Event Details (Grid) */}
//       <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-[#9D9D9D]">
//         <div>
//           <span className="font-normal text-lg">Trader</span>
//           <p className="text-xl font-medium text-white">56</p>
//         </div>
//         <div>
//           <span className="font-normal text-lg">Volume</span>
//           <p className="text-xl font-medium text-white">11.6k</p>
//         </div>
//         <div>
//           <span className="font-normal text-lg">Yes</span>
//           <p className="text-xl font-medium text-white">68%</p>
//         </div>
//         <div>
//           <span className="font-normal text-lg">No</span>
//           <p className="text-xl font-medium text-white">32%</p>
//         </div>
//       </div>

//       {/* Divider */}

//       {/* Time Section */}
//       <div className="text-sm text-[#9D9D9D]">
//         <div>
//           <span className="font-normal text-lg">Started</span>
//           <p className="text-xl font-medium text-white">05 March 2025, 02:30 PM</p>
//         </div>

//         <div className="mt-4">
//           <span className="font-normal text-lg">Ending at</span>
//           <p className="text-xl font-medium text-white">05 March 2025, 09:30 PM</p>
//         </div>
//       </div>

      
//       <div className="space-y-4">
//         {/* Overview */}
//         <div className=" pb-4 flex justify-between items-center">
//           <div>
//             <h3 className="text-sm text-[#9D9D9D]">Overview</h3>
//             <p className="text-lg font-medium">Information about event</p>
//           </div>
//           <ChevronRight className="text-white" />
//         </div>

//         {/* Source of Truth */}
//         <div className=" pb-4 flex justify-between items-center">
//           <div>
//             <h3 className="text-sm text-[#9D9D9D]">Source of truth</h3>
//             <p className="text-lg font-medium">Information about source of truth</p>
//           </div>
//           <ChevronRight className="text-white" />
//         </div>

//         {/* Rules */}
//         <div className="flex justify-between items-center">
//           <div>
//             <h3 className="text-sm text-[#9D9D9D]">Rules</h3>
//             <p className="text-lg font-medium">Terms and Conditions</p>
//           </div>
//           <ChevronRight className="text-white" />
//         </div>
//       </div>

// <div className="bg-[#333333] p-4 rounded-lg mt-4">
// <div className="flex justify-between gap-3 ">
//           <button
//             className="w-[110px] h-[45px] bg-[#D3E5FF] text-[#2A7FE8] rounded-[10px] text-sm font-medium border border-[#2A7FE8] flex items-center justify-center shadow-md"
//           >
//             Yes ₹ 4.5
//           </button>
//           <button
//             className="w-[110px] h-[45px] bg-[#FFD6D6] text-[#E92A2A] rounded-[10px] text-sm font-medium border border-[#E92A2A] flex items-center justify-center shadow-md"
//           >
//             No ₹ 4.5
//           </button>
//         </div>
//         </div>

//     </div>
//   );
// };

// export default AboutEvent;

  
import NoButton from "../../ui/NoButton";
import YesButton from "../../ui/YesButton";
import { ChevronRight } from "lucide-react";

const AboutEvent = () => {
  return (
    <div className=" text-white  rounded-lg w-full max-w-lg mx-auto space-y-6">
      {/* About the Event Section */}
      <h2 className="text-lg font-medium">About the Event</h2>

      {/* Event Details (Grid) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-[#9D9D9D]">
        {[
          { label: "Trader", value: "56" },
          { label: "Volume", value: "11.6k" },
          { label: "Yes", value: "68%" },
          { label: "No", value: "32%" },
        ].map((item, index) => (
          <div key={index} className="">
            <span className="text-lg font-normal">{item.label}</span>
            <p className="text-lg font-medium text-white">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Time Section */}
      <div className="text-sm text-[#9D9D9D] ">
        {[
          { label: "Started", value: "05 March 2025, 02:30 PM" },
          { label: "Ending at", value: "05 March 2025, 09:30 PM" },
        ].map((item, index) => (
          <div key={index} className="space-y-1">
            <span className="text-lg font-normal">{item.label}</span>
            <p className="text-lg font-medium text-white">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Overview, Source of Truth, Rules */}
      <div className="">
        {[
          { label: "Overview", description: "Information about event" },
          { label: "Source of truth", description: "Information about source of truth" },
          { label: "Rules", description: "Terms and Conditions" },
        ].map((item, index) => (
          <div key={index} className="flex justify-between items-center py-2 ">
            <div>
              <h3 className="text-sm text-[#9D9D9D]">{item.label}</h3>
              <p className="text-lg font-medium">{item.description}</p>
            </div>
            <ChevronRight className="text-white" />
          </div>
        ))}
      </div>

      {/* Buttons Section */}
      <div className="bg-[#333333] p-5 rounded-lg mt-4">
        <div className="flex justify-between gap-4">
        <YesButton/>
        <NoButton/>
        </div>
      </div>
    </div>
  );
};

export default AboutEvent;
