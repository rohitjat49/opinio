// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";

// const bids = [
//   { put: 4.5, get: 10 },
//   { put: 9, get: 19 },
//   { put: 13.5, get: 23.5 },
//   { put: 18, get: 28 },
//   { put: 22.5, get: 32.5 },
//   { put: 28, get: 38 },
// ];

// export default function BettingUi() {
//   const [selectedBid, setSelectedBid] = useState(bids[0]);
//   const [isConfirmed, setIsConfirmed] = useState(false);

//   return (
//     <div className="min-h-screen bg-black text-white flex flex-col items-center p-4">
//       <div className="w-full max-w-md p-4 bg-gray-900 rounded-lg shadow-lg">
//         <h2 className="text-lg font-semibold">SA to win the match vs NZ?</h2>
//         <div className="mt-2 flex justify-between items-center">
//           <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">Yes ₹4.5</button>
//           <button className="px-4 py-2 bg-gray-700 text-white rounded-lg">No ₹4.5</button>
//         </div>
//         <h3 className="mt-4 text-md">Select the bid, earn seamlessly</h3>
//         <div className="mt-2 bg-gray-800 p-4 rounded-lg">
//           {bids.map((bid) => (
//             <label key={bid.put} className="flex justify-between items-center py-2 px-3 rounded-lg hover:bg-gray-700 cursor-pointer">
//               <input type="radio" name="bid" checked={selectedBid.put === bid.put} onChange={() => setSelectedBid(bid)} className="hidden" />
//               <span>₹{bid.put}</span>
//               <span>₹{bid.get}</span>
//             </label>
//           ))}
//         </div>
//         <div className="mt-4 flex justify-between items-center text-lg font-semibold">
//           <span>You’re Putting</span>
//           <span>₹{selectedBid.put}</span>
//           <span>You’ll Get</span>
//           <span>₹{selectedBid.get}</span>
//         </div>
        
//         <div className="relative mt-4 w-full bg-gray-700 rounded-full h-12 flex items-center p-2">
//           <motion.div
//             className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold cursor-pointer"
//             drag="x"
//             dragConstraints={{ left: 0, right: 160 }}
//             onDragEnd={(event, info) => {
//               if (info.point.x >= 140) {
//                 setIsConfirmed(true);
//               }
//             }}
//           >
//             ▶
//           </motion.div>
//           <span className="ml-4 text-white">Swipe for yes</span>
//         </div>
//       </div>
//       <p className="mt-4 text-gray-400">Available balance : ₹50.00</p>
//     </div>
//   );
// }

// "use client";
// import { useState } from "react";

// const bids = [
//   { put: 4.5, get: 10 },
//   { put: 9, get: 19 },
//   { put: 13.5, get: 23.5 },
//   { put: 18, get: 28 },
//   { put: 22.5, get: 32.5 },
//   { put: 28, get: 38 },
// ];

// export default function BettingUi() {
//   const [selectedBid, setSelectedBid] = useState(bids[0]);

//   return (
//     <div className="max-w-md mx-auto p-4 bg-gray-900 text-white rounded-lg shadow-lg">
//       <h2 className="text-lg font-semibold text-center">Select the bid, earn seamlessly</h2>

//       {/* Header */}
//       <div className="flex justify-between items-center py-3 border-b border-gray-700">
//         <div className="flex items-center gap-2">
//           <img src="/put-icon.png" alt="You Put" className="w-6 h-6" />
//           <span className="text-gray-400">You Put</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <img src="/get-icon.png" alt="You Get" className="w-6 h-6" />
//           <span className="text-gray-400">You Get</span>
//         </div>
//       </div>

//       {/* Bid Selection */}
//       <div className="mt-3">
//         {bids.map((bid, index) => (
//           <label
//             key={index}
//             className={`flex justify-between items-center p-3 rounded-lg cursor-pointer transition-all ${
//               selectedBid.put === bid.put
//                 ? "border-2 border-[#4989FF] bg-gray-10"
//                 : "border border-[#4989FF]"
//             }`}
//           >
//             <div className="flex items-center gap-2">
//               <input
//                 type="radio"
//                 name="bid"
//                 className="hidden"
//                 checked={selectedBid.put === bid.put}
//                 onChange={() => setSelectedBid(bid)}
//               />
//               <div
//                 className={`w-5 h-5 flex justify-center items-center rounded-full border-2 ${
//                   selectedBid.put === bid.put ? "border-[#4989FF] bg-[#4989FF]" : "border-gray-500"
//                 }`}
//               />
//               <span className="text-lg">₹{bid.put}</span>
//             </div>
//             <span className="text-lg font-semibold">₹{bid.get}</span>
//           </label>
//         ))}
//       </div>

