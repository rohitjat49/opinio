
// "use client";
// import Image from "next/image";
// import { useState } from "react";
// import { FaArrowRight } from "react-icons/fa";

// export default function BettingBid() {
//   const [selectedBid, setSelectedBid] = useState(4.5);
//   const [selectedOption, setSelectedOption] = useState("Yes"); // "Yes" or "No" selection

//   const bidOptions = [
//     { put: 4.5, get: 10 },
//     { put: 9.0, get: 19 },
//     { put: 13.5, get: 23.5 },
//     { put: 18.0, get: 28 },
//     { put: 22.5, get: 32.5 },
//     { put: 28.0, get: 38 },
//   ];

//   return (
//     <div className="min-h-screen flex flex-col items-center text-white p-4">
//       {/* Match Header */}
//       <div className="w-full max-w-md">
//         <div className="flex items-center justify-between mt-3">
//           <h2 className="text-sm font-medium">SA to win the match vs NZ?</h2>
//           <div className="flex items-center gap-2 bg-[#333] px-3 py-2 rounded-full text-xs">
//             <span>Cricket</span>
//             <Image src="/Image/image 2.png" alt="Ball" width={16} height={16} />
//           </div>
//         </div>

//         <p className="text-xs mt-4">Make your prediction, select either Yes or No</p>

//         {/* Yes / No Buttons */}
//         <div className="grid grid-cols-2 mt-4 w-full bg-[#333] rounded-full">
//           <button
//             className={`py-2 text-sm w-full rounded-full transition-all ${
//               selectedOption === "Yes" ? "bg-[#007bff] text-white" : "bg-[#333] text-gray-300"
//             }`}
//             onClick={() => setSelectedOption("Yes")}
//           >
//             Yes ₹4.5
//           </button>
//           <button
//             className={`py-2 text-sm w-full rounded-full transition-all ${
//               selectedOption === "No" ? "bg-[#ff4949] text-white" : "bg-[#333] text-gray-300"
//             }`}
//             onClick={() => setSelectedOption("No")}
//           >
//             No ₹4.5
//           </button>
//         </div>
//       </div>

//       {/* Bid Selection */}
//       <div className="w-full max-w-md mt-6">
//         <h3 className="text-lg font-semibold">Select the bid, earn seamlessly</h3>

//         <div className="bg-[#333] rounded-xl p-4 mt-4 shadow-[0px_0px_8.5px_4px_rgba(0,0,0,0.69)]">
//           <div className="flex justify-between text-sm font-normal text-[#9D9D9D] px-2">
//             {/* You Put */}
//             <span className="flex flex-col items-center gap-1">
//               <Image
//                 src="/Image/3d-hand-puts-gold-coins-money-stack.png"
//                 alt="You Put"
//                 width={50}
//                 height={50}
//               />
//               <span>You Put</span>
//             </span>

//             {/* You Get */}
//             <span className="flex flex-col items-center gap-1">
//               <Image
//                 src="/Image/3d-render-hand-with-money-financial-transaction (1).png"
//                 alt="You Get"
//                 width={50}
//                 height={50}
//               />
//               <span>You Get</span>
//             </span>
//           </div>

//           {/* Bid Options */}
//           <div className="mt-2 space-y-2">
//             {bidOptions.map((bid, index) => (
//               <label
//                 key={index}
//                 className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer 
//                   ${
//                     selectedBid === bid.put
//                       ? selectedOption === "Yes"
//                         ? "border border-[#007bff]"
//                         : "border border-[#ff4949]"
//                       : "border-none"
//                   }`}
//                 onClick={() => setSelectedBid(bid.put)}
//               >
//                 <div className="flex items-center gap-2">
//                   <input type="radio" name="bid" checked={selectedBid === bid.put} className="hidden" />
//                   <span className="w-4 h-4 flex items-center justify-center border border-gray-400 rounded-full">
//                     {selectedBid === bid.put && (
//                       <span
//                         className={`w-2 h-2 rounded-full ${
//                           selectedOption === "Yes" ? "bg-blue-500" : "bg-[#ff4949]"
//                         }`}
//                       ></span>
//                     )}
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
//       <div className="w-full max-w-md flex justify-between mt-4 px-4 gap-4">
//         <div className="flex-1 bg-[#333] text-white px-4 py-2 rounded-lg text-center shadow-[0_8px_15px_rgba(0,0,0,0.7)]">
//           <p className="text-sm font-medium text-[#9D9D9D]">You&apos;re Putting</p>
//           <p className="text-lg font-medium">₹{selectedBid.toFixed(1)}</p>
//         </div>
//         <div className="flex-1 bg-[#333] text-white px-4 py-2 rounded-lg text-center shadow-[0_8px_15px_rgba(0,0,0,0.7)]">
//           <p className="text-sm font-medium text-[#9D9D9D]">You&apos;ll Get</p>
//           <p className="text-lg font-medium">
//             ₹{bidOptions.find((bid) => bid.put === selectedBid)?.get.toFixed(1)}
//           </p>
//         </div>
//       </div>

