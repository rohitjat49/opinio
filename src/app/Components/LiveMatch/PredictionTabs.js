"use client";
import { useState } from "react";
import CardComponent from "../Home/CardComponet";
import BatsmanComponent from "../Home/Batsman";

const PredictionTabs = () => {
  const [activeTab, setActiveTab] = useState("overall");

  const handleBidNavigation = () => {
    console.log("Navigating to bid...");
  };

  return (
    <div className="w-full p-3 mt-5 text-white">
      <p className="text-xs mb-2 font-light text-gray-400">
        Make your own prediction on NZ vs SA match!
      </p>

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

      <div className="mt-4 text-gray-300">
        {activeTab === "overall" && <CardComponent />}
        {activeTab === "sa" && <BatsmanComponent handleBidNavigation={handleBidNavigation} />}
        {activeTab === "nz" && <CardComponent />}
      </div>
    </div>
  );
};

export default PredictionTabs;
