

// "use client";
// import { useState } from "react";
// import Image from "next/image";

// import {
//   FaWallet,
//   FaChevronRight,
//   FaArrowRight,
//   FaCcVisa,
//   FaCcMastercard,
// } from "react-icons/fa";
// import { SiGooglepay, SiPhonepe, SiApplepay } from "react-icons/si";

// export default function WalletUI() {
//   const [amount, setAmount] = useState(25); // Default selected amount

//   // Input Change Handler
//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     if (value === "") {
//       setAmount(""); // Allow empty input
//     } else {
//       setAmount(Number(value));
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-[#333333] px-6">
//       <div className="relative w-full max-w-[440px] p-6 bg-[#161616] text-white rounded-xl shadow-lg">
//         {/* Header */}
//         <h2 className="flex items-center gap-2 text-lg font-semibold">
//           <FaWallet className="text-blue-500" /> Add Money
//         </h2>

//         {/* Amount Buttons */}
//         <div className="flex justify-between gap-3 mt-4">
//           {[25, 100, 500, 1000].map((value) => (
//             <button
//               key={value}
//               onClick={() => setAmount(value)}
//               className={`px-4 py-2 w-20 text-center rounded-lg transition-all ${
//                 amount === value
//                   ? "bg-blue-500 text-white"
//                   : "bg-[#333333] "
//               }`}
//             >
//               ₹{value}
//             </button>
//           ))}
//         </div>

//         {/* Custom Amount Input */}
//         <input
//           type="number"
//           placeholder="Enter other amount"
//           value={amount}
//           onChange={(e) => {
//             const value = e.target.value;
//             if (value === "" || Number(value) >= 0) {
//               setAmount(value);
//             }
//           }}
//           className="w-full mt-4 p-3  text-white rounded-lg outline-none  border-[1px] border-[#222222] text-center 
//              appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
//         />

//         {/* Payment Methods */}
//         <div className=" text-white p-5 rounded-lg w-full max-w-md mx-auto mt-4">
//       {/* Payment Methods */}
//       <div className="flex justify-between items-center pb-3 rounded-full">
//   <p className="text-sm">Choose your payment method</p>
//   <div className="flex items-center -gap-2">
//     <Image src="/Image/PhonePe.png" alt="PhonePe" width={32} height={32} className="rounded-full" />
//     <Image src="/Image/googlePay.png" alt="Google Pay" width={32} height={32} className="rounded-full" />
//     <Image src="/Image/ApplePay.png" alt="Apple Pay" width={32} height={32} className="rounded-full" />
//     <FaArrowRight className="w-4 h-4 text-gray-500 ml-2" />
//   </div>
// </div>

//       {/* Pay Via Card */}
//       <div className="flex justify-between items-center pt-3">
//         <p className="text-sm">Pay Via Card</p>
//         <div className="flex items-center gap-2">
//           <Image src="/images/visa.png" alt="VISA" width={40} height={24} />
//           <Image src="/images/mastercard.png" alt="MasterCard" width={40} height={24} />
//         </div>
//       </div>
//     </div>
//       </div>
//     </div>
//   );
// }