//       {/* Bottom Section */}
//       <div className="mt-4 flex justify-between">
//         <div className="bg-gray-800 p-3 rounded-lg text-center w-1/2 mr-2">
//           <p className="text-gray-400 text-sm">You're Putting</p>
//           <p className="text-lg font-semibold">₹{selectedBid.put}</p>
//         </div>
//         <div className="bg-gray-800 p-3 rounded-lg text-center w-1/2 ml-2">
//           <p className="text-gray-400 text-sm">You'll Get</p>
//           <p className="text-lg font-semibold">₹{selectedBid.get}</p>
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";
// import { useState } from "react";

// const bids = [
//   { put: 4.5, get: 10 },
//   { put: 9, get: 19 },
//   { put: 13.5, get: 23.5 },
//   { put: 18, get: 28 },
//   { put: 22.5, get: 32.5 },
//   { put: 28, get: 38 },
// ];

// export default function BettingUi() {
//   const [selectedBid, setSelectedBid] = useState(bids[0]);

//   return (
//     <div className="max-w-md mx-auto p-4 bg-gray-900 text-white rounded-lg shadow-lg">
//       <h2 className="text-lg font-semibold text-center">Select the bid, earn seamlessly</h2>

//       {/* Header */}
//       <div className="flex justify-between items-center py-3 border-b border-gray-700">
//         <div className="flex items-center gap-2">
//           <img src="/put-icon.png" alt="You Put" className="w-6 h-6" />
//           <span className="text-gray-400">You Put</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <img src="/get-icon.png" alt="You Get" className="w-6 h-6" />
//           <span className="text-gray-400">You Get</span>
//         </div>
//       </div>

//       {/* Bid Selection */}
//       <div className="mt-3">
//         {bids.map((bid, index) => (
//           <label
//             key={index}
//             className={`flex justify-between items-center p-3 rounded-lg cursor-pointer transition-all border-2 ${
//               selectedBid.put === bid.put ? "border-[#4989FF]" : "border-transparent"
//             }`}
//           >
//             <div className="flex items-center gap-2">
//               <input
//                 type="radio"
//                 name="bid"
//                 className="hidden"
//                 checked={selectedBid.put === bid.put}
//                 onChange={() => setSelectedBid(bid)}
//               />
//               <div
//                 className={`w-5 h-5 flex justify-center items-center rounded-full border-2 ${
//                   selectedBid.put === bid.put ? "border-[#4989FF] bg-[#4989FF]" : "border-gray-500"
//                 }`}
//               />
//               <span className="text-lg">₹{bid.put}</span>
//             </div>
//             <span className="text-lg font-semibold">₹{bid.get}</span>
//           </label>
//         ))}
//       </div>

//       {/* Bottom Section */}
//       <div className="mt-4 flex justify-between">
//         <div className="bg-gray-800 p-3 rounded-lg text-center w-1/2 mr-2">
//           <p className="text-gray-400 text-sm">You're Putting</p>
//           <p className="text-lg font-semibold">₹{selectedBid.put}</p>
//         </div>
//         <div className="bg-gray-800 p-3 rounded-lg text-center w-1/2 ml-2">
//           <p className="text-gray-400 text-sm">You'll Get</p>
//           <p className="text-lg font-semibold">₹{selectedBid.get}</p>
//         </div>
//       </div>
//     </div>
//   );
// }




// "use client";
// import Image from "next/image";
// import { useState } from "react";
// import { FaArrowRight } from "react-icons/fa";

// export default function BettingUi() {
//   const [selectedBid, setSelectedBid] = useState(4.5);
//   const bidOptions = [
//     { put: 4.5, get: 10 },
//     { put: 9.0, get: 19 },
//     { put: 13.5, get: 23.5 },
//     { put: 18.0, get: 28 },
//     { put: 22.5, get: 32.5 },
//     { put: 28.0, get: 38 },
//   ];

