// 'use client';

// import { useState } from 'react';

// const MobileNumberInput = () => {
//   const [mobile, setMobile] = useState('');
//   const [error, setError] = useState('');

//   const validateMobile = (value) => {
//     if (!/^[6-9]\d{9}$/.test(value)) {
//       setError('Please enter a valid 10-digit mobile number');
//     } else {
//       setError('');
//     }
//     setMobile(value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!error && mobile.length === 10) {
//       alert('OTP Sent Successfully');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-[#333333] ">
//       <div
//         className="relative mx-auto w-full max-w-[442px] min-h-screen p-6 bg-cover bg-center rounded-lg flex flex-col justify-center"
//         style={{ backgroundImage: "url('/Image/Group 1000005858.png')" }} // Ensure image is in public folder
//       >
//         {/* Overlay (Fixed to not block inputs) */}
//         <div className="absolute inset-0 bg-black/50 rounded-lg"></div>

//         {/* Form Container */}
//         <div className="relative z-10 text-center text-white">
//           <h2 className="text-xl font-semibold">Enter your mobile number</h2>
//           <p className="text-sm text-gray-300 mb-4">We'll send you an OTP</p>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="flex items-center  bg-[#242424] rounded-lg overflow-hidden">
//               <span className="px-3 py-2  text-white">🇮🇳 +91</span>
//               <input
//                 type="text"
//                 maxLength={10}
//                 value={mobile}
//                 onChange={(e) => validateMobile(e.target.value)}
//                 className="w-full px-3 py-2  text-white outline-none"
//                 placeholder="Enter mobile number"
//               />
//             </div>
//             {error && <p className="text-red-500 text-sm">{error}</p>}

//             <button
//               type="submit"
//               className={`w-full py-2 rounded-lg text-white ${
//                 error || mobile.length !== 10 ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
//               }`}
//               disabled={error || mobile.length !== 10}
//             >
//               Get OTP
//             </button>
//           </form>

//           <p className="text-xs text-gray-400 mt-4">
//             By continuing, you accept you are 18+ years of age and agree to the{' '}
//             <span className="text-blue-400 cursor-pointer">Terms and Conditions</span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MobileNumberInput;

// "use client";

// import { useState } from "react";

// const MobileNumberInput = () => {
//   const [mobile, setMobile] = useState("");
//   const [error, setError] = useState("");

//   const validateMobile = (value) => {
//     if (!/^[6-9]\d{9}$/.test(value)) {
//       setError("Please enter a valid 10-digit mobile number");
//     } else {
//       setError("");
//     }
//     setMobile(value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!error && mobile.length === 10) {
//       alert("OTP Sent Successfully");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-[#333333]">
//       <div
//         className="relative mx-auto w-full max-w-[442px] min-h-screen p-6 bg-cover bg-center rounded-lg flex flex-col justify-center shadow-lg"
//         style={{ backgroundImage: "url('/Image/Group 1000005858.png')" }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/50 rounded-lg"></div>

//         {/* Form Container */}
//         <div className="relative z-10 text-center text-white">
//           <h2 className="text-xl font-semibold">Enter your mobile number</h2>
//           <p className="text-sm text-gray-300 mb-4">We'll send you an OTP</p>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="flex items-center bg-[#77777740] rounded-lg overflow-hidden shadow-[0px_1px_1px_0px_#777777]">
//               <span className="px-3 py-2 text-white">🇮🇳 +91</span>
//               <input
//                 type="text"
//                 maxLength={10}
//                 value={mobile}
//                 onChange={(e) => validateMobile(e.target.value)}
//                 className="w-full px-3 py-2 text-white  outline-none "
//                 placeholder="9876543210"
//               />
//             </div>

//             {error && <p className="text-red-500 text-sm">{error}</p>}

//             <button
//               type="submit"
//               className={`w-full py-2 rounded-lg text-white shadow-md ${
//                 error || mobile.length !== 10
//                   ? "bg-[#77777740] cursor-not-allowed"
//                   : "bg-blue-500 hover:bg-blue-600 shadow-[0px_-2px_4px_0px_#777777]"
//               }`}
//               disabled={error || mobile.length !== 10}
//             >
//               Get OTP
//             </button>
//           </form>

//           <p className="text-xs text-gray-400 mt-4">
//             By continuing, you accept you are 18+ years of age and agree to the{" "}
//             <span className="text-blue-400 cursor-pointer">
//               Terms and Conditions
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MobileNumberInput;


// "use client";

// import { useState } from "react";

// const MobileNumberInput = () => {
//   const [mobile, setMobile] = useState("");
//   const [error, setError] = useState("");

