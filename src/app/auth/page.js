// "use client";
// import { useState } from "react";
// import MobileNumberScreen from "../Components/Loging/MobileNumber";
// import OtpVerificationScreen from "../Components/Loging/OtpNumber";

// const AuthPage = () => {
//   const [mobile, setMobile] = useState("");
//   const [showOtpScreen, setShowOtpScreen] = useState(false);

//   return showOtpScreen ? (
//     <OtpVerificationScreen mobile={mobile} onBack={() => setShowOtpScreen(false)} />
//   ) : (
//     <MobileNumberScreen onNext={(number) => {
//       setMobile(number);
//       setShowOtpScreen(true);
//     }} />
//   );
// };

// export default AuthPage;


"use client";
import { useState } from "react";
import MobileNumberScreen from "../Components/Loging/MobileNumber";
import OtpVerificationScreen from "../Components/Loging/OtpNumber";
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
      onVerify={() => setIsVerified(true)}  // Set verified state on OTP verification
    />
  ) : (
    <MobileNumberScreen onNext={(number) => {
      setMobile(number);
      setShowOtpScreen(true);
    }} />
  );
};

export default AuthPage;