//       {/* Swipe Button */}
//       <div className="w-full max-w-md flex flex-col items-center mt-6">
//         <div className="bg-[#333] w-full px-4 py-3 rounded-full flex items-center justify-between">
//           <span className="text-white text-sm">Swipe for Yes</span>
//           <FaArrowRight className="text-white" />
//         </div>
//         <p className="text-white text-sm mt-2">Available balance: ₹50.0</p>
//       </div>
//     </div>
//   );
// }


// "use client";
// import Image from "next/image";
// import { useState } from "react";
// import { FaArrowRight } from "react-icons/fa";

// export default function BettingBid() {
//   const [selectedBid, setSelectedBid] = useState(4.5);
//   const [selectedOption, setSelectedOption] = useState("Yes");

//   const bidOptions = [
//     { put: 4.5, get: 10 },
//     { put: 9.0, get: 19 },
//     { put: 13.5, get: 23.5 },
//     { put: 18.0, get: 28 },
//     { put: 22.5, get: 32.5 },
//     { put: 28.0, get: 38 },
//   ];

//   return (
//     <div className="min-h-screen flex flex-col items-center text-white p-4">
//       <div className="w-full max-w-md">
//         <div className="flex items-center justify-between mt-3">
//           <h2 className="text-sm font-medium">SA to win the match vs NZ?</h2>
//           <div className="flex items-center gap-2 bg-[#333] px-3 py-2 rounded-full text-xs">
//             <span>Cricket</span>
//             <Image src="/Image/image 2.png" alt="Ball" width={16} height={16} />
//           </div>
//         </div>
//         <p className="text-xs mt-4">Make your prediction, select either Yes or No</p>
//         <div className="grid grid-cols-2 mt-4 w-full bg-[#333] rounded-full">
//           <button
//             className={`py-2 text-sm w-full rounded-full transition-all ${
//               selectedOption === "Yes" ? "bg-[#007bff] text-white" : "bg-[#333] text-gray-300"
//             }`}
//             onClick={() => setSelectedOption("Yes")}
//           >
//             Yes ₹4.5
//           </button>
//           <button
//             className={`py-2 text-sm w-full rounded-full transition-all ${
//               selectedOption === "No" ? "bg-[#ff4949] text-white" : "bg-[#333] text-gray-300"
//             }`}
//             onClick={() => setSelectedOption("No")}
//           >
//             No ₹4.5
//           </button>
//         </div>
//       </div>
      
