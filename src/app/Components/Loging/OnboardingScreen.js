
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const screens = [
  {
    image: "/Image/Frame 14 (1).png",
    title: "Make Prediction",
    description: "Test your instincts and forecast the future."
  },
  {
    image: "/Image/Frame 14 (2).png",
    title: "Win rewards",
    description: "Test your instincts and forecast the future."
  },
  {
    image: "/Image/Frame 14 (3).png",
    title: "Earn Money Seamlessly",
    description: "Turn your insights into effortless earnings."
  }
];

export default function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex(0);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleNext = () => {
    if (currentIndex < screens.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      router.push("/auth"); 
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center mx-auto text-white px-4">
      {currentIndex === -1 && (
        <div className="flex items-center justify-center h-screen  w-full">
          <Image
            src="/Image/Opinio.png" 
            alt="Logo"
            width={440}
            height={250}
            className=""
          />
        </div>
      )}

      {currentIndex >= 0 && (
        <div className="w-full flex flex-col items-center text-center">
          <div className="relative max-w-[440px] flex justify-center">
    <Image
      src={screens[currentIndex].image}
      alt="Onboarding Image"
      width={440}
      height={250}
      className=" h-[400px] max-w-[440px]"
    />
  </div>

          <div className="flex gap-2 mt-3 justify-center">
            {screens.map((_, index) => (
              <div
                key={index}
                className={`h-3 w-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-blue-600 w-10" : "bg-gray-500"
                }`}
              />
            ))}
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold">{screens[currentIndex].title}</h2>
            <p className="text-sm text-gray-400">{screens[currentIndex].description}</p>
          </div>
          <div className="flex justify-between w-[280px] mt-18">
            <button
              className="text-gray-400 cursor-pointer"
              onClick={() => router.push("/auth")}
            >
              Skip
            </button>
            <button
              onClick={handleNext}
              className="px-6 py-[7px] rounded-[10px] text-white cursor-pointer bg-gradient-to-r from-blue-700 to-blue-900"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
