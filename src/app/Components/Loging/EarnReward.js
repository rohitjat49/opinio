"use client";

import Image from "next/image";
import { useState } from "react";

export default function EarnReward() {
  const totalScreens = 3; // Total number of screens
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < totalScreens - 1 ? prev + 1 : prev));
  };

  return (
    <div className="h-screen w-full flex flex-col items-center bg-black text-white px-4">
      {/* Image Section */}
      <div className="relative w-[440px] max-w-full flex justify-center">
        <Image
          src="/Image/Frame 14 (3).png" // Replace with your actual image path
          alt="Predict Image"
          width={440}
          height={250}
          className="object-contain h-[400px]"
        />
      </div>

      {/* Progress Dots */}
      <div className="flex gap-2 mt-3">
        {Array.from({ length: totalScreens }).map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full transition-all ${
              index === currentIndex ? "bg-blue-600 w-10" : "bg-gray-500"
            }`}
          />
        ))}
      </div>

      {/* Text Content */}
      <div className="mt-6 text-center">
        <div className="text-xl font-normal">Earn Money seemlessly</div>
        <p className="text-sm">Turn your insights into effortless earnings.</p>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between w-full max-w-[440px] mt-12">
        <button className="text-gray-400">Skip</button>
        <button
          onClick={handleNext}
          className="px-6 py-[7px] rounded-[10px] text-white"
          style={{
            background: "linear-gradient(90deg, #1963E3 0%, #003A9E 100%)",
            padding: "7px 24px",
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
