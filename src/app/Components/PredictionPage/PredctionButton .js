"use client";
import { useState } from "react";
import BettingBid from "../Order/BettingBid";
import AboutEvent from "./AboutEvent";
import ActivityList from "./ActivityList";

const PredctionButton = () => {
  const [orderTab, setOrderTab] = useState("Activity");

  return (
    <div className="w-full p-3 mt-5 text-white">
      <div className="flex justify-start font-normal gap-x-5 mt-4">
        {[
          { key: "Activity", label: "Activity" },
          { key: "order", label: "Order book" },
        ].map(({ key, label }) => (
          <button
            key={key}
            className={`text-center py-1 text-sm font-normal transition-all ${
              orderTab === key
                ? "font-bold text-white border-white"
                : "text-gray-500 hover:text-white"
            }`}
            onClick={() => setOrderTab(key)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="mt-4 text-gray-300">
        {orderTab === "Activity" && (
          <>
            <ActivityList />
            <AboutEvent />
          </>
        )}
        {orderTab === "order" && <BettingBid />}
      </div>
    </div>
  );
};

export default PredctionButton;
