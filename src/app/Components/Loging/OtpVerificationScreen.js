"use client";
import { useState, useEffect } from "react";
import AuthLayout from "../Auth/AuthLayout";
const OtpVerificationScreen = ({ mobile, onBack, onVerify }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [resendTimer, setResendTimer] = useState(30);
  const [isResendAvailable, setIsResendAvailable] = useState(false);
  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setInterval(() => setResendTimer((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    } else {
      setIsResendAvailable(true);
    }
  }, [resendTimer]);

  const handleOtpChange = (index, value) => {
    if (isNaN(value)) return;
    let newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleResendOtp = () => {
    setOtp(["", "", "", ""]);
    setResendTimer(30);
    setIsResendAvailable(false);
  };

  const handleVerifyOtp = () => {
    if (otp.join("").length === 4) {
      onVerify(); 
    }
  };

  return (
    <AuthLayout>
      <h2 className="text-xl font-normal mb-3">Verify Phone</h2>
      <p className="text-sm text-[#909090]">OTP has been sent to {mobile}</p>
      <div className="flex justify-center items-center gap-5 mt-12">
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-${index}`}
            type="text"
            maxLength="1"
            className="w-14 h-14 text-center text-xl bg-[#77777740] rounded-full focus:outline-none text-white"
            value={digit}
            onChange={(e) => handleOtpChange(index, e.target.value)}
          />
        ))}
      </div>

      <div className="mt-6 mb-4">
        {isResendAvailable ? (
          <button onClick={handleResendOtp} className="text-blue-400 cursor-pointer font-medium">
            Resend OTP
          </button>
        ) : (
          <p className="text-sm text-gray-400">Resend in {resendTimer}s</p>
        )}
      </div>

      <button
        onClick={handleVerifyOtp} 
        className={`h-12 w-full font-normal items-center justify-center mx-auto text-sm max-w-xs mt-48 rounded-xl ${
          otp.join("").length === 4
            ? "bg-blue-500 text-white cursor-pointer"
            : "bg-[rgba(255,255,255,0.07)] text-[#606060] cursor-not-allowed"
        }`}
        disabled={otp.join("").length !== 4}
      >
        Verify OTP
      </button>
    </AuthLayout>
  );
};

export default OtpVerificationScreen;