//   const validateMobile = (value) => {
//     if (!/^[6-9]\d{9}$/.test(value)) {
//       setError("Please enter a valid 10-digit mobile number");
//     } else {
//       setError("");
//     }
//     setMobile(value);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-[#333333]">
//       <div
//         className="relative mx-auto w-full max-w-[442px] min-h-screen p-6 bg-cover bg-center rounded-lg flex flex-col justify-center shadow-lg"
//         style={{ backgroundImage: "url('/Image/Group 1000005858.png')" }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/50 rounded-lg"></div>

//         {/* Form Container */}
//         <div className="relative z-10 text-center text-white">
//           <h2 className="text-xl font-semibold">Enter your mobile number</h2>
//           <p className="text-sm text-gray-300 mb-4">We'll send you an OTP</p>

//           <form className="space-y-4">
            // <div className="flex items-center bg-[#77777740] rounded-lg overflow-hidden shadow-[0px_2px_4px_0px_#777777]">
            //   <span className="px-3 py-2 text-white">🇮🇳 +91</span>
            //   <input
            //     type="text"
            //     maxLength={10}
            //     value={mobile}
            //     onChange={(e) => validateMobile(e.target.value)}
            //     className="w-full px-3 py-2 text-white bg-transparent outline-none placeholder-gray-400"
            //     placeholder="9876543210"
            //   />
            // </div>

//             {error && <p className="text-red-500 text-sm">{error}</p>}
//             <p className="text-xs text-gray-400 mt-4">
//             By continuing, you accept you are 18+ years of age and agree to the{" "}
//             <span className="text-blue-400 cursor-pointer">
//               Terms and Conditions
//             </span>
//           </p>
//             <button
//               type="button"
//               className="w-full py-2 rounded-lg text-white bg-[#77777740] "
//             >
//               Get OTP
//             </button>
//           </form>

         
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MobileNumberInput;


// "use client";

// import Image from "next/image";
// import { useState } from "react";

// const MobileNumberInput = () => {
//   const [mobile, setMobile] = useState("");
//   const [error, setError] = useState("");

//   const validateMobile = (value) => {
//     if (!/^[6-9]\d{9}$/.test(value)) {
//       setError("Please enter a valid 10-digit mobile number");
//     } else {
//       setError("");
//     }
//     setMobile(value);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-[#333333] px-6">
//       <div
//         className="relative mx-auto w-full max-w-[440px] min-h-screen px-8 py-10 bg-cover bg-center rounded-lg flex flex-col justify-center shadow-lg"
//         style={{ backgroundImage: "url('/Image/Group 1000005858.png')" }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/50 rounded-lg"></div>

//         {/* Form Container */}
//         <div className="relative z-10 text-center text-white mt-10">
//           <h2 className="text-2xl font-normal mb-2">Enter your mobile number</h2>
//           <p className="text-sm text-[#909090] mb-6">We'll send you an OTP</p>

//           <form className="space-y-4">
//           {/* <div className="flex items-center bg-[#77777740] rounded-lg overflow-hidden shadow-[0px_2px_4px_0px_#777777]">
//               <span className="px-3 py-2 text-white">🇮🇳 +91</span>
//               <input
//                 type="text"
//                 maxLength={10}
//                 value={mobile}
//                 onChange={(e) => validateMobile(e.target.value)}
//                 className="w-full px-3 py-2 text-white bg-transparent outline-none placeholder-gray-400"
//                 placeholder="9876543210"
//               />
//             </div> */}

// {/* <div className="flex items-center bg-[#77777740] rounded-lg overflow-hidden shadow-[0px_2px_4px_0px_#777777]">
//       <span className="px-3 py-2 text-white flex items-center gap-2">
//         🇮🇳 +91
//       </span>
//       <div className="w-[1px] h-14 bg-gray-400"></div>
//       <input
//         type="text"
//         className="w-full px-3 py-2 text-white bg-transparent outline-none placeholder-gray-400"
//         placeholder="9876543210"
//       />
//     </div> */}

// <div className="flex items-center bg-[#77777740] rounded-lg overflow-hidden shadow-[0px_2px_4px_0px_#777777]">
//       {/* Flag and Country Code */}
//       <span className="px-7 py-2 text-white flex items-center gap-2">
//         <Image src="/Image/Group.png" alt="India Flag" width={24} height={16} />
//         +91
//       </span>
//       {/* Vertical Line */}
//       <div className="w-[1px] h-14 bg-[#252323]"></div>
//       {/* Input Field */}
//       <input
//         type="text"
//         className="w-full px-3 py-2 text-white bg-transparent outline-none placeholder-gray-400"
//         placeholder="9876543210"
//       />
//     </div>

