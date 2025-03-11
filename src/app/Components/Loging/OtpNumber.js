// import { useState, useEffect } from "react";

// export default function OtpVerification() {
//   const [otp, setOtp] = useState(["", "", "", ""]);
//   const [resendTimer, setResendTimer] = useState(12);

//   useEffect(() => {
//     const timer = resendTimer > 0 && setInterval(() => setResendTimer(resendTimer - 1), 1000);
//     return () => clearInterval(timer);
//   }, [resendTimer]);

//   const handleChange = (index, value) => {
//     if (isNaN(value)) return;
//     let newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-[#333333] px-6">
//     <div
//     className="relative mx-auto w-full max-w-[440px] min-h-screen px-8 py-10 bg-cover bg-center rounded-lg flex flex-col justify-center shadow-lg"
//     style={{ backgroundImage: "url('/Image/Group 1000005858.png')" }}
//   >
//     <div className="flex flex-col items-center justify-center h-screen bg-black text-white px-4">
//       <h2 className="text-lg font-semibold mb-2">Verify Phone</h2>
//       <p className="text-sm mb-4">OTP has been sent to 9892128907</p>
//       <div className="flex space-x-4 mb-4">
//         {otp.map((digit, index) => (
//           <input
//             key={index}
//             type="text"
//             maxLength="1"
//             className="w-12 h-12 text-center text-xl bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
//             value={digit}
//             onChange={(e) => handleChange(index, e.target.value)}
//           />
//         ))}
//       </div>
//       <p className="text-sm text-gray-400 mb-4">Resend {resendTimer > 0 ? `${resendTimer}s` : <span className="text-blue-400 cursor-pointer">Resend</span>}</p>
//       <button className="w-full max-w-xs bg-gray-700 text-gray-400 py-3 rounded-lg cursor-not-allowed">
//         Verify OTP
//       </button>
//     </div>
//     </div>
//     </div>
//   );
// }


// "use client";
// import { useState, useEffect } from "react";

// export default function OtpVerification() {
//   const [otp, setOtp] = useState(["", "", "", ""]);
//   const [resendTimer, setResendTimer] = useState(12);

//   useEffect(() => {
//     const timer = resendTimer > 0 && setInterval(() => setResendTimer(resendTimer - 1), 1000);
//     return () => clearInterval(timer);
//   }, [resendTimer]);

//   const handleChange = (index, value) => {
//     if (isNaN(value)) return;
//     let newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-[#333333] px-6">
//     <div
//     className="relative mx-auto w-full max-w-[440px] min-h-screen px-8 py-10 bg-cover bg-center rounded-lg flex flex-col justify-center shadow-lg"
//     style={{ backgroundImage: "url('/Image/Group 1000005858.png')" }}
//   >
//     {/* <div className="flex flex-col items-center justify-center h-screen bg-black text-white px-4"> */}
//       <h2 className="text-lg font-semibold mb-2">Verify Phone</h2>
//       <p className="text-sm mb-4">OTP has been sent to 9892128907</p>
//       <div className="flex space-x-4 mb-4">
//         {otp.map((digit, index) => (
//           <input
//             key={index}
//             type="text"
//             maxLength="1"
//             className="w-12 h-12 text-center text-xl bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
//             value={digit}
//             onChange={(e) => handleChange(index, e.target.value)}
//           />
//         ))}
//       </div>
//       <p className="text-sm text-gray-400 mb-4">Resend {resendTimer > 0 ? `${resendTimer}s` : <span className="text-blue-400 cursor-pointer">Resend</span>}</p>
//       <button className="w-full max-w-xs bg-gray-700 text-gray-400 py-3 rounded-lg cursor-not-allowed">
//         Verify OTP
//       </button>
//     </div>
//     </div>
//     // </div>
//   );
// }


// "use client";

// import Image from "next/image";
// import { useState, useEffect } from "react";

// const OtpNumber = () => {
//   const [mobile, setMobile] = useState("");
//   const [error, setError] = useState("");
//   const [otp, setOtp] = useState(["", "", "", ""]);
//   const [resendTimer, setResendTimer] = useState(12);
//   const [isOtpSent, setIsOtpSent] = useState(false);

//   useEffect(() => {
//     if (resendTimer > 0) {
//       const timer = setInterval(() => setResendTimer((prev) => prev - 1), 1000);
//       return () => clearInterval(timer);
//     }
//   }, [resendTimer]);

//   const validateMobile = (value) => {
//     if (!/^[6-9]\d{9}$/.test(value)) {
//       setError("Please enter a valid 10-digit mobile number");
//     } else {
//       setError("");
//     }
//     setMobile(value);
//   };

