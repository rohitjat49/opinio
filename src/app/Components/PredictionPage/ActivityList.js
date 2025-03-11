
// "use client";

// import { useState } from "react";
// import Image from "next/image";

// const ActivityList = () => {
//   const allUsers = [
//     { id: 1, leftImg: "/Image/guest-1.jpeg", rightImg: "/Image/guest-2.jpeg" },
//     { id: 2, leftImg: "/Image/guest-2.jpeg", rightImg: "/Image/guest-1.jpeg" },
//     { id: 3, leftImg: "/Image/guest-1.jpeg", rightImg: "/Image/guest-2.jpeg" },
//     { id: 4, leftImg: "/Image/guest-2.jpeg", rightImg: "/Image/guest-1.jpeg" },
//     { id: 5, leftImg: "/Image/guest-1.jpeg", rightImg: "/Image/guest-2.jpeg" },
//   ];

//   const [visibleUsers, setVisibleUsers] = useState(4);

//   const handleLoadMore = () => {
//     setVisibleUsers((prev) => Math.min(prev + 4, allUsers.length));
//   };

//   return (
//     <>
//       <div
//         className="bg-[#121212] p-1 rounded-2xl w-full max-w-lg mx-auto 
//         shadow-[0px_4px_10px_rgba(0,0,0,0.3),0px_15px_35px_rgba(0,0,0,0.7)]"
//       >
//         {allUsers.slice(0, visibleUsers).map((user) => (
//           <div
//             key={user.id}
//             className="flex items-center justify-center gap-1 py-3 "
//           >
//             {/* Left Side */}
//             <div className="flex flex-col items-center gap-1">
//               <Image
//                 src={user.leftImg}
//                 alt="User"
//                 width={64}
//                 height={64}
//                 className="w-16 h-16 rounded-full border-2 border-blue-500"
//               />
//               <p className="text-white text-sm font-semibold">GUEST</p>
//             </div>

//             {/* Check Image */}
//             <Image
//               src="/Image/rigth.png"
//               alt="Check"
//               width={40}
//               height={40}
//               className="w-10 h-10"
//             />

//             {/* Betting Details */}
//             <div className="flex flex-col items-center">
//               <div className="flex rounded-lg overflow-hidden shadow-md">
//                 <button className="text-blue-400 cursor-pointer text-lg font-bold px-4 py-2 bg-[#d8e9fe] hover:bg-blue-100 transition">
//                   ₹ 4.5
//                 </button>
//                 <button className="text-red-400 cursor-pointer text-lg font-bold px-4 py-2 bg-[#ffe0e0] hover:bg-red-100 transition">
//                   ₹ 4.5
//                 </button>
//               </div>
//               <p className="text-gray-400 text-xs mt-3">a few seconds ago</p>
//             </div>

//             {/* Cross Image */}
//             <Image
//               src="/Image/cross.png"
//               alt="Cross"
//               width={40}
//               height={40}
//               className="w-10 h-10"
//             />

//             {/* Right Side */}
//             <div className="flex flex-col items-center gap-1">
//               <Image
//                 src={user.rightImg}
//                 alt="User"
//                 width={64}
//                 height={64}
//                 className="w-16 h-16 rounded-full border-2 border-red-500"
//               />
//               <p className="text-white text-sm font-semibold">GUEST</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* View More Button (Outside the Box) */}
//       {visibleUsers < allUsers.length && (
//         <button
//           onClick={handleLoadMore}
//           className="bg-[#212121] text-white px-4 py-3 my-8 rounded-xl font-medium text-xs  mx-auto block shadow-md max-w-lg"
//         >
//           View More
//         </button>
//       )}
//     </>
//   );
// };

// export default ActivityList;

// "use client";

// import { useState } from "react";
// import Image from "next/image";