//             {error && <p className="text-red-500 text-sm">{error}</p>}
//          <div className="mt-58">

         
//             <p className="text-sm font-normal  mt-5">
//               By continuing, you accept you are 18+ years of age and agree to the Terms and Conditions
//             </p>

//             <button
//               type="button"
//               className="w-full py-3 text-sm rounded-lg text-[#817e7e] bg-[#77777740]  mt-6 opacity-50"
//               disabled
//             >
//               Get OTP
//             </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MobileNumberInput;

// "use client";

// import Image from "next/image";
// import { useState } from "react";

// const MobileNumberInput = () => {
//   const [mobile, setMobile] = useState("");
//   const [error, setError] = useState("");
//   const [isValid, setIsValid] = useState(false);

//   // Validate Mobile Number
//   const validateMobile = (value) => {
//     if (!/^[6-9]\d{9}$/.test(value)) {
//       setError("Please enter a valid 10-digit mobile number");
//       setIsValid(false);
//     } else {
//       setError("");
//       setIsValid(true);
//     }
//     setMobile(value);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-[#333333] px-6">
//       <div
//         className="relative mx-auto min-h-screen w-full max-w-[440px] px-8  bg-cover bg-center rounded-lg flex flex-col justify-center shadow-lg"
//         style={{ backgroundImage: "url('/Image/Group 1000005858.png')" }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/50 rounded-lg"></div>

//         {/* Form Container */}
//         <div className="relative z-10  text-center text-white">
//           <h2 className="text-2xl font-normal mb-2">Enter your mobile number</h2>
//           <p className="text-sm text-[#909090] mb-6">We&apos;ll send you an OTP</p>

//           <form className="space-y-4">
//             {/* Mobile Input Field */}
//             <div className="flex items-center bg-[#77777740] rounded-lg overflow-hidden shadow-md">
//               {/* Flag and Country Code */}
//               <span className="px-7 py-2 text-white flex items-center gap-2">
//                 <Image
//                   src="/Image/Group.png"
//                   alt="India Flag"
//                   width={24}
//                   height={16}
//                   priority
//                 />
//                 +91
//               </span>

//               {/* Vertical Line */}
//               <div className="w-[1px] h-14 bg-[#252323]"></div>

//               {/* Input Field */}
//               <input
//                 type="text"
//                 maxLength={10}
//                 value={mobile}
//                 onChange={(e) => validateMobile(e.target.value)}
//                 className="w-full px-3 py-2 text-white bg-transparent outline-none placeholder-gray-400"
//                 placeholder="9876543210"
//                 aria-label="Enter mobile number"
//               />
//             </div>

//             {/* Error Message */}
//             {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

//             {/* Terms and Conditions */}
//             <div className="mt-5">
//               <p className="text-sm font-normal">
//                 By continuing, you accept you are 18+ years of age and agree to the Terms &amp; Conditions.
//               </p>

//               {/* Get OTP Button (Enabled if valid) */}
//               <button
//                 type="button"
//                 className={`w-full py-3 text-sm rounded-lg mt-6 transition ${
//                   isValid
//                     ? "bg-blue-500 text-white cursor-pointer hover:bg-blue-600"
//                     : "bg-[#77777740] text-[#817e7e] opacity-50 cursor-not-allowed"
//                 }`}
//                 disabled={!isValid}
//               >
//                 Get OTP
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MobileNumberInput;


// "use client";

// import Image from "next/image";
// import { useState } from "react";

// const MobileNumberInput = () => {
//   const [mobile, setMobile] = useState("");
//   const [error, setError] = useState("");
//   const [isValid, setIsValid] = useState(false);

//   // Validate Mobile Number
//   const validateMobile = (value) => {
//     if (!/^[6-9]\d{9}$/.test(value)) {
//       setError("Please enter a valid 10-digit mobile number");
//       setIsValid(false);
//     } else {
//       setError("");
//       setIsValid(true);
//     }
//     setMobile(value);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-[#333333] px-6">
//       <div
//         className="relative mx-auto w-full min-h-screen max-w-[440px] px-8  bg-cover bg-center rounded-lg flex flex-col justify-center shadow-lg"
//         style={{ backgroundImage: "url('/Image/Group 1000005858.png')" }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/50 rounded-lg"></div>

//         {/* Form Container */}
//         <div className="relative z-10 text-center text-white">
//           <h2 className="text-2xl font-normal ">Enter your mobile number</h2>
//           <p className="text-sm text-[#909090] mb-6">We&apos;ll send you an OTP</p>