//   const handleOtpChange = (index, value) => {
//     if (isNaN(value)) return;
//     let newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-[#333333] px-6">
//       <div
//         className="relative mx-auto w-full max-w-[440px] min-h-screen px-8 py-10 bg-cover bg-center rounded-lg flex flex-col justify-center shadow-lg"
//         style={{ backgroundImage: "url('/Image/Group 1000005858.png')" }}
//       >
//         <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
//         <div className="relative z-10 text-center text-white mt-10">
//           {!isOtpSent ? (
//             <>
//               <h2 className="text-2xl font-normal mb-2">Enter your mobile number</h2>
//               <p className="text-sm text-[#909090] mb-6">We'll send you an OTP</p>
//               <div className="flex items-center bg-[#77777740] rounded-lg overflow-hidden shadow-[0px_2px_4px_0px_#777777]">
//                 <span className="px-7 py-2 text-white flex items-center gap-2">
//                   <Image src="/Image/Group.png" alt="India Flag" width={24} height={16} />
//                   +91
//                 </span>
//                 <div className="w-[1px] h-14 bg-[#252323]"></div>
//                 <input
//                   type="text"
//                   maxLength={10}
//                   value={mobile}
//                   onChange={(e) => validateMobile(e.target.value)}
//                   className="w-full px-3 py-2 text-white bg-transparent outline-none placeholder-gray-400"
//                   placeholder="9876543210"
//                 />
//               </div>
//               {error && <p className="text-red-500 text-sm">{error}</p>}
//               <p className="text-sm font-normal mt-5">
//                 By continuing, you accept you are 18+ years of age and agree to the Terms and Conditions
//               </p>
//               <button
//                 type="button"
//                 className="w-full py-3 text-sm rounded-lg text-[#817e7e] bg-[#77777740] mt-6 opacity-50"
//                 disabled={!!error}
//                 onClick={() => setIsOtpSent(true)}
//               >
//                 Get OTP
//               </button>
//             </>
//           ) : (
//             <>
//               <h2 className="text-lg font-semibold mb-2">Verify Phone</h2>
//               <p className="text-sm mb-4">OTP has been sent to {mobile}</p>
//               <div className="flex space-x-4 mb-4">
//                 {otp.map((digit, index) => (
//                   <input
//                     key={index}
//                     type="text"
//                     maxLength="1"
//                     className="w-12 h-12 text-center text-xl bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
//                     value={digit}
//                     onChange={(e) => handleOtpChange(index, e.target.value)}
//                   />
//                 ))}
//               </div>
//               <p className="text-sm text-gray-400 mb-4">
//                 Resend {resendTimer > 0 ? `${resendTimer}s` : <span className="text-blue-400 cursor-pointer">Resend</span>}
//               </p>
//               <button className="w-full max-w-xs bg-gray-700 text-gray-400 py-3 rounded-lg cursor-not-allowed">
//                 Verify OTP
//               </button>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OtpNumber;


// "use client";

// import { useState, useEffect } from "react";

// export default function OtpVerification() {
//   const [otp, setOtp] = useState(["", "", "", ""]);
//   const [resendTimer, setResendTimer] = useState(12);
//   const [mobile, setMobile] = useState("9892128907");

//   useEffect(() => {
//     const timer =
//       resendTimer > 0 &&
//       setInterval(() => setResendTimer((prev) => prev - 1), 1000);
//     return () => clearInterval(timer);
//   }, [resendTimer]);

//   const handleOtpChange = (index, value) => {
//     if (isNaN(value)) return;