// const ActivityList = () => {
//   const allUsers = [
//     { id: 1, leftImg: "/Image/guest-1.jpeg", rightImg: "/Image/guest-2.jpeg" },
//     { id: 2, leftImg: "/Image/guest-2.jpeg", rightImg: "/Image/guest-1.jpeg" },
//     { id: 3, leftImg: "/Image/guest-1.jpeg", rightImg: "/Image/guest-2.jpeg" },
//     { id: 4, leftImg: "/Image/guest-2.jpeg", rightImg: "/Image/guest-1.jpeg" },
//     { id: 5, leftImg: "/Image/guest-1.jpeg", rightImg: "/Image/guest-2.jpeg" },
//   ];

//   const [visibleUsers, setVisibleUsers] = useState(4);

//   const handleLoadMore = () => {
//     setVisibleUsers((prev) => Math.min(prev + 4, allUsers.length));
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <div
//         className="bg-[#121212] p-4 rounded-2xl w-full max-w-lg mx-auto 
//         shadow-[0px_4px_10px_rgba(0,0,0,0.3),0px_15px_35px_rgba(0,0,0,0.7)]"
//       >
//         {allUsers.slice(0, visibleUsers).map((user) => (
//           <div
//             key={user.id}
//             className="flex items-center justify-between gap-0 py-3 border-b border-gray-700"
//           >
//             {/* Left User */}
//             <div className="flex flex-col items-center gap-1">
//               <Image
//                 src={user.leftImg}
//                 alt="User"
//                 width={64}
//                 height={64}
//                 className="rounded-full border-2 border-blue-500"
//               />
//               <p className="text-white text-sm font-semibold">GUEST</p>
//             </div>

//             {/* Check Icon */}
//             <Image src="/Image/rigth.png" alt="Check" width={32} height={32} />

//             {/* Betting Details */}
//             <div className="flex flex-col items-center">
//               <div className="flex rounded-lg overflow-hidden shadow-md">
//                 <button className="text-blue-400 text-lg font-bold px-3 py-2 bg-[#d8e9fe] hover:bg-blue-100 transition">
//                   ₹ 4.5
//                 </button>
//                 <button className="text-red-400 text-lg font-bold px-3 py-2 bg-[#ffe0e0] hover:bg-red-100 transition">
//                   ₹ 4.5
//                 </button>
//               </div>
//               <p className="text-gray-400 text-xs mt-2">a few seconds ago</p>
//             </div>

//             {/* Cross Icon */}
//             <Image src="/Image/cross.png" alt="Cross" width={32} height={32} />

//             {/* Right User */}
//             <div className="flex flex-col items-center gap-1">
//               <Image
//                 src={user.rightImg}
//                 alt="User"
//                 width={64}
//                 height={64}
//                 className="rounded-full border-2 border-red-500"
//               />
//               <p className="text-white text-sm font-semibold">GUEST</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Load More Button */}
//       {visibleUsers < allUsers.length && (
//         <button
//           onClick={handleLoadMore}
//           className="bg-[#212121] text-white px-4 py-3 my-4 rounded-xl font-medium text-xs mx-auto block shadow-md"
//         >
//           View More
//         </button>
//       )}
//     </div>
//   );
// };

// export default ActivityList;


// "use client";

// import { useState } from "react";
// import Image from "next/image";

// const ActivityList = () => {
//   const allUsers = [
//     { id: 1, leftImg: "/Image/guest-1.jpeg", rightImg: "/Image/guest-2.jpeg" },
//     { id: 2, leftImg: "/Image/guest-2.jpeg", rightImg: "/Image/guest-1.jpeg" },
//     { id: 3, leftImg: "/Image/guest-1.jpeg", rightImg: "/Image/guest-2.jpeg" },
//     { id: 4, leftImg: "/Image/guest-2.jpeg", rightImg: "/Image/guest-1.jpeg" },
//     { id: 5, leftImg: "/Image/guest-1.jpeg", rightImg: "/Image/guest-2.jpeg" },
//   ];

//   const [visibleUsers, setVisibleUsers] = useState(4);