//           <form className="space-y-4">
//             {/* Mobile Input Field */}
//             <div className="flex items-center bg-[#77777740] rounded-lg overflow-hidden shadow-md">
//               {/* Flag and Country Code */}
//               <span className="px-7 py-2 text-white flex items-center gap-2">
//                 <Image
//                   src="/Image/Group.png"
//                   alt="India Flag"
//                   width={24}
//                   height={16}
//                   priority
//                 />
//                 +91
//               </span>

//               {/* Vertical Line */}
//               <div className="w-[1px] h-14 bg-[#312f2f]"></div>

//               {/* Input Field */}
//               <input
//                 type="text"
//                 maxLength={10}
//                 value={mobile}
//                 onChange={(e) => validateMobile(e.target.value)}
//                 className="w-full px-3 py-2 text-white bg-transparent outline-none placeholder-gray-400"
//                 placeholder="9876543210"
//                 aria-label="Enter mobile number"
//               />
//             </div>

//             {/* Error Message */}
//             {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

//             {/* Terms and Conditions */}
//             <div className="mt-48">
//               <p className="text-sm font-normal text-[#909090]">
//                 By continuing, you accept you are 18+ years of age and agree to the Terms &amp; Conditions.
//               </p>

//               {/* Get OTP Button (Enabled if valid) */}
//               <button
//                 type="button"
//                 className={`w-full py-3 text-sm rounded-lg mt-6 transition ${
//                   isValid
//                     ? "bg-blue-500 text-white cursor-pointer hover:bg-blue-600"
//                     : "bg-[#77777740] text-[#817e7e] opacity-50 cursor-not-allowed"
//                 }`}
//                 disabled={!isValid}
//               >
//                 Get OTP
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MobileNumberInput;



// "use client";

// import Image from "next/image";
// import { useState, useEffect } from "react";

// const MobileNumberInput = () => {
//   const [mobile, setMobile] = useState("");
//   const [error, setError] = useState("");
//   const [isValid, setIsValid] = useState(false);
//   const [showOtpScreen, setShowOtpScreen] = useState(false);
//   const [otp, setOtp] = useState(["", "", "", ""]);
//   const [resendTimer, setResendTimer] = useState(30);
//   const [isResendAvailable, setIsResendAvailable] = useState(false);

//   // Validate Mobile Number
//   const validateMobile = (value) => {
//     if (!/^[6-9]\d{9}$/.test(value)) {
//       setError("Please enter a valid 10-digit mobile number");
//       setIsValid(false);
//     } else {
//       setError("");
//       setIsValid(true);
//     }
//     setMobile(value);
//   };

//   // OTP Resend Timer
//   useEffect(() => {
//     if (resendTimer > 0) {
//       const timer = setInterval(() => setResendTimer((prev) => prev - 1), 1000);
//       return () => clearInterval(timer);
//     } else {
//       setIsResendAvailable(true);
//     }
//   }, [resendTimer]);

//   // Handle OTP Input Change
//   const handleOtpChange = (index, value) => {
//     if (isNaN(value)) return;
//     let newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);
//     if (value && index < otp.length - 1) {
//       document.getElementById(`otp-${index + 1}`).focus();
//     }
//   };

//   // Handle Resend OTP
//   const handleResendOtp = () => {
//     setOtp(["", "", "", ""]);
//     setResendTimer(30);
//     setIsResendAvailable(false);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-[#333333] px-6">
//       <div
//         className="relative mx-auto w-full min-h-screen max-w-[440px] px-8 bg-cover bg-center rounded-lg flex flex-col justify-center shadow-lg"
//         style={{ backgroundImage: "url('/Image/Group 1000005858.png')" }}
//       >
//         <div className="absolute inset-0 bg-black/50 rounded-lg"></div>

//         {/* Common Wrapper for Both Screens (Same Spacing) */}
//         <div className="relative z-10 text-center text-white flex flex-col justify-center h-full">
//           {!showOtpScreen ? (
//             // Mobile Number Input Screen
//             <>
//               <h2 className="text-2xl font-normal">Enter your mobile number</h2>
//               <p className="text-sm text-[#909090] mb-6">We&apos;ll send you an OTP</p>

//               <form className="space-y-4">
//                 <div className="flex items-center bg-[#77777740] rounded-lg overflow-hidden shadow-md">
//                   <span className="px-7 py-2 text-white flex items-center gap-2">
//                     <Image src="/Image/Group.png" alt="India Flag" width={24} height={16} priority />
//                     +91
//                   </span>
//                   <div className="w-[1px] h-14 bg-[#312f2f]"></div>
//                   <input
//                     type="text"
//                     maxLength={10}
//                     value={mobile}
//                     onChange={(e) => validateMobile(e.target.value)}
//                     className="w-full px-3 py-2 text-white bg-transparent outline-none placeholder-gray-400"
//                     placeholder="9876543210"
//                     aria-label="Enter mobile number"
//                   />
//                 </div>

