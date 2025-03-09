"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const ButtonSwiper = () => {
  const [swiped, setSwiped] = useState(false);

  return (
    <div className="relative w-48 h-12 bg-gray-300 rounded-full overflow-hidden flex items-center mb-48">
      {!swiped ? (
        <motion.div
          className="absolute left-2 text-white bg-blue-500 p-2 rounded-full"
          initial={{ x: 0 }}
          animate={{ x: 150 }}
          transition={{ duration: 1 }}
          onAnimationComplete={() => setSwiped(true)}
        >
          <FaArrowRight size={20} />
        </motion.div>
      ) : (
        <button className="w-full h-full bg-blue-500 text-white rounded-full">
          Proceed
        </button>
      )}
    </div>
  );
};

export default ButtonSwiper;