//       {/* Bid Selection with Inner Shadow */}
//       <div className="w-full max-w-md mt-6">
//         <h3 className="text-lg font-semibold">Select the bid, earn seamlessly</h3>
//         <div className="bg-[#333] rounded-xl p-4 mt-4 shadow-[inset_0px_5px_10px_rgba(0,0,0,0.7)]">
//           <div className="flex justify-between text-sm font-normal text-[#9D9D9D] px-2">
//             <span className="flex flex-col items-center gap-1">
//               <Image src="/Image/3d-hand-puts-gold-coins-money-stack.png" alt="You Put" width={50} height={50} />
//               <span>You Put</span>
//             </span>
//             <span className="flex flex-col items-center gap-1">
//               <Image src="/Image/3d-render-hand-with-money-financial-transaction (1).png" alt="You Get" width={50} height={50} />
//               <span>You Get</span>
//             </span>
//           </div>
//           <div className="mt-2 space-y-2">
//             {bidOptions.map((bid, index) => (
//               <label
//                 key={index}
//                 className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer ${
//                   selectedBid === bid.put ? (selectedOption === "Yes" ? "border border-[#007bff]" : "border border-[#ff4949]") : "border-none"
//                 }`}
//                 onClick={() => setSelectedBid(bid.put)}
//               >
//                 <div className="flex items-center gap-2">
//                   <input type="radio" name="bid" checked={selectedBid === bid.put} className="hidden" />
//                   <span className="w-4 h-4 flex items-center justify-center border border-gray-400 rounded-full">
//                     {selectedBid === bid.put && (
//                       <span className={`w-2 h-2 rounded-full ${selectedOption === "Yes" ? "bg-blue-500" : "bg-[#ff4949]"}`}></span>
//                     )}
//                   </span>
//                   <span className="text-white text-sm">₹{bid.put.toFixed(1)}</span>
//                 </div>
//                 <span className="text-white text-sm">₹{bid.get.toFixed(1)}</span>
//               </label>
//             ))}
//           </div>
//         </div>
//       </div>
      
//       {/* Selected Amount Display with Inner Shadow */}
//       <div className="w-full max-w-md flex justify-between mt-4 px-4 gap-4">
//         <div className="flex-1 bg-[#333] text-white px-4 py-2 rounded-lg text-center shadow-[inset_0px_4px_10px_rgba(0,0,0,0.7)]">
//           <p className="text-sm font-medium text-[#9D9D9D]">You're Putting</p>
//           <p className="text-lg font-medium">₹{selectedBid.toFixed(1)}</p>
//         </div>
//         <div className="flex-1 bg-[#333] text-white px-4 py-2 rounded-lg text-center shadow-[inset_0px_4px_10px_rgba(0,0,0,0.7)]">
//           <p className="text-sm font-medium text-[#9D9D9D]">You'll Get</p>
//           <p className="text-lg font-medium">₹{bidOptions.find((bid) => bid.put === selectedBid)?.get.toFixed(1)}</p>
//         </div>
//       </div>
      
//       {/* Swipe Button with Inner Shadow */}
//       <div className="w-full max-w-md flex flex-col items-center mt-6">
//         <div className="bg-[#333] w-full px-4 py-3 rounded-full flex items-center justify-between shadow-[inset_0px_4px_10px_rgba(0,0,0,0.7)]">
//           <span className="text-white text-sm">Swipe for Yes</span>
//           <FaArrowRight className="text-white" />
//         </div>
//         <p className="text-white text-sm mt-2">Available balance: ₹50.0</p>
//       </div>
//     </div>
//   );
// }


// "use client";
// import Image from "next/image";
// import { useState } from "react";
// import { FaArrowRight } from "react-icons/fa";

// export default function BettingBid() {
//   const [selectedBid, setSelectedBid] = useState(4.5);
//   const [selectedOption, setSelectedOption] = useState("Yes");

//   const bidOptions = [
//     { put: 4.5, get: 10 },
//     { put: 9.0, get: 19 },
//     { put: 13.5, get: 23.5 },
//     { put: 18.0, get: 28 },
//     { put: 22.5, get: 32.5 },
//     { put: 28.0, get: 38 },
//   ];

//   return (
//     <div className="min-h-screen flex flex-col items-center text-white p-4">
//       <div className="w-full max-w-md">
//         <div className="flex items-center justify-between mt-3">
//           <h2 className="text-sm font-medium">SA to win the match vs NZ?</h2>
//           <div className="flex items-center gap-2 bg-[#333] px-3 py-2 rounded-full text-xs">
//             <span>Cricket</span>
//             <Image src="/Image/image 2.png" alt="Ball" width={16} height={16} />
//           </div>
//         </div>
//         <p className="text-xs mt-4 font-light">Make your prediction, select either Yes or No</p>
//         <div className="grid grid-cols-2 my-8 w-full bg-[#333] font-medium rounded-full">
//           <button
//             className={`py-2 text-sm w-full rounded-full transition-all ${
//               selectedOption === "Yes" ? "bg-[#007bff] text-white" : "bg-[#333] text-gray-300"
//             }`}
//             onClick={() => setSelectedOption("Yes")}
//           >
//             Yes ₹4.5
//           </button>
//           <button
//             className={`py-2 text-sm w-full rounded-full transition-all ${
//               selectedOption === "No" ? "bg-[#ff4949] text-white" : "bg-[#333] text-gray-300"
//             }`}
//             onClick={() => setSelectedOption("No")}
//           >
//             No ₹4.5
//           </button>
//         </div>
//       </div>
      