//   const handleLoadMore = () => {
//     setVisibleUsers((prev) => Math.min(prev + 4, allUsers.length));
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <div
//         className="bg-[#121212] p-4 rounded-2xl w-full max-w-lg mx-auto 
//         shadow-[0px_4px_10px_rgba(0,0,0,0.3),0px_15px_35px_rgba(0,0,0,0.7)]"
//       >
//         {allUsers.slice(0, visibleUsers).map((user) => (
//           <div
//             key={user.id}
//             className="flex items-center justify-between gap-0 py-3 border-b border-gray-700"
//           >
//             {/* Left User */}
//             <div className="flex flex-col items-center gap-1">
//               <Image
//                 src={user.leftImg}
//                 alt="User"
//                 width={64}
//                 height={64}
//                 className="rounded-full border-2 border-blue-500"
//               />
//               <p className="text-white text-sm font-semibold">GUEST</p>
//             </div>

//             {/* Cross Icon */}
//             <Image src="/Image/cross.png" alt="Cross" width={32} height={32} />

//             {/* Betting Buttons */}
//             <div className="flex rounded-lg overflow-hidden shadow-md">
//               <button className="text-blue-400 text-lg font-bold px-3 py-2 bg-[#d8e9fe] hover:bg-blue-100 transition">
//                 ₹ 4.5
//               </button>
//               <button className="text-red-400 text-lg font-bold px-3 py-2 bg-[#ffe0e0] hover:bg-red-100 transition">
//                 ₹ 4.5
//               </button>
//             </div>

//             {/* Check Icon */}
//             <Image src="/Image/rigth.png" alt="Check" width={32} height={32} />

//             {/* Right User */}
//             <div className="flex flex-col items-center gap-1">
//               <Image
//                 src={user.rightImg}
//                 alt="User"
//                 width={64}
//                 height={64}
//                 className="rounded-full border-2 border-red-500"
//               />
//               <p className="text-white text-sm font-semibold">GUEST</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Load More Button */}
//       {visibleUsers < allUsers.length && (
//         <button
//           onClick={handleLoadMore}
//           className="bg-[#212121] text-white px-4 py-3 my-4 rounded-xl font-medium text-xs mx-auto block shadow-md"
//         >
//           View More
//         </button>
//       )}
//     </div>
//   );
// };

// export default ActivityList;


// "use client";

// import { useState } from "react";
// import Image from "next/image";

// const ActivityList = () => {
//   const allUsers = [
//     { id: 1, leftImg: "/Image/guest-1.jpeg", rightImg: "/Image/guest-2.jpeg" },
//     { id: 2, leftImg: "/Image/guest-2.jpeg", rightImg: "/Image/guest-1.jpeg" },
//     { id: 3, leftImg: "/Image/guest-1.jpeg", rightImg: "/Image/guest-2.jpeg" },
//     { id: 4, leftImg: "/Image/guest-2.jpeg", rightImg: "/Image/guest-1.jpeg" },
//     { id: 5, leftImg: "/Image/guest-1.jpeg", rightImg: "/Image/guest-2.jpeg" },
//   ];

//   const [visibleUsers, setVisibleUsers] = useState(4);

//   const handleLoadMore = () => {
//     setVisibleUsers((prev) => Math.min(prev + 4, allUsers.length));
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <div
//         className="bg-[#121212] p-4 rounded-2xl w-full max-w-lg mx-auto 
//         shadow-[0px_4px_10px_rgba(0,0,0,0.3),0px_15px_35px_rgba(0,0,0,0.7)]"
//       >
//         {allUsers.slice(0, visibleUsers).map((user) => (
//           <div
//             key={user.id}
//             className="flex items-center justify-between gap-4 py-3 border-b border-gray-700"
//           >
//             {/* Left User Image (Centered) */}
//             <div className="flex items-center">
//               <Image
//                 src={user.leftImg}
//                 alt="User"
//                 width={64}
//                 height={64}
//                 className="rounded-full border-2 border-blue-500"
//               />
//             </div>

//             {/* Cross Icon (Centered) */}
//             <div className="flex items-center">
//               <Image src="/Image/cross.png" alt="Cross" width={32} height={32} />
//             </div>

