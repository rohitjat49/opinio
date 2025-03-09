import React from "react";

const LiveMatchCard = () => {
  return (
    <div
      className="relative w-[370px] h-[500px] rounded-[24px] p-6 flex flex-col justify-between shadow-lg overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #191818, #0B0B0B)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.15)", // Proper Soft Glow
      }}
    >
      {/* Live Badge */}
      <div className="absolute top-5 left-5 flex items-center bg-gradient-to-r from-red-700 to-red-400 px-4 py-1 rounded-full">
        <span className="text-white text-sm font-semibold">Live</span>
        <span className="ml-2">🏏</span>
      </div>

      {/* Star Icon */}
      <div className="absolute top-5 right-5 text-gray-400 text-lg">⭐</div>

      {/* Match Image (Dummy Image Used) */}
      <div className="w-full flex justify-center">
        <img
          src="https://via.placeholder.com/270x160"
          alt="Match Preview"
          className="w-[270px] h-[160px] rounded-[16px]"
        />
      </div>

      {/* Match Title */}
      <h2 className="text-center text-white text-2xl font-bold mt-3">NZ vs SA</h2>

      {/* Live Score Details */}
      <div className="text-gray-300 text-sm mt-3">
        <p>
          <b>Live Score:</b> SA <b>223/2</b> &nbsp; 42.5 Overs &nbsp; NZ: Yet to Bat
        </p>
        <p className="mt-2">
          <b>T. Bavuma:</b> 53 (57) &nbsp; <b>T. Boult:</b> 1/39 (7.5 Overs)
        </p>
        <p>
          <b>D. Miller:</b> 73 (68)
        </p>
      </div>

      {/* Dot Ball Sequence */}
      <div className="text-white text-lg flex justify-center space-x-4 mt-4">
        <span className="text-gray-500">2</span>
        <span className="text-gray-500">0</span>
        <span className="text-gray-500">1</span>
        <span className="text-gray-500">0</span>
        <span className="text-gray-500">4</span>
      </div>
    </div>
  );
};

export default LiveMatchCard;