//       {/* Bid Selection with Inner Shadow */}
//       <div className="w-full max-w-md mb-2">
//         <h3 className="text-lg font-semibold">Select the bid, earn seamlessly</h3>
       

// {/* <div className="bg-[#333] rounded-xl p-4 mt-4 min-h-[200px] pb-6 flex flex-col justify-between shadow-[inset_-1px_0px_1px_rgba(0,0,0,0.5),inset_1px_0px_2px_rgba(0,0,0,0.5),inset_0px_-5px_10px_rgba(0,0,0,0.9)]
// ">
//   <div className="flex justify-between text-sm font-normal text-[#9D9D9D] px-2">
//     <span className="flex flex-col items-center gap-1">
//       <Image src="/Image/3d-hand-puts-gold-coins-money-stack.png" alt="You Put" width={50} height={50} />
//       <span>You Put</span>
//     </span>
//     <span className="flex flex-col items-center gap-1">
//       <Image src="/Image/3d-render-hand-with-money-financial-transaction (1).png" alt="You Get" width={50} height={50} />
//       <span>You Get</span>
//     </span>
//   </div>

//   <div className="mt-2 space-y-2">
//     {bidOptions.map((bid, index) => (
//       <label
//         key={index}
//         className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer ${
//           selectedBid === bid.put ? (selectedOption === "Yes" ? "border border-[#007bff]" : "border border-[#ff4949]") : "border-none"
//         }`}
//         onClick={() => setSelectedBid(bid.put)}
//       >
//         <div className="flex items-center gap-2">
//           <input type="radio" name="bid" checked={selectedBid === bid.put} className="hidden" />
//           <span className="w-4 h-4 flex items-center justify-center border border-gray-400 rounded-full">
//             {selectedBid === bid.put && (
//               <span className={`w-2 h-2 rounded-full ${selectedOption === "Yes" ? "bg-blue-500" : "bg-[#ff4949]"}`}></span>
//             )}
//           </span>
//           <span className="text-white font-medium text-lg">₹{bid.put.toFixed(1)}</span>
//         </div>
//         <span className="text-white text-lg font-medium">₹{bid.get.toFixed(1)}</span>
//       </label>
//     ))}
//   </div>
// </div> */}

// <div className="bg-[#333] rounded-xl p-4 mt-4 min-h-[200px]  pb-6 flex flex-col justify-between shadow-[inset_-1px_0px_1px_rgba(0,0,0,0.5),inset_1px_0px_2px_rgba(0,0,0,0.5),inset_0px_-5px_10px_rgba(0,0,0,0.9)]
// ">
//   <div className="flex justify-between text-sm font-normal text-[#9D9D9D] px-2">
//     <span className="flex flex-col items-center gap-1">
//       <Image src="/Image/3d-hand-puts-gold-coins-money-stack.png" alt="You Put" width={50} height={50} />
//       <span>You Put</span>
//     </span>
//     <span className="flex flex-col items-center gap-1">
//       <Image src="/Image/3d-render-hand-with-money-financial-transaction (1).png" alt="You Get" width={50} height={50} />
//       <span>You Get</span>
//     </span>
//   </div>

