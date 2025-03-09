

import React from "react";
import ATMButton from "./ATMButton";

const Card = () => {
  return (
    <div
      className="relative w-[392px] h-[230px] rounded-[20px] p-5 flex flex-col justify-between shadow-lg overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #191818, #0B0B0B)",
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat opacity-100"
        style={{
          backgroundImage: "url('/mnt/data/Bg Elements.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Content */}
      <div className="relative text-white">
        <div className="flex justify-between space-x-2">
            <div>
          <span className="text-lg">🏏 Cricket</span>
                
            </div>
            <div className="flex items-center space-x-2">
          <img src="https://flagcdn.com/w40/za.png" alt="SA" className="w-5 h-3" />
          <span className="text-gray-400">vs</span>
          <img src="https://flagcdn.com/w40/nz.png" alt="NZ" className="w-5 h-3" />
                
            </div>
        </div>
        <p className="mt-2 text-[16px] font-semibold leading-5">
          South Africa to win the 2nd Semi-Final vs New Zealand?
        </p>
        <p className="text-gray-400 text-sm mt-1">🔗 123446 Traders</p>
        <p className="text-gray-500 text-xs mt-1">
          H2H Last 5 ODI SA: 02, NZ: 03, Draw: 0
        </p>
      </div>

      {/* Buttons */}
      <div className="relative flex justify-between mt-2">
        <ATMButton text="Yes ₹4.5" color="blue" />
        <ATMButton text="No ₹4.5" color="red" />
      </div>
    </div>
  );
};

export default Card;
