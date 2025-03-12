
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";

const SwipeButton = ({ selectedOption }) => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [showDots, setShowDots] = useState(false);
  const [swipePosition, setSwipePosition] = useState(0);

  const handleSwipe = (info) => {
    if (info.point.x > 180) {
      setShowDots(true);
      setTimeout(() => {
        setIsConfirmed(true);
        setShowDots(false);
        setSwipePosition(250); 
        setTimeout(() => {
          setIsConfirmed(false);
          setSwipePosition(0); 
        }, 3000);
      }, 200);
    }
  };

  return (
    <div className="w-full flex justify-center">
      <motion.div
        className={`relative h-16 w-full rounded-full overflow-hidden flex items-center justify-center transition-all duration-300 ${
          isConfirmed
            ? selectedOption === "Yes"
              ? "bg-blue-600"
              : "bg-red-600"
            : "bg-transparent"
        }`}
      >
        {!showDots && (
          <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-medium">
            {isConfirmed ? "Successful" : "Swipe to confirm"}
          </div>
        )}

        {showDots && (
          <motion.span
            className="text-2xl text-white"
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
          >
            ...
          </motion.span>
        )}

        {!showDots && (
          <motion.div
            className="absolute left-2 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer"
            drag={!isConfirmed ? "x" : false}
            dragConstraints={!isConfirmed ? { left: 0, right: 190 } : false}
            onDragEnd={(event, info) => handleSwipe(info)}
            animate={{ x: swipePosition }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {isConfirmed ? (
              <FaCheck
                className={`text-2xl ${
                  selectedOption === "Yes" ? "text-blue-600" : "text-red-600"
                }`}
              />
            ) : (
              <Image
                src="/Image/Mask group.png"
                alt="Swipe Arrow"
                width={28}
                height={28}
              />
            )}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default SwipeButton;