//   return (
//     <div className="min-h-screen flex flex-col items-center bg-black text-white p-4">
      
//       {/* Match Header */}
//       <div className="w-full max-w-md ">
//         <div className="flex items-center justify-between">
//       <h2 className="text-lg font-bold">SA to win the match vs NZ?</h2>
//       <div className="flex items-center gap-2 bg-[#333333]  text-white px-2 py-1 rounded-full text-xs">
//         <span>Cricket</span>
//         <Image src="/Image/image 2.png" alt="Ball" width={16} height={16} />
//       </div>
//       </div>
    
//         <p className="text-white text-sm mt-2">Make your prediction, select either yes or no</p>
        
//         {/* Yes / No Buttons */}
//         <div className="grid grid-cols-2  mt-3 w-full">
//   <button className="bg-blue-600 text-white py-2 rounded-lg text-sm w-full">
//     Yes ₹4.5
//   </button>
//   <button className="bg-red-500 text-white py-2 rounded-lg text-sm w-full">
//     No ₹4.5
//   </button>
// </div>

//       </div>

//       {/* Bid Selection */}
//       <div className="w-full max-w-md mt-6">
//         <h3 className="text-lg font-semibold text-center">Select the bid, earn seamlessly</h3>

//         <div className="bg-gray-800 rounded-xl p-4 mt-4">
//           <div className="flex justify-between text-sm text-gray-300 px-2">
//             <span className="flex items-center gap-1">🖐️ You Put</span>
//             <span className="flex items-center gap-1">💰 You Get</span>
//           </div>

//           {/* Bid Options */}
//           <div className="mt-2 space-y-2">
//             {bidOptions.map((bid, index) => (
//               <label
//                 key={index}
//                 className={`flex items-center justify-between px-3 py-2 border rounded-lg cursor-pointer ${
//                   selectedBid === bid.put ? "border-blue-500 bg-gray-700" : "border-gray-600"
//                 }`}
//                 onClick={() => setSelectedBid(bid.put)}
//               >
//                 <div className="flex items-center gap-2">
//                   <input
//                     type="radio"
//                     name="bid"
//                     checked={selectedBid === bid.put}
//                     className="hidden"
//                   />
//                   <span className="w-4 h-4 flex items-center justify-center border border-gray-400 rounded-full">
//                     {selectedBid === bid.put && <span className="w-2 h-2 bg-blue-500 rounded-full"></span>}
//                   </span>
//                   <span className="text-white text-sm">₹{bid.put.toFixed(1)}</span>
//                 </div>
//                 <span className="text-white text-sm">₹{bid.get.toFixed(1)}</span>
//               </label>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Selected Amount Display */}
//       <div className="w-full max-w-md flex justify-between mt-4 px-4">
//         <div className="bg-gray-700 text-white px-4 py-2 rounded-lg text-center">
//           <p className="text-xs">You're Putting</p>
//           <p className="text-lg font-semibold">₹{selectedBid.toFixed(1)}</p>
//         </div>
//         <div className="bg-gray-700 text-white px-4 py-2 rounded-lg text-center">
//           <p className="text-xs">You'll Get</p>
//           <p className="text-lg font-semibold">
//             ₹{bidOptions.find((bid) => bid.put === selectedBid)?.get.toFixed(1)}
//           </p>
//         </div>
//       </div>

//       {/* Swipe Button */}
//       <div className="w-full max-w-md flex flex-col items-center mt-6">
//         <div className="bg-gray-800 w-full px-4 py-3 rounded-full flex items-center justify-between">
//           <span className="text-gray-400 text-sm">Swipe for yes</span>
//           <FaArrowRight className="text-white" />
//         </div>
//         <p className="text-gray-500 text-sm mt-2">Available balance : ₹50.0</p>
//       </div>
//     </div>
//   );
// }


