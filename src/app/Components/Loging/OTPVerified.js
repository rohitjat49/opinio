
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import AuthLayout from "../Auth/AuthLayout";

const OTPVerified = () => {
  const router = useRouter(); 

  const handleDoneClick = () => {
    router.push("Home"); 
  };

  return (
    <AuthLayout>
      <div className="flex items-center justify-center min-h-screen text-white">
        <div className="flex flex-col items-center mt-12 p-6">
          <Image
            src="/Image/OTPVerified.gif"
            alt="Success"
            width={80}
            height={80}
            className="w-36 h-36"
          />

          <p className="mt-4 text-center text-lg font-medium">
            OTP Verified Successfully, you can continue to the app
          </p>

          <button
            onClick={handleDoneClick} 
            className="h-12 w-full font-normal mt-48 flex items-center justify-center text-sm max-w-xs rounded-xl bg-blue-500 text-white cursor-pointer hover:bg-blue-600 transition"
          >
            Done
          </button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default OTPVerified;
