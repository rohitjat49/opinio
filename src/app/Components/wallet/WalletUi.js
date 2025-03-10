// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import { FaWallet, FaChevronRight, FaCcVisa, FaCcMastercard } from "react-icons/fa";
// import { SiGooglepay, SiPhonepe, SiApplepay } from "react-icons/si";

// export default function WalletUI() {
//   const [amount, setAmount] = useState("");

//   return (
//     <>
//       <div className="flex items-center justify-center min-h-screen bg-[#333333] px-6">
//         <div
//           className="relative mx-auto w-full max-w-[440px] min-h-screen px-8 py-10 bg-cover bg-center rounded-lg flex flex-col justify-center shadow-lg"
//           style={{ backgroundImage: "url('/Image/Group 1000005858.png')" }}
//         >
//           <div className="absolute inset-0 bg-black/50 rounded-lg"></div>

//           {/* Balance Card */}
//           <div className="relative w-[300px] h-[100px] rounded-xl overflow-hidden shadow-lg">
//             <Image
//               src="/Image/Challenge Card.png"
//               alt="Balance Card"
//               layout="fill"
//               objectFit="cover"
//             />
//             <div className="absolute inset-0 flex flex-col justify-center pl-4 text-white">
//               <p className="text-sm opacity-80">Total Balance</p>
//               <p className="text-2xl font-semibold">₹50.00</p>
//             </div>
//           </div>

//           {/* Add Money Section */}
//           <div className="max-w-sm mx-auto p-4 bg-black text-white rounded-xl shadow-lg mt-6">
//             {/* Header */}
//             <h2 className="flex items-center gap-2 text-lg font-semibold">
//               <FaWallet className="text-blue-500" /> Add Money
//             </h2>

//             {/* Amount Buttons */}
//             <div className="flex gap-3 mt-4">
//               {[25, 100, 500, 1000].map((value) => (
//                 <button
//                   key={value}
//                   onClick={() => setAmount(value)}
//                   className={`px-4 py-2 rounded-lg transition-all ${
//                     amount == value ? "bg-blue-500 text-white" : "bg-gray-700 hover:bg-gray-600"
//                   }`}
//                 >
//                   ₹{value}
//                 </button>
//               ))}
//             </div>

//             {/* Custom Amount Input */}
//             <input
//               type="number"
//               placeholder="Enter other amount"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//               className="w-full mt-4 p-2 text-black rounded-lg outline-none border-none"
//             />

//             {/* Payment Methods */}
//             <div className="mt-4">
//               <p className="text-sm">Choose your payment method</p>
//               <div className="flex justify-between items-center bg-gray-800 p-3 rounded-lg mt-2 cursor-pointer">
//                 <div className="flex gap-2">
//                   <SiPhonepe className="text-purple-500 text-2xl" />
//                   <SiGooglepay className="text-blue-400 text-2xl" />
//                   <SiApplepay className="text-gray-300 text-2xl" />
//                 </div>
//                 <FaChevronRight />
//               </div>

//               <p className="text-sm mt-4">Pay Via Card</p>
//               <div className="flex justify-between items-center bg-gray-800 p-3 rounded-lg mt-2 cursor-pointer">
//                 <div className="flex gap-2">
//                   <FaCcVisa className="text-blue-400 text-3xl" />
//                   <FaCcMastercard className="text-red-500 text-3xl" />
//                 </div>
//                 <FaChevronRight />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

"use client";
import { useState } from "react";
import Image from "next/image";

import {
  FaWallet,
  FaChevronRight,
  FaCcVisa,
  FaCcMastercard,
} from "react-icons/fa";
import { SiGooglepay, SiPhonepe, SiApplepay } from "react-icons/si";

export default function WalletUI() {
  const [amount, setAmount] = useState(25); // Default selected amount

  // Input Change Handler
  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value === "") {
      setAmount(""); // Allow empty input
    } else {
      setAmount(Number(value));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#333333] px-6">
      <div className="relative w-full max-w-[440px] p-6 bg-gray-900 text-white rounded-xl shadow-lg">
        {/* Header */}
        <h2 className="flex items-center gap-2 text-lg font-semibold">
          <FaWallet className="text-blue-500" /> Add Money
        </h2>

        {/* Amount Buttons */}
        <div className="flex justify-between gap-3 mt-4">
          {[25, 100, 500, 1000].map((value) => (
            <button
              key={value}
              onClick={() => setAmount(value)}
              className={`px-4 py-2 w-20 text-center rounded-lg transition-all ${
                amount === value
                  ? "bg-blue-500 text-white"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
            >
              ₹{value}
            </button>
          ))}
        </div>

        {/* Custom Amount Input */}
        <input
          type="number"
          placeholder="Enter other amount"
          value={amount}
          onChange={(e) => {
            const value = e.target.value;
            if (value === "" || Number(value) >= 0) {
              setAmount(value);
            }
          }}
          className="w-full mt-4 p-3 bg-gray-800 text-white rounded-lg outline-none border-none text-center 
             appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />

        {/* Payment Methods */}
        <div className="bg-black text-white p-5 rounded-lg w-full max-w-md mx-auto">
      {/* Payment Methods */}
      <div className="flex justify-between items-center border-b border-gray-700 pb-3">
        <p className="text-sm">Choose your payment method</p>
        <div className="flex items-center gap-2">
          <Image src="/images/phonepe.png" alt="PhonePe" width={32} height={32} />
          <Image src="/images/googlepay.png" alt="Google Pay" width={32} height={32} />
          <Image src="/images/applepay.png" alt="Apple Pay" width={32} height={32} />
        </div>
      </div>

      {/* Pay Via Card */}
      <div className="flex justify-between items-center pt-3">
        <p className="text-sm">Pay Via Card</p>
        <div className="flex items-center gap-2">
          <Image src="/images/visa.png" alt="VISA" width={40} height={24} />
          <Image src="/images/mastercard.png" alt="MasterCard" width={40} height={24} />
        </div>
      </div>
    </div>
      </div>
    </div>
  );
}
