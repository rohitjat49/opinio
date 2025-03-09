// import Image from "next/image";
// import { Bell, Wallet } from "lucide-react";

// const UserProfile = () => {
//   return (
//     <div className="flex items-center gap-4 bg-black text-white p-4 rounded-xl">
//       {/* Profile Section */}
//       <div className="flex items-center gap-2">
//         <div className="w-12 h-12 rounded-full border-2 border-gray-500 p-[2px]">
//           <Image
//             src="/profile.jpg" // Change this to the actual image path
//             alt="User Profile"
//             width={48}
//             height={48}
//             className="rounded-full"
//           />
//         </div>
//         <span className="text-lg font-medium">Hey, Pratyaksh</span>
//       </div>

//       {/* Icons Section */}
//       <div className="flex gap-3 ml-auto">
//         <div className="relative p-2 bg-gray-800 rounded-full">
//           <Bell className="w-5 h-5 text-white" />
//         </div>

//         <div className="p-2 bg-gray-800 rounded-full">
//           <Wallet className="w-5 h-5 text-white" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;

import Image from "next/image";
import { Bell, Wallet } from "lucide-react";

const UserProfile = () => {
  return (
    <div className="flex items-center gap-6 bg-[#151414] text-white py-4 px-4 rounded-b-4xl">
      {/* Profile Section */}
      <div className="flex items-center gap-2 ">
        <div className="w-12 h-12 rounded-full  p-[2px]">
          <Image
            src="/Image/guest-1.jpeg"
            alt="User Profile"
            width={48}
            height={48}
            className="rounded-full"
          />
        </div>
        <span className="text-lg font-medium">Hey, Pratyaksh</span>
      </div>

      {/* Icons Section */}
      <div className="flex gap-4 ml-auto">
        {/* Bell Icon Button */}
        <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 shadow-lg shadow-gray-900 ring-1 ring-blue-300">
          <Bell className="w-6 h-6 text-white" />
          {/* Notification Badge */}
        </div>

        {/* Wallet Icon Button */}
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 shadow-lg shadow-gray-900 ring-1 ring-blue-300">
          <Wallet className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