//             {/* Betting Buttons */}
//             <div className="flex rounded-lg overflow-hidden shadow-md">
//               <button className="text-blue-400 text-lg font-bold px-3 py-2 bg-[#d8e9fe] hover:bg-blue-100 transition">
//                 ₹ 4.5
//               </button>
//               <button className="text-red-400 text-lg font-bold px-3 py-2 bg-[#ffe0e0] hover:bg-red-100 transition">
//                 ₹ 4.5
//               </button>
//             </div>

//             {/* Check Icon (Centered) */}
//             <div className="flex items-center">
//               <Image src="/Image/rigth.png" alt="Check" width={32} height={32} />
//             </div>

//             {/* Right User Image (Centered) */}
//             <div className="flex items-center">
//               <Image
//                 src={user.rightImg}
//                 alt="User"
//                 width={64}
//                 height={64}
//                 className="rounded-full border-2 border-red-500"
//               />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Load More Button */}
//       {visibleUsers < allUsers.length && (
//         <button
//           onClick={handleLoadMore}
//           className="bg-[#212121] text-white px-4 py-3 my-4 rounded-xl font-medium text-xs mx-auto block shadow-md"
//         >
//           View More
//         </button>
//       )}
//     </div>
//   );
// };

// export default ActivityList;


"use client";

import { useState } from "react";
import Image from "next/image";

const ActivityList = () => {
  const allUsers = [
    { id: 1, leftImg: "/Image/guest-1.jpeg", rightImg: "/Image/guest-2.jpeg" },
    { id: 2, leftImg: "/Image/guest-2.jpeg", rightImg: "/Image/guest-1.jpeg" },
    { id: 3, leftImg: "/Image/guest-1.jpeg", rightImg: "/Image/guest-2.jpeg" },
    { id: 4, leftImg: "/Image/guest-2.jpeg", rightImg: "/Image/guest-1.jpeg" },
    { id: 5, leftImg: "/Image/guest-1.jpeg", rightImg: "/Image/guest-2.jpeg" },
  ];

  const [visibleUsers, setVisibleUsers] = useState(4);

  const handleLoadMore = () => {
    setVisibleUsers((prev) => Math.min(prev + 4, allUsers.length));
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className="bg-[#121212] p-4 rounded-2xl w-full max-w-lg mx-auto 
        shadow-[0px_4px_10px_rgba(0,0,0,0.3),0px_15px_35px_rgba(0,0,0,0.7)]"
      >
        {allUsers.slice(0, visibleUsers).map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between gap-0 py-3 border-b border-gray-700"
          >
            {/* Left User */}
            <div className="flex flex-col items-center gap-1">
              <Image
                src={user.leftImg}
                alt="User"
                width={64}
                height={64}
                className="rounded-full border-2 border-blue-500"
              />
              <p className="text-white text-sm font-semibold">GUEST</p>
            </div>

            {/* Cross Icon (Centered with Image) */}
            <div className="flex items-center">
              <Image src="/Image/cross.png" alt="Cross" width={32} height={32} />
            </div>

            {/* Betting Buttons (Perfectly Centered) */}
            <div className="flex items-center">
              <div className="flex rounded-lg overflow-hidden shadow-md">
                <button className="text-blue-400 text-lg font-bold px-3 py-2 bg-[#d8e9fe] hover:bg-blue-100 transition">
                  ₹ 4.5
                </button>
                <button className="text-red-400 text-lg font-bold px-3 py-2 bg-[#ffe0e0] hover:bg-red-100 transition">
                  ₹ 4.5
                </button>
              </div>
            </div>

            {/* Check Icon (Centered with Image) */}
            <div className="flex items-center">
              <Image src="/Image/rigth.png" alt="Check" width={32} height={32} />
            </div>

            {/* Right User */}
            <div className="flex flex-col items-center gap-1">
              <Image
                src={user.rightImg}
                alt="User"
                width={64}
                height={64}
                className="rounded-full border-2 border-red-500"
              />
              <p className="text-white text-sm font-semibold">GUEST</p>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleUsers < allUsers.length && (
        <button
          onClick={handleLoadMore}
          className="bg-[#212121] text-white px-4 py-3 my-4 rounded-xl font-medium text-xs mx-auto block shadow-md"
        >
          View More
        </button>
      )}
    </div>
  );
};

export default ActivityList;