//   <div className="mt-2 space-y-2">
//     {bidOptions.map((bid, index) => (
//       <label
//         key={index}
//         className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer ${
//           selectedBid === bid.put ? (selectedOption === "Yes" ? "border border-[#007bff]" : "border border-[#ff4949]") : "border-none"
//         }`}
//         onClick={() => setSelectedBid(bid.put)}
//       >
//         <div className="flex items-center gap-2">
//           <input type="radio" name="bid" checked={selectedBid === bid.put} className="hidden" />
//           <span className="w-4 h-4 flex items-center justify-center border border-gray-400 rounded-full">
//             {selectedBid === bid.put && (
//               <span className={`w-2 h-2 rounded-full ${selectedOption === "Yes" ? "bg-blue-500" : "bg-[#ff4949]"}`}></span>
//             )}
//           </span>
//           <span className="text-white font-medium text-lg">₹{bid.put.toFixed(1)}</span>
//         </div>
//         <span className="text-white text-lg font-medium">₹{bid.get.toFixed(1)}</span>
//       </label>
//     ))}
//   </div>
// </div>


//       </div>
      
//       {/* Selected Amount Display with Inner Shadow */}
//       <div className="w-full max-w-md flex justify-between mt-4 px-4 gap-4">
//         <div className="flex-1 bg-[#333] text-white px-4 py-2 rounded-lg text-center shadow-[inset_-1px_0px_1px_rgba(0,0,0,0.5),inset_1px_0px_2px_rgba(0,0,0,0.5),inset_0px_-5px_10px_rgba(0,0,0,0.9)]
// ">
//           <p className="text-sm font-medium text-[#9D9D9D]">You're Putting</p>
//           <p className="text-lg font-medium">₹{selectedBid.toFixed(1)}</p>
//         </div>
//         <div className="flex-1 bg-[#333] text-white px-4 py-2 rounded-lg text-center shadow-[inset_-1px_0px_1px_rgba(0,0,0,0.5),inset_1px_0px_2px_rgba(0,0,0,0.5),inset_0px_-5px_10px_rgba(0,0,0,0.9)]
// ">
//           <p className="text-sm font-medium text-[#9D9D9D]">You'll Get</p>
//           <p className="text-lg font-medium">₹{bidOptions.find((bid) => bid.put === selectedBid)?.get.toFixed(1)}</p>
//         </div>
//       </div>
      
//       {/* Swipe Button with Inner Shadow (Fixed) */}
//       <div className="w-full max-w-md flex flex-col items-center mt-6">
//         <div className="w-full p-[2px] rounded-full bg-[#222]">
//           <div className="bg-[#333] w-full px-4 py-4 rounded-full flex items-center justify-between shadow-[inset_0px_6px_15px_rgba(0,0,0,0.9)]">
//             <span className="text-white text-sm">Swipe for Yes</span>
//             <FaArrowRight className="text-white" />
//           </div>
//         </div>
//         <p className="text-white text-sm mt-2">Available balance: ₹50.0</p>
//       </div>
//     </div>
//   );
// }