//     let newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     // Move to the next input if a number is entered
//     if (value && index < otp.length - 1) {
//       document.getElementById(`otp-${index + 1}`).focus();
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-[#333333] px-6">
//       <div
//         className="relative mx-auto w-full max-w-[440px] min-h-screen px-8 py-10 bg-cover bg-center rounded-lg flex flex-col justify-center shadow-lg"
//         style={{ backgroundImage: "url('/Image/Group 1000005858.png')" }}
//       >
//         <h2 className="text-lg font-semibold mb-2 text-white">Verify Phone</h2>
//         <p className="text-sm mb-4 text-white">OTP has been sent to {mobile}</p>
//         <div className="flex space-x-4 mb-4">
//           {otp.map((digit, index) => (
//             <input
//               key={index}
//               id={`otp-${index}`}
//               type="text"
//               maxLength="1"
//               className="w-14 h-14 text-center text-xl bg-gray-800 border border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 text-white"
//               value={digit}
//               onChange={(e) => handleOtpChange(index, e.target.value)}
//             />
//           ))}
//         </div>
//         <p className="text-sm text-gray-400 mb-4">
//           Resend {resendTimer > 0 ? `${resendTimer}s` : <span className="text-blue-400 cursor-pointer">Resend</span>}
//         </p>
//         <button className="w-full max-w-xs bg-gray-700 text-gray-400 py-3 rounded-lg cursor-not-allowed">
//           Verify OTP
//         </button>
//       </div>
//     </div>
//   );
// }


// "use client";
// import { useState, useEffect } from "react";

// export default function OtpVerification() {
//   const [otp, setOtp] = useState(["", "", "", ""]);
//   const [resendTimer, setResendTimer] = useState(12);

//   useEffect(() => {
//     const timer =
//       resendTimer > 0 &&
//       setInterval(() => setResendTimer((prev) => prev - 1), 1000);
//     return () => clearInterval(timer);
//   }, [resendTimer]);

//   const handleOtpChange = (index, value) => {
//     if (isNaN(value)) return;
//     let newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     if (value && index < otp.length - 1) {
//       document.getElementById(`otp-${index + 1}`).focus();
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen  bg-[#333333] px-6">
//       <div
//         className="relative mx-auto w-full  max-w-[440px] min-h-screen px-8 py-10 bg-cover bg-center rounded-lg flex flex-col justify-center shadow-lg"
//         style={{ backgroundImage: "url('/Image/Group 1000005858.png')" }}
//       >
//         <div className="absolute inset-0 bg-black/50 rounded-lg"></div>

//         <div className="relative z-10 text-center text-white mt-10">
//         <h2 className="text-lg text-white font-semibold mb-2 text-center">Verify Phone</h2>
//         <p className="text-sm mb-4 text-center">OTP has been sent to 9892128907</p>
//         <div className="flex justify-center items-center space-x-4 mb-4">
//           {otp.map((digit, index) => (
//             <input
//               key={index}
//               id={`otp-${index}`}
//               type="text"
//               maxLength="1"
//               className="w-12 h-12 text-center text-xl bg-[#77777740] rounded-full "
//               value={digit}
//               onChange={(e) => handleOtpChange(index, e.target.value)}
//             />
//           ))}
//         </div>
//         <p className="text-sm text-gray-400 mb-4 text-center">
//           Resend {resendTimer > 0 ? `${resendTimer}s` : <span className="text-blue-400 cursor-pointer">Resend</span>}
//         </p>
//         <button className="w-full max-w-xs bg-[#77777740] text-gray-400 py-3 rounded-lg cursor-not-allowed">
//           Verify OTP
//         </button>
//         </div>
//       </div>
//     </div>
//   );
// }



// "use client";
// import { useState, useEffect } from "react";

// export default function OtpVerification() {
//   const [otp, setOtp] = useState(["", "", "", ""]);
//   const [resendTimer, setResendTimer] = useState(12);

//   useEffect(() => {
//     const timer =
//       resendTimer > 0 &&
//       setInterval(() => setResendTimer((prev) => prev - 1), 1000);
//     return () => clearInterval(timer);
//   }, [resendTimer]);

//   const handleOtpChange = (index, value) => {
//     if (isNaN(value)) return;

//     let newOtp = [...otp];

//     // Backspace par puri OTP clear karna
//     if (value === "" && index === 0) {
//       setOtp(["", "", "", ""]);
//       return;
//     }

//     newOtp[index] = value;
//     setOtp(newOtp);

//     if (value && index < otp.length - 1) {
//       document.getElementById(`otp-${index + 1}`).focus();
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-[#333333] px-6">
//       <div
//         className="relative mx-auto w-full max-w-[440px] min-h-screen px-8 py-10 bg-cover bg-center rounded-lg flex flex-col justify-center shadow-lg"
//         style={{ backgroundImage: "url('/Image/Group 1000005858.png')" }}
//       >
//         <div className="absolute inset-0 bg-black/50 rounded-lg"></div>

//         <div className="relative z-10 text-center text-white mt-10">
//           <h2 className="text-lg text-white font-semibold mb-2 text-center">
//             Verify Phone
//           </h2>
//           <p className="text-sm mb-4 text-center">
//             OTP has been sent to 9892128907
//           </p>
//           <div className="flex justify-center items-center space-x-4 mb-4">
//             {otp.map((digit, index) => (
//               <input
//                 key={index}
//                 id={`otp-${index}`}
//                 type="text"
//                 maxLength="1"
//                 className="w-12 h-12 text-center text-xl bg-[#77777740] rounded-full 
//                   focus:outline-none focus:ring-0 border-none"
//                 value={digit}
//                 onChange={(e) => handleOtpChange(index, e.target.value)}
//                 onKeyDown={(e) => {
//                   if (e.key === "Backspace" && index === 0) {
//                     setOtp(["", "", "", ""]);
//                   }
//                 }}
//               />
//             ))}
//           </div>
//           <p className="text-sm text-gray-400 mb-4 text-center">
//             Resend{" "}
//             {resendTimer > 0 ? (
//               `${resendTimer}s`
//             ) : (
//               <span className="text-blue-400 cursor-pointer">Resend</span>
//             )}
//           </p>
//           <button className="w-full max-w-xs bg-[#77777740] text-gray-400 py-3 rounded-lg cursor-not-allowed">
//             Verify OTP
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";
// import { useState, useEffect } from "react";

// export default function OtpVerification() {
//   const [otp, setOtp] = useState(["", "", "", ""]);
//   const [resendTimer, setResendTimer] = useState(30);

//   useEffect(() => {
//     const timer =
//       resendTimer > 0 &&
//       setInterval(() => setResendTimer((prev) => prev - 1), 1000);
//     return () => clearInterval(timer);
//   }, [resendTimer]);

//   const handleOtpChange = (index, value) => {
//     if (isNaN(value)) return;

//     let newOtp = [...otp];

//     if (value === "" && index === 0) {
//       setOtp(["", "", "", ""]);
//       return;
//     }

//     newOtp[index] = value;
//     setOtp(newOtp);

//     if (value && index < otp.length - 1) {
//       document.getElementById(`otp-${index + 1}`).focus();
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-[#333333] px-6">
//       <div
//         className="relative mx-auto w-full max-w-[440px] min-h-screen  bg-cover bg-center rounded-lg flex flex-col justify-center shadow-lg"
//         style={{ backgroundImage: "url('/Image/Group 1000005858.png')" }}
//       >
//         <div className="absolute inset-0 bg-black/50 rounded-lg"></div>

//         <div className="relative z-10 text-center mt-12 text-white">
//           <h2 className="text-xl font-normal mb-3">Verify Phone</h2>
//           <p className="text-sm  text-[#909090]">OTP has been sent to 9892128907</p>

//           <div className="flex justify-center items-center gap-5 mt-12 ">
//             {otp.map((digit, index) => (
//               <input
//                 key={index}
//                 id={`otp-${index}`}
//                 type="text"
//                 maxLength="1"
//                 className="w-14 h-14 text-center text-xl bg-[#77777740] rounded-full focus:outline-none focus:ring-0 border-none text-white"
//                 value={digit}
//                 onChange={(e) => handleOtpChange(index, e.target.value)}
//                 onKeyDown={(e) => {
//                   if (e.key === "Backspace" && index === 0) {
//                     setOtp(["", "", "", ""]);
//                   }
//                 }}
//               />
//             ))}
//           </div>

//           <p className="text-sm text-gray-400 mt-6 mb-4">
//             Resend {resendTimer > 0 ? `${resendTimer}s` : <span className="text-blue-400 cursor-pointer">Resend</span>}
//           </p>

//           <button
//   className="h-12 w-full font-normal text-sm max-w-xs mt-48 bg-[rgba(255,255,255,0.07)] text-[#606060] rounded-xl shadow-[0px_-2px_4px_0px_rgba(119,119,119,0.25)] cursor-pointer"
// >
//   Verify OTP
// </button>

//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";
// import { useState, useEffect } from "react";

// export default function OtpVerification() {
//   const [otp, setOtp] = useState(["", "", "", ""]);
//   const [resendTimer, setResendTimer] = useState(30);
//   const [isResendAvailable, setIsResendAvailable] = useState(false);

//   useEffect(() => {
//     if (resendTimer > 0) {
//       const timer = setInterval(() => setResendTimer((prev) => prev - 1), 1000);
//       return () => clearInterval(timer);
//     } else {
//       setIsResendAvailable(true);
//     }
//   }, [resendTimer]);

//   const handleOtpChange = (index, value) => {
//     if (isNaN(value)) return;

//     let newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     if (value && index < otp.length - 1) {
//       document.getElementById(`otp-${index + 1}`).focus();
//     }
//   };

//   const handleResendOtp = () => {
//     setOtp(["", "", "", ""]); // OTP reset
//     setResendTimer(30); // Timer reset
//     setIsResendAvailable(false);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-[#333333] px-6">
//       <div
//         className="relative mx-auto w-full max-w-[440px] min-h-screen bg-cover bg-center rounded-lg flex flex-col justify-center shadow-lg"
//         style={{ backgroundImage: "url('/Image/Group 1000005858.png')" }}
//       >
//         <div className="absolute inset-0 bg-black/50 rounded-lg"></div>

//         <div className="relative z-10 text-center mt-12 text-white">
//           <h2 className="text-xl font-normal mb-3">Verify Phone</h2>
//           <p className="text-sm text-[#909090]">OTP has been sent to 9892128907</p>

//           <div className="flex justify-center items-center gap-5 mt-12">
//             {otp.map((digit, index) => (
//               <input
//                 key={index}
//                 id={`otp-${index}`}
//                 type="text"
//                 maxLength="1"
//                 className="w-14 h-14 text-center text-xl bg-[#77777740] rounded-full focus:outline-none focus:ring-0 border-none text-white"
//                 value={digit}
//                 onChange={(e) => handleOtpChange(index, e.target.value)}
//               />
//             ))}
//           </div>

//           {/* Resend Timer OR Button */}
//           <div className="mt-6 mb-4">
//             {isResendAvailable ? (
//               <button
//                 onClick={handleResendOtp}
//                 className="text-blue-400 cursor-pointer font-medium"
//               >
//                 Resend OTP
//               </button>
//             ) : (
//               <p className="text-sm text-gray-400">Resend in {resendTimer}s</p>
//             )}
//           </div>

//           {/* Verify OTP Button */}
//           <button
//             className={`h-12 w-full font-normal text-sm max-w-xs mt-48 rounded-xl shadow-[0px_-2px_4px_0px_rgba(119,119,119,0.25)] ${
//               otp.join("").length === 4
//                 ? "bg-blue-500 text-white cursor-pointer"
//                 : "bg-[rgba(255,255,255,0.07)] text-[#606060] cursor-not-allowed"
//             }`}
//             disabled={otp.join("").length !== 4}
//           >
//             Verify OTP
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import AuthLayout from "../Auth/AuthLayout";
// const OtpVerificationScreen = ({ mobile, onBack }) => {
//   const [otp, setOtp] = useState(["", "", "", ""]);
//   const [resendTimer, setResendTimer] = useState(30);
//   const [isResendAvailable, setIsResendAvailable] = useState(false);

//   useEffect(() => {
//     if (resendTimer > 0) {
//       const timer = setInterval(() => setResendTimer((prev) => prev - 1), 1000);
//       return () => clearInterval(timer);
//     } else {
//       setIsResendAvailable(true);
//     }
//   }, [resendTimer]);

//   const handleOtpChange = (index, value) => {
//     if (isNaN(value)) return;
//     let newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);
//     if (value && index < otp.length - 1) {
//       document.getElementById(`otp-${index + 1}`).focus();
//     }
//   };

//   const handleResendOtp = () => {
//     setOtp(["", "", "", ""]);
//     setResendTimer(30);
//     setIsResendAvailable(false);
//   };

//   return (
//     <AuthLayout>
//       <h2 className="text-xl font-normal mb-3">Verify Phone</h2>
//       <p className="text-sm text-[#909090]">OTP has been sent to {mobile}</p>

//       <div className="flex justify-center items-center gap-5 mt-12">
//         {otp.map((digit, index) => (
//           <input
//             key={index}
//             id={`otp-${index}`}
//             type="text"
//             maxLength="1"
//             className="w-14 h-14 text-center text-xl bg-[#77777740] rounded-full focus:outline-none text-white"
//             value={digit}
//             onChange={(e) => handleOtpChange(index, e.target.value)}
//           />
//         ))}
//       </div>

//       <div className="mt-6 mb-4">
//         {isResendAvailable ? (
//           <button onClick={handleResendOtp} className="text-blue-400 cursor-pointer font-medium">
//             Resend OTP
//           </button>
//         ) : (
//           <p className="text-sm text-gray-400">Resend in {resendTimer}s</p>
//         )}
//       </div>

//       <button
//         className={`h-12 w-full font-normal items-center justify-center mx-auto text-sm max-w-xs mt-48 rounded-xl ${
//           otp.join("").length === 4
//             ? "bg-blue-500 text-white cursor-pointer"
//             : "bg-[rgba(255,255,255,0.07)] text-[#606060] cursor-not-allowed"
//         }`}
//         disabled={otp.join("").length !== 4}
//       >
//         Verify OTP
//       </button>
//     </AuthLayout>
//   );
// };

// export default OtpVerificationScreen;



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
      onVerify(); // Navigate to OTPVerified component
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
