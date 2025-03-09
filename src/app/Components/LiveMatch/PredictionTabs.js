// "use client";
// import { useState } from "react";
// import CardComponent from "../Home/CardComponet";
// import BatsmanComponent from "../Home/Batsman";

// // Alag-alag pages ka content (Jaise aapke existing pages honge)
// const OverallContent = () => (
//   <div>
//     <h2 className="text-lg font-bold">Overall Prediction</h2>
//     {/* <p>This is the overall prediction content.</p> */}
//     <CardComponent/>
//   </div>
// );

// const PredictionSA = () => (
//   <div>
//     <h2 className="text-lg font-bold">Prediction on South Africa</h2>
//     <p>Details about South Africa's chances in the match.</p>
//   </div>
// );

// const PredictionNZ = () => (
//   <div>
//     <h2 className="text-lg font-bold">Prediction on New Zealand</h2>
//     {/* <p>Details about New Zealand's chances in the match.</p> */}
//     <BatsmanComponent/>
//   </div>
// );

// const PredictionTabs = () => {
//   const [activeTab, setActiveTab] = useState("overall");

//   return (
//     <div className="w-full max-w-md mx-auto p-4 text-white">
//       <p className="text-sm mb-2">Make your prediction on NZ vs SA match!</p>

//       {/* Tab buttons */}
//       <div className="flex border-b border-gray-600">
//         {["overall", "sa", "nz"].map((tab) => (
//           <button
//             key={tab}
//             className={`flex-1 text-center py-2 transition-all ${
//               activeTab === tab
//                 ? "border-b-2 border-white font-semibold text-white"
//                 : "text-gray-400 hover:text-white"
//             }`}
//             onClick={() => setActiveTab(tab)}
//           >
//             {tab === "overall"
//               ? "Overall"
//               : tab === "sa"
//               ? "Prediction on SA"
//               : "Prediction on NZ"}
//           </button>
//         ))}
//       </div>

//       {/* Tab content (Different pages ka content yahan load hoga) */}
//       <div className="mt-4">
//         {activeTab === "overall" && <OverallContent />}
//         {activeTab === "sa" && <PredictionSA />}
//         {activeTab === "nz" && <PredictionNZ />}
//       </div>
//     </div>
//   );
// };

// export default PredictionTabs;

// "use client";
// import { useState } from "react";
// import CardComponent from "../Home/CardComponet";
// import BatsmanComponent from "../Home/Batsman";

// const PredictionTabs = () => {
//   const [activeTab, setActiveTab] = useState("overall");

//   return (
//     <div className="w-full   p-4 text-white">
//       <p className="text-sm mb-2 text-gray-400">
//         Make your own prediction on NZ vs SA match!
//       </p>

//       {/* Tabs with Full Width & Spacing */}
//       <div className="flex justify-between gap-2 border-b border-gray-600">
//         {[
//           { key: "overall", label: "Overall" },
//           { key: "sa", label: "Prediction on SA"  },
//           { key: "nz", label: "Prediction on NZ" },
//         ].map(({ key, label }) => (
//           <button
//             key={key}
//             className={`flex-1  py-1 text-sm font-bold transition-all ${
//               activeTab === key
//                 ? "font-bold text-white border-white"
//                 : "text-gray-500 hover:text-white"
//             }`}
//             onClick={() => setActiveTab(key)}
//           >
//             {label}
//           </button>
//         ))}
//       </div>

//       {/* Tab Content */}
//       <div className="mt-4 text-gray-300">
//         {activeTab === "overall" && <CardComponent/>}
//         {activeTab === "sa" && <BatsmanComponent/>}
//         {activeTab === "nz" && <CardComponent/>}
//       </div>
//     </div>
//   );
// };

// export default PredictionTabs;


"use client";
import { useState } from "react";
import CardComponent from "../Home/CardComponet";
import BatsmanComponent from "../Home/Batsman";

const PredictionTabs = () => {
  const [activeTab, setActiveTab] = useState("overall");

  return (
    <div className="w-full  p-3 mt-5  text-white">
      <p className="text-xs mb-2 font-light text-gray-400">
        Make your own prediction on NZ vs SA match!
      </p>

      {/* Tabs aligned to start */}
      <div className="flex justify-start font-normal gap-x-5 mt-4">
        {[
          { key: "overall", label: "Overall" },
          { key: "sa", label: "Prediction on SA" },
          { key: "nz", label: "Prediction on NZ" },
        ].map(({ key, label }) => (
          <button
            key={key}
            className={`text-center py-1 text-sm font-normal transition-all ${
              activeTab === key
                ? "font-bold text-white border-white"
                : "text-gray-500 hover:text-white"
            }`}
            onClick={() => setActiveTab(key)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4 text-gray-300">
        {activeTab === "overall" && <CardComponent />}
        {activeTab === "sa" && <BatsmanComponent />}
        {activeTab === "nz" && <CardComponent />}
      </div>
    </div>
  );
};

export default PredictionTabs;