"use client";
import Image from "next/image";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function BettingBid() {
  const [selectedBid, setSelectedBid] = useState(4.5);
  const [selectedOption, setSelectedOption] = useState("Yes");

  const bidOptions = [
    { put: 4.5, get: 10 },
    { put: 9.0, get: 19 },
    { put: 13.5, get: 23.5 },
    { put: 18.0, get: 28 },
    { put: 22.5, get: 32.5 },
    { put: 28.0, get: 38 },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center text-white p-4">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-between mt-3">
          <h2 className="text-sm font-medium">SA to win the match vs NZ?</h2>
          <div className="flex items-center gap-2 bg-[#333] px-3 py-2 rounded-full text-xs">
            <span>Cricket</span>
            <Image src="/Image/image 2.png" alt="Ball" width={16} height={16} />
          </div>
        </div>
        <p className="text-xs mt-4 font-light">Make your prediction, select either Yes or No</p>
        <div className="grid grid-cols-2 my-8 w-full bg-[#333] font-medium rounded-full">
          <button
            className={`py-2 text-sm w-full rounded-full transition-all ${
              selectedOption === "Yes" ? "bg-[#007bff] text-white" : "bg-[#333] text-gray-300"
            }`}
            onClick={() => setSelectedOption("Yes")}
          >
            Yes ₹4.5
          </button>
          <button
            className={`py-2 text-sm w-full rounded-full transition-all ${
              selectedOption === "No" ? "bg-[#ff4949] text-white" : "bg-[#333] text-gray-300"
            }`}
            onClick={() => setSelectedOption("No")}
          >
            No ₹4.5
          </button>
        </div>
      </div>
      
      {/* Bid Selection with Inner Shadow */}
      <div className="w-full max-w-md mb-2">
        <h3 className="text-lg font-semibold">Select the bid, earn seamlessly</h3>

        <div className="bg-[#333] rounded-xl p-4 mt-4 min-h-[200px] pb-6 flex flex-col justify-between shadow-[inset_-1px_0px_1px_rgba(0,0,0,0.5),inset_1px_0px_2px_rgba(0,0,0,0.5),inset_0px_-5px_10px_rgba(0,0,0,0.9)]">
          <div className="flex justify-between text-sm font-normal text-[#9D9D9D] px-2">
            <span className="flex flex-col items-center gap-1">
              <Image src="/Image/3d-hand-puts-gold-coins-money-stack.png" alt="You Put" width={50} height={50} />
              <span>You Put</span>
            </span>
            <span className="flex flex-col items-center gap-1">
              <Image src="/Image/3d-render-hand-with-money-financial-transaction (1).png" alt="You Get" width={50} height={50} />
              <span>You Get</span>
            </span>
          </div>

          <div className="mt-2 space-y-2">
            {bidOptions.map((bid, index) => (
              <label
                key={index}
                className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer ${
                  selectedBid === bid.put ? (selectedOption === "Yes" ? "border border-[#007bff]" : "border border-[#ff4949]") : "border-none"
                }`}
                onClick={() => setSelectedBid(bid.put)}
              >
                <div className="flex items-center gap-2">
                  <input type="radio" name="bid" checked={selectedBid === bid.put} className="hidden" />
                  <span className="w-4 h-4 flex items-center justify-center border border-gray-400 rounded-full">
                    {selectedBid === bid.put && (
                      <span className={`w-2 h-2 rounded-full ${selectedOption === "Yes" ? "bg-blue-500" : "bg-[#ff4949]"}`}></span>
                    )}
                  </span>
                  <span className="text-white font-medium text-lg">₹{bid.put.toFixed(1)}</span>
                </div>
                <span className="text-white text-lg font-medium">₹{bid.get.toFixed(1)}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
      
      {/* Selected Amount Display with Inner Shadow */}
      <div className="w-full max-w-md flex justify-between mt-4 px-4 gap-4">
        <div className="flex-1 bg-[#333] text-white px-4 py-2 rounded-lg text-center shadow-[inset_-1px_0px_1px_rgba(0,0,0,0.5),inset_1px_0px_2px_rgba(0,0,0,0.5),inset_0px_-5px_10px_rgba(0,0,0,0.9)]">
          <p className="text-sm font-medium text-[#9D9D9D]">You&apos;re Putting</p>
          <p className="text-lg font-medium">₹{selectedBid.toFixed(1)}</p>
        </div>
        <div className="flex-1 bg-[#333] text-white px-4 py-2 rounded-lg text-center shadow-[inset_-1px_0px_1px_rgba(0,0,0,0.5),inset_1px_0px_2px_rgba(0,0,0,0.5),inset_0px_-5px_10px_rgba(0,0,0,0.9)]">
          <p className="text-sm font-medium text-[#9D9D9D]">You&apos;ll Get</p>
          <p className="text-lg font-medium">₹{bidOptions.find((bid) => bid.put === selectedBid)?.get.toFixed(1)}</p>
        </div>
      </div>
      
      {/* Swipe Button with Inner Shadow (Fixed) */}
      <div className="w-full max-w-md flex flex-col items-center mt-6">
        <div className="w-full p-[2px] rounded-full bg-[#222]">
          <div className="bg-[#333] w-full px-4 py-4 rounded-full flex items-center justify-between shadow-[inset_0px_6px_15px_rgba(0,0,0,0.9)]">
            <span className="text-white text-sm">Swipe for Yes</span>
            <FaArrowRight className="text-white" />
          </div>
        </div>
        <p className="text-white text-sm mt-2">Available balance: ₹50.0</p>
      </div>
    </div>
  );
}
