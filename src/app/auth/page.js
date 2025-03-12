"use client";
import { useState } from "react";
import MobileNumberScreen from "../Components/Loging/MobileNumberScreen";
import OtpVerificationScreen from "../Components/Loging/OtpVerificationScreen";
import OTPVerified from "../Components/Loging/OTPVerified";

const AuthPage = () => {
  const [mobile, setMobile] = useState("");
  const [showOtpScreen, setShowOtpScreen] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  if (isVerified) {
    return <OTPVerified />;
  }

  return showOtpScreen ? (
    <OtpVerificationScreen 
      mobile={mobile} 
      onBack={() => setShowOtpScreen(false)} 
      onVerify={() => setIsVerified(true)}  
    />
  ) : (
    <MobileNumberScreen onNext={(number) => {
      setMobile(number);
      setShowOtpScreen(true);
    }} />
  );
};

export default AuthPage;