//                 {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

//                 <div className="mt-48">
//                   <p className="text-sm font-normal text-[#909090]">
//                     By continuing, you accept you are 18+ years of age and agree to the Terms &amp; Conditions.
//                   </p>
//                   <button
//                     type="button"
//                     className={`w-full py-3 text-sm rounded-lg mt-6 transition ${
//                       isValid
//                         ? "bg-blue-500 text-white cursor-pointer hover:bg-blue-600"
//                         : "bg-[#77777740] text-[#817e7e] opacity-50 cursor-not-allowed"
//                     }`}
//                     disabled={!isValid}
//                     onClick={() => setShowOtpScreen(true)}
//                   >
//                     Get OTP
//                   </button>
//                 </div>
//               </form>
//             </>
//           ) : (
//             // OTP Verification Screen (Same Space)
//             <>
//               <h2 className="text-xl font-normal mb-3">Verify Phone</h2>
//               <p className="text-sm text-[#909090]">OTP has been sent to {mobile}</p>

//               <div className="flex justify-center items-center gap-5 mt-12">
//                 {otp.map((digit, index) => (
//                   <input
//                     key={index}
//                     id={`otp-${index}`}
//                     type="text"
//                     maxLength="1"
//                     className="w-14 h-14 text-center text-xl bg-[#77777740] rounded-full focus:outline-none focus:ring-0 border-none text-white"
//                     value={digit}
//                     onChange={(e) => handleOtpChange(index, e.target.value)}
//                   />
//                 ))}
//               </div>

//               <div className="mt-6 mb-4">
//                 {isResendAvailable ? (
//                   <button onClick={handleResendOtp} className="text-blue-400 cursor-pointer font-medium">
//                     Resend OTP
//                   </button>
//                 ) : (
//                   <p className="text-sm text-gray-400">Resend in {resendTimer}s</p>
//                 )}
//               </div>

//               <button
//                 className={`h-12 w-full font-normal text-sm max-w-xs mt-48 rounded-xl shadow-[0px_-2px_4px_0px_rgba(119,119,119,0.25)] ${
//                   otp.join("").length === 4
//                     ? "bg-blue-500 text-white cursor-pointer"
//                     : "bg-[rgba(255,255,255,0.07)] text-[#606060] cursor-not-allowed"
//                 }`}
//                 disabled={otp.join("").length !== 4}
//               >
//                 Verify OTP
//               </button>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MobileNumberInput;

"use client";
import { useState } from "react";
import Image from "next/image";
import AuthLayout from "../Auth/AuthLayout";


const MobileNumberScreen = ({ onNext }) => {
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(false);

  const validateMobile = (value) => {
    if (!/^[6-9]\d{9}$/.test(value)) {
      setError("Please enter a valid 10-digit mobile number");
      setIsValid(false);
    } else {
      setError("");
      setIsValid(true);
    }
    setMobile(value);
  };

  return (
    <AuthLayout>
      <h2 className="text-2xl font-normal">Enter your mobile number</h2>
      <p className="text-sm text-[#909090] mb-6">We&apos;ll send you an OTP</p>

      <form className="space-y-4">
        <div className="flex items-center bg-[#77777740] rounded-lg overflow-hidden shadow-md">
          <span className="px-7 py-2 text-white flex items-center gap-2">
            <Image src="/Image/Group.png" alt="India Flag" width={24} height={16} priority />
            +91
          </span>
          <div className="w-[1px] h-14 bg-[#312f2f]"></div>
          <input
            type="text"
            maxLength={10}
            value={mobile}
            onChange={(e) => validateMobile(e.target.value)}
            className="w-full px-3 py-2 text-white bg-transparent outline-none placeholder-gray-400"
            placeholder="9876543210"
            aria-label="Enter mobile number"
          />
        </div>

        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

        <div className="mt-48">
          <p className="text-sm font-normal text-[#909090]">
            By continuing, you accept you are 18+ years of age and agree to the Terms & Conditions.
          </p>
          <button
            type="button"
            className={`w-full py-3 text-sm rounded-lg mt-6 transition ${
              isValid
                ? "bg-blue-500 text-white cursor-pointer hover:bg-blue-600"
                : "bg-[#77777740] text-[#817e7e] opacity-50 cursor-not-allowed"
            }`}
            disabled={!isValid}
            onClick={() => onNext(mobile)}
          >
            Get OTP
          </button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default MobileNumberScreen;

