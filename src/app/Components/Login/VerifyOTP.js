"use client"; // 👈 Client Component ke liye

import { useState, useEffect } from "react";

export default function VerifyOTP() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [resendTimer, setResendTimer] = useState(12);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // Handle OTP input
  const handleChange = (index, value) => {
    if (isNaN(Number(value))) return; // Allow only numbers
    let newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if entered
    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }

    // Enable button if all inputs filled
    setIsButtonDisabled(newOtp.includes("") ? true : false);
  };

  // Handle resend timer
  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  return (
    <div className="h-screen flex items-center justify-center bg-[url('/bg-image.jpg')] bg-cover bg-center">
      <div className="w-80 p-6 text-white rounded-lg bg-black bg-opacity-50">
        {/* Heading */}
        <h2 className="text-lg font-semibold text-center">Verify Phone</h2>
        <p className="text-sm text-gray-300 text-center mt-1">
          OTP has been sent to <span className="font-medium">9892128907</span>
        </p>

        {/* OTP Input Boxes */}
        <div className="flex justify-center mt-4 space-x-2">
          {otp.map((value, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength={1}
              value={value}
              onChange={(e) => handleChange(index, e.target.value)}
              className="w-12 h-12 bg-gray-800 text-white text-center text-xl rounded-full border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          ))}
        </div>

        {/* Resend Timer */}
        <p className="text-xs text-gray-400 mt-3 text-center">
          {resendTimer > 0 ? `Resend in ${resendTimer}s` : "Resend OTP"}
        </p>

        {/* Verify Button */}
        <button
          className={`mt-4 w-full py-3 rounded-full text-lg font-medium ${
            isButtonDisabled ? "bg-gray-600 text-gray-400 opacity-50 cursor-not-allowed" : "bg-blue-500 text-white"
          }`}
          disabled={isButtonDisabled}
        >
          Verify OTP
        </button>
      </div>
    </div>
  );
}
