// "use client";

// import { PieChart, Pie, Cell } from "recharts";
// import Image from "next/image";

// const data = [
//   { name: "Yes", value: 68, color: "#2563eb" }, // Blue
//   { name: "No", value: 32, color: "#dc2626" },  // Red
// ];

// export default function PredictionChart() {
//   return (
//     <div className="relative w-full min-h-screen bg-cover bg-center flex flex-col items-center justify-center " >
      
//       {/* Flags and Match Info */}
//       <div className="flex items-center gap-3 mb-4">
//   {/* South Africa Section */}
//   <div className="flex flex-col items-center">
//     <Image src="/Image/image 9 (1).png" alt="South Africa Flag" width={40} height={25} />
//     <span className="text-white text-sm mt-1">SA</span>
//   </div>

//   {/* VS Text */}
//   <h2 className="text-xl font-semibold text-white">V/S</h2>

//   {/* New Zealand Section */}
//   <div className="flex flex-col items-center">
//     <Image src="/Image/image 10.png" alt="New Zealand Flag" width={40} height={25} />
//     <span className="text-white text-sm mt-1">NZ</span>
//   </div>
// </div>


//       {/* Prediction Info */}
//       <div className="relative z-10 text-white text-center">
//       <div className="mb-4 bg-[#333333] font-light text-xs px-4 py-2 rounded-xl">H2H Last 5 ODI SA: 02, NZ: 03, Draw:0</div>

//         <div className="mb-4 font-normal text-sm">South Africa to win the 2nd Semi-Final vs New Zealand?</div>

//         {/* Betting Information */}
//         <div className="flex justify-between items-center gap-6 bg-[#333333] px-6 py-3 rounded-2xl mb-6">
//   <div className="text-center">
//     <p className="text-white text-[16px] font-normal">Most Predictions</p>
//     <p className="text-blue-400 text-2xl font-normal">Yes 68%</p>
//   </div>
 
//   <div className="text-center">
//     <p className="text-white text-sm">Least Predictions</p>
//     <p className="text-[#F35959] text-2xl font-Normal">No 32%</p>
//   </div>
// </div>


//         {/* Pie Chart */}
//         <div className="justify-center text-center">
//             <div className="font-medium text-lg">Prediction chart</div>
//         <PieChart width={250} height={250} className="mx-auto">
//           <Pie
//             data={data}
//             cx="50%"
//             cy="50%"
//             innerRadius={50}
//             outerRadius={100}
//             paddingAngle={5}
//             dataKey="value"
//           >
//             {data.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={entry.color} />
//             ))}
//           </Pie>
//         </PieChart>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { PieChart, Pie, Cell } from "recharts";
import Image from "next/image";

const data = [
  { name: "Yes", value: 68, color: "#1861e0" }, // Blue
  { name: "No", value: 32, color: "#92bfff" }, // Red
];

export default function PredictionChart() {
  return (
    <div className="relative w-full min-h-screen bg-cover bg-center flex flex-col items-center justify-center">
      
      {/* Flags and Match Info */}
      <div className="flex items-center gap-3 mb-4 mt-5">
        {/* South Africa Section */}
        <div className="flex flex-col items-center">
          <Image src="/Image/image 9 (1).png" alt="South Africa Flag" width={40} height={25} />
          <span className="text-white text-sm mt-1">SA</span>
        </div>

        {/* VS Text */}
        <h2 className="text-xl font-semibold text-white">V/S</h2>

        {/* New Zealand Section */}
        <div className="flex flex-col items-center">
          <Image src="/Image/image 10.png" alt="New Zealand Flag" width={40} height={25} />
          <span className="text-white text-sm mt-1">NZ</span>
        </div>
      </div>

      {/* Prediction Info */}
      <div className="relative z-10 text-white text-center">
        
        {/* H2H Last 5 ODI */}
        <div className="mb-2 font-light text-xs">
  <span className="bg-[#606060] text-white px-4 py-2 rounded-lg">
    H2H Last 5 ODI SA: 02, NZ: 03, Draw: 0
  </span>
</div>


        {/* Match Question */}
        <div className="mb-4 font-normal text-sm p-4 mt-2">
          South Africa to win the 2nd Semi-Final vs New Zealand?
        </div>

        {/* Betting Information */}
        <div className="flex justify-between items-center gap-6 bg-[#333333] px-6 py-3 rounded-2xl mb-6">
          <div className="text-center">
            <p className="text-white text-[16px] font-normal">Most Predictions</p>
            <p className="text-blue-400 text-2xl font-normal">Yes 68%</p>
          </div>

          <div className="text-center">
            <p className="text-white text-sm">Least Predictions</p>
            <p className="text-[#F35959] text-2xl font-normal">No 32%</p>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="border-none outline-none">
  <PieChart width={250} height={250} className="mx-auto">
    <Pie
      data={data}
      cx="50%"
      cy="50%"
      innerRadius={50}
      outerRadius={100}
      paddingAngle={5}
      dataKey="value"
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={entry.color} />
      ))}
    </Pie>
  </PieChart>
</div>

      </div>
    </div>
  );
}
