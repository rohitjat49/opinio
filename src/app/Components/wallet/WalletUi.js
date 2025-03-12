
'use client';
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import PaymentMethods from './PaymentMethod'

export default function WalletUi() {
  const [selectedAmount, setSelectedAmount] = useState(25);
  const [showPaymentMethods, setShowPaymentMethods] = useState(false); 

  if (showPaymentMethods) {
    return <PaymentMethods />; 
  }

  return (
    <>
      <div
        className="relative w-[393px] h-[111px] p-5 my-6 rounded-[24px] shadow-inner flex items-center overflow-hidden"
        style={{
          backgroundImage: "url('/Image/Group (2).png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
          backgroundColor: "#003A9E",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#003A9E] to-[#1963E3] opacity-80 rounded-[24px]"></div>
        <div className="absolute inset-0 rounded-[24px] shadow-[inset_0_-6px_14px_rgba(0,0,0,0.25)]"></div>
        <div className="relative z-10 text-white ">
          <div className="text-xs font-light mt-2">Total Balance</div>
          <p className="text-4xl font-medium">₹50.00</p>
        </div>
        <div className="absolute right-[-10px] top-[-20%] flex flex-col items-center">
          <Image
            src="/Image/Group (3).png"
            alt="Coins"
            width={70}
            height={70}
            className="opacity-90"
          />
          <Image
            src="/Image/Group (3).png"
            alt="Coins"
            width={60}
            height={60}
            className="opacity-90 -mt-5"
          />
        </div>
      </div>

      <div className="relative p-4 bg-[#333] mt-5 text-white  rounded-2xl shadow-[0_8px_15px_rgba(0,0,0,1)] overflow-hidden">
        <div className="flex items-center gap-4 text-white mb-3">
          <Image 
            src="/Image/wallet-add.png" 
            alt="Recent Transactions" 
            width={24} 
            height={24} 
            className="w-6 h-6"
          />
          <p className="text-gray-300">Add Money</p>
        </div>

        <div className="flex justify-center gap-6 my-8 ">
          {[25, 100, 500, 1000].map((amount) => (
            <button
              key={amount}
              onClick={() => setSelectedAmount(amount)}
              className={`px-4 py-2 rounded-lg cursor-pointer ${
                selectedAmount === amount
                  ? "bg-blue-500 text-white shadow-md"
                  : "bg-[#3C3C3C] text-gray-300"
              }`}
            >
              ₹{amount}
            </button>
          ))}
        </div>

        <div className="flex justify-center ">
          <input
            type="text"
            placeholder="Enter other amount"
            className="w-full  bg-[#3C3C3C] text-gray-300 p-2 rounded-lg focus:outline-none text-center border-[0.5px] border-[#3C3C3C]"
          />
        </div>

        <div className="mt-5 space-y-1">
          <div 
            className="flex justify-between items-center py-2 text-white cursor-pointer"
            onClick={() => setShowPaymentMethods(true)} 
          >
            <p className="text-xs mb-1 font-normal">Choose your payment method</p>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 mr-2">
                <Image
                  src="/Image/Frame 1686553017.png"
                  alt="Google Pay"
                  width={60}
                  height={60}
                  className="w-[96px]"
                />
              </div>
              <ChevronRight className="text-2xl w-9 h-9" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

