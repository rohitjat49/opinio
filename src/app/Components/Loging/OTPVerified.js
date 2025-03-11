// "use client";

// import Image from "next/image";
// import React from "react";

// const OTPVerified = () => {
//   return (
//     <div
//       className="flex flex-col items-center justify-center min-h-screen text-white bg-cover bg-center"
//       style={{ backgroundImage: "url('/Image/Group 1000005858.png')" }} // Ensure the correct path
//     >
//       <div className="flex flex-col items-center  p-6 rounded-2xl shadow-lg">
//         {/* Success GIF */}
//         <Image
//           src="/Image/OTPVerified.gif" 
//           alt="Success"
//           width={80}
//           height={80}
//           className="w-36 h-36"
//         />

//         {/* Message */}
//         <p className="mt-4 text-center text-lg font-medium">
//           OTP Verified Successfully, you can continue to the app
//         </p>

//         {/* Button */}
        
//         <button
//         className='h-12 w-full font-normal items-center justify-center mx-auto text-sm max-w-xs mt-48 rounded-xl 
//             bg-blue-500 text-white cursor-pointer'
//       >
//         Done
//       </button>
//       </div>
//     </div>
//   );
// };

// export default OTPVerified;

// "use client";

// import Image from "next/image";
// import React from "react";
// import AuthLayout from "../Auth/AuthLayout";

// const OTPVerified = () => {
//   return (
//     <AuthLayout>
//     <div className="flex flex-col items-center justify-center min-h-screen text-white ">
//       <div className="flex flex-col items-center p-6 ">
//         {/* Success GIF */}
//         <Image
//           src="/Image/OTPVerified.gif"
//           alt="Success"
//           width={80}
//           height={80}
//           className="w-36 h-36"
//         />

//         {/* Message */}
//         <p className="mt-4 text-center text-lg font-medium">
//           OTP Verified Successfully, you can continue to the app
//         </p>

//         {/* Button */}
//         <button
//           className="h-12 w-full font-normal items-center justify-center mx-auto text-sm max-w-xs mt-8 rounded-xl bg-blue-500 text-white cursor-pointer"
//         >
//           Done
//         </button>
//       </div>
//     </div>
//     </AuthLayout>
//   );
// };

// export default OTPVerified;

// "use client";

// import Image from "next/image";
// import React from "react";
// import AuthLayout from "../Auth/AuthLayout";

// const OTPVerified = () => {
//   return (
//     <AuthLayout>
//       <div className="flex items-center justify-center min-h-screen text-white">
//         <div className="flex flex-col items-center mt-12 p-6">
//           {/* Success GIF */}
//           <Image
//             src="/Image/OTPVerified.gif"
//             alt="Success"
//             width={80}
//             height={80}
//             className="w-36 h-36"
//           />

//           {/* Message */}
//           <p className="mt-4 text-center text-lg font-medium">
//             OTP Verified Successfully, you can continue to the app
//           </p>

//           {/* Button */}
//           <button className="h-12 w-full font-normal mt-48 flex items-center justify-center text-sm max-w-xs  rounded-xl bg-blue-500 text-white cursor-pointer hover:bg-blue-600 transition">
//             Done
//           </button>
//         </div>
//       </div>
//     </AuthLayout>
//   );
// };

// export default OTPVerified;


"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import AuthLayout from "../Auth/AuthLayout";

const OTPVerified = () => {
  const router = useRouter(); // Initialize router

  const handleDoneClick = () => {
    router.push("Home"); // Navigate to homepage
  };

  return (
    <AuthLayout>
      <div className="flex items-center justify-center min-h-screen text-white">
        <div className="flex flex-col items-center mt-12 p-6">
          {/* Success GIF */}
          <Image
            src="/Image/OTPVerified.gif"
            alt="Success"
            width={80}
            height={80}
            className="w-36 h-36"
          />

          {/* Message */}
          <p className="mt-4 text-center text-lg font-medium">
            OTP Verified Successfully, you can continue to the app
          </p>

          {/* Button */}
          <button
            onClick={handleDoneClick} // Call function on click
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