"use client";
import Image from "next/image";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function BettingUi() {
  const [selectedBid, setSelectedBid] = useState(4.5);
  const [selectedOption, setSelectedOption] = useState("Yes"); // "Yes" or "No" selection

  const bidOptions = [
    { put: 4.5, get: 10 },
    { put: 9.0, get: 19 },
    { put: 13.5, get: 23.5 },
    { put: 18.0, get: 28 },
    { put: 22.5, get: 32.5 },
    { put: 28.0, get: 38 },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center  text-white p-4">
      {/* Match Header */}
      <div className="w-full max-w-md">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">SA to win the match vs NZ?</h2>
          <div className="flex items-center gap-2 bg-[#333] text-white px-2 py-1 rounded-full text-xs">
            <span>Cricket</span>
            <Image src="/Image/image 2.png" alt="Ball" width={16} height={16} />
          </div>
        </div>

        <p className="text-white text-sm mt-2">Make your prediction, select either Yes or No</p>

        {/* Yes / No Buttons */}
        <div className="grid grid-cols-2 mt-3 w-full">
          <button
            className={`py-2 rounded-lg text-sm w-full ${
              selectedOption === "Yes" ? "bg-blue-600" : "bg-[#333]"
            }`}
            onClick={() => setSelectedOption("Yes")}
          >
            Yes ₹4.5
          </button>
          <button
            className={`py-2 rounded-lg text-sm w-full ${
              selectedOption === "No" ? "bg-red-500" : "bg-[#333]"
            }`}
            onClick={() => setSelectedOption("No")}
          >
            No ₹4.5
          </button>
        </div>
      </div>

      {/* Bid Selection */}
      <div className="w-full max-w-md mt-6">
        <h3 className="text-lg font-semibold">Select the bid, earn seamlessly</h3>

        <div className="bg-[#333] rounded-xl p-4 mt-4">
        <div className="flex justify-between text-sm font-normal text-[#9D9D9D] px-2">
  {/* You Put */}
  <span className="flex flex-col items-center gap-1">
    <Image
      src="/Image/3d-hand-puts-gold-coins-money-stack.png"
      alt="You Put"
      width={50}
      height={50}
    />
    <span>You Put</span>
  </span>

  {/* You Get */}
  <span className="flex flex-col items-center gap-1">
    <Image
      src="/Image/3d-render-hand-with-money-financial-transaction (1).png"
      alt="You Get"
      width={50}
      height={50}
    />
    <span>You Get</span>
  </span>
</div>



          {/* Bid Options */}
          <div className="mt-2 space-y-2">
            {bidOptions.map((bid, index) => (
              <label
                key={index}
                className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer 
                  ${
                    selectedBid === bid.put
                      ? selectedOption === "Yes"
                        ? "border border-blue-500"
                        : "border border-red-500"
                      : "border-none"
                  }`}
                onClick={() => setSelectedBid(bid.put)}
              >
                <div className="flex items-center gap-2">
                  <input type="radio" name="bid" checked={selectedBid === bid.put} className="hidden" />
                  <span className="w-4 h-4 flex items-center justify-center border border-gray-400 rounded-full">
                    {selectedBid === bid.put && (
                      <span
                        className={`w-2 h-2 rounded-full ${
                          selectedOption === "Yes" ? "bg-blue-500" : "bg-red-500"
                        }`}
                      ></span>
                    )}
                  </span>
                  <span className="text-white text-sm">₹{bid.put.toFixed(1)}</span>
                </div>
                <span className="text-white text-sm">₹{bid.get.toFixed(1)}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Selected Amount Display */}
      <div className="w-full max-w-md flex justify-between mt-4 px-4">
        <div className="bg-[#333333] text-white px-4 py-2 rounded-lg text-center">
          <p className="text-xs">You're Putting</p>
          <p className="text-lg font-semibold">₹{selectedBid.toFixed(1)}</p>
        </div>
        <div className="bg-[#333333] text-white px-4 py-2 rounded-lg text-center">
          <p className="text-xs">You'll Get</p>
          <p className="text-lg font-semibold">
            ₹{bidOptions.find((bid) => bid.put === selectedBid)?.get.toFixed(1)}
          </p>
        </div>
      </div>

      {/* Swipe Button */}
      <div className="w-full max-w-md flex flex-col items-center mt-6">
        <div className="bg-[#333333] w-full px-4 py-3 rounded-full flex items-center justify-between">
          <span className="text-white text-sm">Swipe for Yes</span>
          <FaArrowRight className="text-white" />
        </div>
        <p className="text-white text-sm mt-2">Available balance: ₹50.0</p>
      </div>
    </div>
  );
}
