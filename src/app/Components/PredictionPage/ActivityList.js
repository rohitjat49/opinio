// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { CheckCircle, XCircle } from "lucide-react";

// const initialData = [
//   {
//     id: 1,
//     name: "GUEST",
//     time: "a few seconds ago",
//     priceYes: "₹ 4.5",
//     priceNo: "₹ 4.5",
//     userImg: "/images/user1.jpg",
//     opponentImg: "/images/user2.jpg",
//   },
//   {
//     id: 2,
//     name: "GUEST",
//     time: "a few seconds ago",
//     priceYes: "₹ 4.5",
//     priceNo: "₹ 4.5",
//     userImg: "/images/user3.jpg",
//     opponentImg: "/images/user4.jpg",
//   },
//   {
//     id: 3,
//     name: "GUEST",
//     time: "a few seconds ago",
//     priceYes: "₹ 4.5",
//     priceNo: "₹ 4.5",
//     userImg: "/images/user5.jpg",
//     opponentImg: "/images/user6.jpg",
//   },
//   {
//     id: 4,
//     name: "GUEST",
//     time: "a few seconds ago",
//     priceYes: "₹ 4.5",
//     priceNo: "₹ 4.5",
//     userImg: "/images/user7.jpg",
//     opponentImg: "/images/user8.jpg",
//   },
// ];

// export default function ActivityList() {
//   const [data, setData] = useState(initialData);
//   const [showMore, setShowMore] = useState(false);

//   const loadMore = () => {
//     const moreData = [
//       {
//         id: 5,
//         name: "GUEST",
//         time: "a few seconds ago",
//         priceYes: "₹ 4.5",
//         priceNo: "₹ 4.5",
//         userImg: "/images/user9.jpg",
//         opponentImg: "/images/user10.jpg",
//       },
//       {
//         id: 6,
//         name: "GUEST",
//         time: "a few seconds ago",
//         priceYes: "₹ 4.5",
//         priceNo: "₹ 4.5",
//         userImg: "/images/user11.jpg",
//         opponentImg: "/images/user12.jpg",
//       },
//     ];
//     setData([...data, ...moreData]);
//     setShowMore(true);
//   };

//   return (
//     <div className="flex flex-col items-center bg-black min-h-screen py-10">
//       {/* Tab Navigation */}
//       <div className="flex space-x-6 text-gray-400 border-b border-gray-600 pb-2 w-80">
//         <p className="text-white font-semibold cursor-pointer">Activity</p>
//         <p className="cursor-pointer">Order book</p>
//       </div>

//       {/* Activity List Container */}
//       <div className="bg-black/50 p-6 rounded-lg shadow-lg w-80 mt-6">
//         {data.map((item) => (
//           <div key={item.id} className="flex items-center justify-between bg-gray-800 p-3 rounded-lg mb-3">
//             {/* Left Side */}
//             <div className="flex items-center gap-2">
//               <Image src={item.userImg} width={40} height={40} alt="User" className="rounded-full" />
//               <CheckCircle className="text-green-400 w-5 h-5" />
//             </div>

//             {/* Price Details */}
//             <div className="flex flex-col items-center">
//               <div className="flex gap-2">
//                 <span className="bg-blue-500 text-white px-2 py-1 text-sm rounded">{item.priceYes}</span>
//                 <span className="bg-red-500 text-white px-2 py-1 text-sm rounded">{item.priceNo}</span>
//               </div>
//               <p className="text-xs text-gray-400">{item.time}</p>
//             </div>

//             {/* Right Side */}
//             <div className="flex items-center gap-2">
//               <XCircle className="text-red-500 w-5 h-5" />
//               <Image src={item.opponentImg} width={40} height={40} alt="Opponent" className="rounded-full" />
//             </div>
//           </div>
//         ))}

//         {/* View More Button */}
//         {!showMore && (
//           <button
//             className="bg-gray-700 text-white py-2 px-6 rounded-lg mt-4 w-full hover:bg-gray-600 transition"
//             onClick={loadMore}
//           >
//             View More
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }



// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { CheckCircle, XCircle } from "lucide-react";

// const initialData = [
//   {
//     id: 1,
//     name: "GUEST",
//     time: "a few seconds ago",
//     priceYes: "\u20B9 4.5",
//     priceNo: "\u20B9 4.5",
//     userImg: "/images/user1.jpg",
//     opponentImg: "/images/user2.jpg",
//   },
//   {
//     id: 2,
//     name: "GUEST",
//     time: "a few seconds ago",
//     priceYes: "\u20B9 4.5",
//     priceNo: "\u20B9 4.5",
//     userImg: "/images/user3.jpg",
//     opponentImg: "/images/user4.jpg",
//   },
// ];

// export default function ActivityList() {
//   const [data, setData] = useState(initialData);
//   const [showMore, setShowMore] = useState(false);

//   const loadMore = () => {
//     const moreData = [
//       {
//         id: 3,
//         name: "GUEST",
//         time: "a few seconds ago",
//         priceYes: "\u20B9 4.5",
//         priceNo: "\u20B9 4.5",
//         userImg: "/images/user5.jpg",
//         opponentImg: "/images/user6.jpg",
//       },
//     ];
//     setData([...data, ...moreData]);
//     setShowMore(true);
//   };

//   return (
//     <div className="flex flex-col items-center bg-black min-h-screen py-10 text-white">
//       {/* Tabs */}
//       <div className="flex space-x-6 text-gray-400 border-b border-gray-600 pb-2 w-80">
//         <p className="text-white font-semibold cursor-pointer">Activity</p>
//         <p className="cursor-pointer">Order book</p>
//       </div>

//       {/* Activity List */}
//       <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-96 mt-6">
//         {data.map((item) => (
//           <div key={item.id} className="flex items-center justify-between bg-gray-800 p-4 rounded-lg mb-3 relative">
//             <div className="flex items-center gap-2">
//               <Image src={item.userImg} width={40} height={40} alt="User" className="rounded-full" />
//               <CheckCircle className="text-green-400 w-5 h-5" />
//             </div>

//             <div className="flex flex-col items-center">
//               <div className="flex items-center bg-gray-700 px-3 py-1 rounded-lg gap-2">
//                 <span className="text-blue-400 font-semibold">{item.priceYes}</span>
//                 <span className="text-red-400 font-semibold">{item.priceNo}</span>
//               </div>
//               <p className="text-xs text-gray-400 mt-1">{item.time}</p>
//             </div>

//             <div className="flex items-center gap-2">
//               <XCircle className="text-red-500 w-5 h-5" />
//               <Image src={item.opponentImg} width={40} height={40} alt="Opponent" className="rounded-full" />
//             </div>
//           </div>
//         ))}

//         {!showMore && (
//           <button
//             className="bg-gray-700 text-white py-2 px-6 rounded-lg mt-4 w-full hover:bg-gray-600 transition"
//             onClick={loadMore}
//           >
//             View More
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }


// import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

// const ActivityList = () => {
//   const users = [
//     { id: 1, leftImg: "/user1.png", rightImg: "/user2.png" },
//     { id: 2, leftImg: "/user3.png", rightImg: "/user4.png" },
//     { id: 3, leftImg: "/user5.png", rightImg: "/user6.png" },
//     { id: 4, leftImg: "/user7.png", rightImg: "/user8.png" },
//   ];

//   return (
//     <div className="bg-[#191818] p-5 rounded-2xl shadow-lg w-full max-w-lg mx-auto">
//       {users.map((user) => (
//         <div key={user.id} className="flex items-center justify-between py-3">
//           {/* Left Side */}
//           <div className="flex flex-col items-center gap-1">
//             <img src={user.leftImg} alt="User" className="w-16 h-16 rounded-full border-2 border-blue-500" />
//             <p className="text-white text-sm font-semibold">GUEST</p>
//           </div>
//           <FaCheckCircle className="text-green-500 text-3xl relative -ml-6 shadow-lg" />

//           {/* Betting Details */}
//           <div className="flex flex-col items-center">
//             <div className="flex bg-[#E8F0FF] rounded-lg overflow-hidden shadow-lg">
//               <p className="text-blue-500 text-lg font-bold px-4 py-2 bg-[#E8F0FF]">₹ 4.5</p>
//               <p className="text-red-500 text-lg font-bold px-4 py-2 bg-[#FFEAEA]">₹ 4.5</p>
//             </div>
//             <p className="text-gray-400 text-xs mt-1">a few second ago</p>
//           </div>

//           {/* Right Side */}
//           <FaTimesCircle className="text-red-500 text-3xl relative -mr-6 shadow-lg" />
//           <div className="flex flex-col items-center gap-1">
//             <img src={user.rightImg} alt="User" className="w-16 h-16 rounded-full border-2 border-red-500" />
//             <p className="text-white text-sm font-semibold">GUEST</p>
//           </div>
//         </div>
//       ))}

//       {/* View More Button */}
//       <button className="bg-gray-800 text-white px-4 py-2 rounded-md mt-4 mx-auto block">
//         View More
//       </button>
//     </div>
//   );
// };

// export default ActivityList;


// "use client";
// import { useState } from "react";
// import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

// const ActivityList = () => {
//   const allUsers = [
//     { id: 1, leftImg: "/Image/guest-1.jpeg", rightImg: "/Image/guest-2.jpeg" },
//     { id: 2, leftImg: "/Image/guest-2.jpeg", rightImg: "/Image/guest-1.jpeg" },
//     { id: 3, leftImg: "/Image/guest-1.jpeg", rightImg: "/Image/guest-2.jpeg" },
//     { id: 4, leftImg: "/Image/guest-2.jpeg", rightImg: "/Image/guest-1.jpeg" },
//     { id: 5, leftImg: "/Image/guest-1.jpeg", rightImg: "/Image/guest-2.jpeg" },
//     { id: 6, leftImg: "/Image/guest-2.jpeg", rightImg: "/Image/guest-1.jpeg" },
//     { id: 7, leftImg: "/Image/guest-1.jpeg", rightImg: "/Image/guest-2.jpeg" },
//     { id: 8, leftImg: "/Image/guest-2.jpeg", rightImg: "/Image/guest-1.jpeg" },
//   ];

//   const [visibleUsers, setVisibleUsers] = useState(4);
  
//   const handleLoadMore = () => {
//     setVisibleUsers((prev) => Math.min(prev + 4, allUsers.length));
//   };

//   return (
//     <div className="bg-[#191818] p-5 rounded-2xl shadow-lg w-full max-w-lg mx-auto">
//       {allUsers.slice(0, visibleUsers).map((user) => (
//         <div key={user.id} className="flex items-center justify-between py-3 border-b border-gray-700 last:border-none">
//           {/* Left Side */}
//           <div className="flex flex-col items-center gap-1">
//             <img src={user.leftImg} alt="User" className="w-16 h-16 rounded-full border-2 border-blue-500" />
//             <p className="text-white text-sm font-semibold">GUEST</p>
//           </div>
//           <FaCheckCircle className="text-green-500 text-2xl shadow-lg" />

//           {/* Betting Details */}
//           <div className="flex flex-col items-center">
//             <div className="flex bg-[#E8F0FF] rounded-lg overflow-hidden shadow-lg">
//               <p className="text-blue-500 text-lg font-bold px-4 py-2 bg-[#E8F0FF]">₹ 4.5</p>
//               <p className="text-red-500 text-lg font-bold px-4 py-2 bg-[#FFEAEA]">₹ 4.5</p>
//             </div>
//             <p className="text-gray-400 text-xs mt-1">a few seconds ago</p>
//           </div>

//           {/* Right Side */}
//           <FaTimesCircle className="text-red-500 text-2xl shadow-lg" />
//           <div className="flex flex-col items-center gap-1">
//             <img src={user.rightImg} alt="User" className="w-16 h-16 rounded-full border-2 border-red-500" />
//             <p className="text-white text-sm font-semibold">GUEST</p>
//           </div>
//         </div>
//       ))}

//       {/* Load More Button */}
//       {visibleUsers < allUsers.length && (
//         <button onClick={handleLoadMore} className="bg-gray-800 text-white px-4 py-2 rounded-md mt-4 mx-auto block hover:bg-gray-700 transition">
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
//     { id: 6, leftImg: "/Image/guest-2.jpeg", rightImg: "/Image/guest-1.jpeg" },
//     { id: 7, leftImg: "/Image/guest-1.jpeg", rightImg: "/Image/guest-2.jpeg" },
//     { id: 8, leftImg: "/Image/guest-2.jpeg", rightImg: "/Image/guest-1.jpeg" },
//   ];

//   const [visibleUsers, setVisibleUsers] = useState(4);

//   const handleLoadMore = () => {
//     setVisibleUsers((prev) => Math.min(prev + 4, allUsers.length));
//   };

//   return (
//     <div className=" p-5 rounded-2xl shadow-lg w-full max-w-lg mx-auto">
//       {allUsers.slice(0, visibleUsers).map((user) => (
//         <div key={user.id} className="flex items-center justify-between py-3 border-b border-gray-700 last:border-none">
//           {/* Left Side */}
//           <div className="flex flex-col items-center gap-1">
//             <Image src={user.leftImg} alt="User" width={64} height={64} className="w-16 h-16 rounded-full border-2 border-blue-500" />
//             <p className="text-white text-sm font-semibold">GUEST</p>
//           </div>

//           {/* Check Image */}
//           <Image src="/Image/check.png" alt="Check" width={40} height={40} className="w-10 h-10" />

//           {/* Betting Details */}
//           <div className="flex flex-col items-center">
//             <div className="flex bg-[#E8F0FF] rounded-lg overflow-hidden shadow-lg">
//               <p className="text-blue-500 text-lg font-bold px-4 py-2 bg-[#E8F0FF]">₹ 4.5</p>
//               <p className="text-red-500 text-lg font-bold px-4 py-2 bg-[#FFEAEA]">₹ 4.5</p>
//             </div>
//             <p className="text-[#606060] text-xs mt-1">a few seconds ago</p>
//           </div>

//           {/* Cross Image */}
//           <Image src="/Image/cross.png" alt="Cross" width={40} height={40} className="w-10 h-10" />

//           {/* Right Side */}
//           <div className="flex flex-col items-center gap-1">
//             <Image src={user.rightImg} alt="User" width={64} height={64} className="w-16 h-16 rounded-full border-2 border-red-500" />
//             <p className="text-white text-sm font-semibold">GUEST</p>
//           </div>
//         </div>
//       ))}

//       {/* Load More Button */}
//       {visibleUsers < allUsers.length && (
//         <button onClick={handleLoadMore} className="bg-gray-800 text-white px-4 py-2 rounded-md mt-4 mx-auto block hover:bg-gray-700 transition">
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
//     <div className="bg-[#121212] p-5 rounded-2xl shadow-lg w-full max-w-lg mx-auto ">
//       {allUsers.slice(0, visibleUsers).map((user) => (
//         <div key={user.id} className="flex items-center justify-between py-3 ">
//           {/* Left Side */}
//           <div className="flex flex-col items-center gap-1">
//             <Image src={user.leftImg} alt="User" width={64} height={64} className="w-16 h-16 rounded-full border-2 border-blue-500" />
//             <p className="text-white text-sm font-semibold">GUEST</p>
//           </div>

//           {/* Check Image */}
//           <Image src="/Image/check.png" alt="Check" width={40} height={40} className="w-10 h-10" />

//           {/* Betting Details */}
//           <div className="flex flex-col items-center">
//             <div className="flex bg-[#1E1E1E] rounded-lg overflow-hidden shadow-md">
//               <p className="text-blue-400 text-lg font-bold px-4 py-2 bg-[#1E1E1E]">₹ 4.5</p>
//               <p className="text-red-400 text-lg font-bold px-4 py-2 bg-[#2E1E1E]">₹ 4.5</p>
//             </div>
//             <p className="text-gray-400 text-xs mt-1">a few seconds ago</p>
//           </div>

//           {/* Cross Image */}
//           <Image src="/Image/cross.png" alt="Cross" width={40} height={40} className="w-10 h-10" />

//           {/* Right Side */}
//           <div className="flex flex-col items-center gap-1">
//             <Image src={user.rightImg} alt="User" width={64} height={64} className="w-16 h-16 rounded-full border-2 border-red-500" />
//             <p className="text-white text-sm font-semibold">GUEST</p>
//           </div>
//         </div>
//       ))}

//       {/* Load More Button */}
//       {visibleUsers < allUsers.length && (
//         <button
//           onClick={handleLoadMore}
//           className="bg-gray-800 text-white px-4 py-2 rounded-md mt-4 mx-auto block hover:bg-gray-700 transition shadow-md"
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
//     <div className="bg-[#121212] p-5 rounded-2xl w-full max-w-lg mx-auto 
//       shadow-[0_4px_10px_rgba(0,0,0,0.8)] md:shadow-[0_6px_20px_rgba(0,0,0,1)]">
//       {allUsers.slice(0, visibleUsers).map((user) => (
//         <div key={user.id} className="flex items-center justify-between py-3">
//           {/* Left Side */}
//           <div className="flex flex-col items-center gap-1">
//             <Image src={user.leftImg} alt="User" width={64} height={64} className="w-16 h-16 rounded-full border-2 border-blue-500" />
//             <p className="text-white text-sm font-semibold">GUEST</p>
//           </div>

//           {/* Check Image */}
//           <Image src="/Image/check.png" alt="Check" width={40} height={40} className="w-10 h-10" />

//           {/* Betting Details */}
//           <div className="flex flex-col items-center">
//             <div className="flex bg-[#1E1E1E] rounded-lg overflow-hidden shadow-md">
//               <p className="text-blue-400 text-lg font-bold px-4 py-2 bg-[#1E1E1E]">₹ 4.5</p>
//               <p className="text-red-400 text-lg font-bold px-4 py-2 bg-[#2E1E1E]">₹ 4.5</p>
//             </div>
//             <p className="text-gray-400 text-xs mt-1">a few seconds ago</p>
//           </div>

//           {/* Cross Image */}
//           <Image src="/Image/cross.png" alt="Cross" width={40} height={40} className="w-10 h-10" />

//           {/* Right Side */}
//           <div className="flex flex-col items-center gap-1">
//             <Image src={user.rightImg} alt="User" width={64} height={64} className="w-16 h-16 rounded-full border-2 border-red-500" />
//             <p className="text-white text-sm font-semibold">GUEST</p>
//           </div>
//         </div>
//       ))}

//       {/* Load More Button */}
//       {visibleUsers < allUsers.length && (
//         <button
//           onClick={handleLoadMore}
//           className="bg-gray-800 text-white px-4 py-2 rounded-md mt-4 mx-auto block hover:bg-gray-700 transition shadow-md"
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
//     <div
//       className="bg-[#121212] p-5 rounded-2xl w-full max-w-lg mx-auto 
//       shadow-[0px_4px_10px_rgba(0,0,0,0.3),0px_15px_35px_rgba(0,0,0,0.7)]"
//     >
//       {allUsers.slice(0, visibleUsers).map((user) => (
//         <div key={user.id} className="flex items-center justify-between py-3">
//           {/* Left Side */}
//           <div className="flex flex-col items-center gap-1">
//             <Image
//               src={user.leftImg}
//               alt="User"
//               width={64}
//               height={64}
//               className="w-16 h-16 rounded-full border-2 border-blue-500"
//             />
//             <p className="text-white text-sm font-semibold">GUEST</p>
//           </div>

//           {/* Check Image */}
//           <Image
//             src="/Image/check.png"
//             alt="Check"
//             width={40}
//             height={40}
//             className="w-10 h-10"
//           />

//           {/* Betting Details */}
//           <div className="flex flex-col items-center">
//   <div className="flex rounded-lg overflow-hidden  shadow-md">
//     <button className="text-blue-400 cursor-pointer text-lg font-bold px-4 py-2 bg-[#d8e9fe] hover:bg-blue-100 transition">
//       ₹ 4.5
//     </button>
//     <button className="text-red-400 cursor-pointer text-lg font-bold px-4 py-2 bg-[#ffe0e0] hover:bg-red-100 transition">
//       ₹ 4.5
//     </button>
//   </div>
//   <p className="text-gray-400 text-xs mt-1">a few seconds ago</p>
// </div>


//           {/* Cross Image */}
//           <Image
//             src="/Image/cross.png"
//             alt="Cross"
//             width={40}
//             height={40}
//             className="w-10 h-10"
//           />

//           {/* Right Side */}
//           <div className="flex flex-col items-center gap-1">
//             <Image
//               src={user.rightImg}
//               alt="User"
//               width={64}
//               height={64}
//               className="w-16 h-16 rounded-full border-2 border-red-500"
//             />
//             <p className="text-white text-sm font-semibold">GUEST</p>
//           </div>
//         </div>
//       ))}

//       {/* Load More Button */}
//       {visibleUsers < allUsers.length && (
//         <button
//           onClick={handleLoadMore}
//           className="bg-gray-800 text-white px-4 py-2 rounded-md mt-4 mx-auto block hover:bg-gray-700 transition shadow-md"
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
//     <>
//       <div
//         className="bg-[#121212] p-5 rounded-2xl w-full max-w-lg mx-auto 
//         shadow-[0px_4px_10px_rgba(0,0,0,0.3),0px_15px_35px_rgba(0,0,0,0.7)]"
//       >
//         {allUsers.slice(0, visibleUsers).map((user) => (
//           <div key={user.id} className="flex items-center justify-between py-3">
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
//               <p className="text-gray-400 text-xs mt-1">a few seconds ago</p>
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
//           className="bg-[#212121]  text-white px-4 py-3 rounded-xl font-medium text-xs mt-4 mx-auto block  shadow-md max-w-lg"
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
//     <>
//       <div
//         className="bg-[#121212] p-5 rounded-2xl w-full max-w-lg mx-auto 
//         shadow-[0px_4px_10px_rgba(0,0,0,0.3),0px_15px_35px_rgba(0,0,0,0.7)]"
//       >
//         {allUsers.slice(0, visibleUsers).map((user) => (
//           <div key={user.id} className="flex items-center justify-between py-3">
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
//               <p className="text-gray-400 text-xs mt-1">a few seconds ago</p>
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
//           className="bg-[#212121]  text-white px-4 py-3 rounded-xl font-medium text-xs mt-4 mx-auto block  shadow-md max-w-lg"
//         >
//           View More
//         </button>
//       )}
//     </>
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
    <>
      <div
        className="bg-[#121212] p-1 rounded-2xl w-full max-w-lg mx-auto 
        shadow-[0px_4px_10px_rgba(0,0,0,0.3),0px_15px_35px_rgba(0,0,0,0.7)]"
      >
        {allUsers.slice(0, visibleUsers).map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-center gap-1 py-3 "
          >
            {/* Left Side */}
            <div className="flex flex-col items-center gap-1">
              <Image
                src={user.leftImg}
                alt="User"
                width={64}
                height={64}
                className="w-16 h-16 rounded-full border-2 border-blue-500"
              />
              <p className="text-white text-sm font-semibold">GUEST</p>
            </div>

            {/* Check Image */}
            <Image
              src="/Image/rigth.png"
              alt="Check"
              width={40}
              height={40}
              className="w-10 h-10"
            />

            {/* Betting Details */}
            <div className="flex flex-col items-center">
              <div className="flex rounded-lg overflow-hidden shadow-md">
                <button className="text-blue-400 cursor-pointer text-lg font-bold px-4 py-2 bg-[#d8e9fe] hover:bg-blue-100 transition">
                  ₹ 4.5
                </button>
                <button className="text-red-400 cursor-pointer text-lg font-bold px-4 py-2 bg-[#ffe0e0] hover:bg-red-100 transition">
                  ₹ 4.5
                </button>
              </div>
              <p className="text-gray-400 text-xs mt-1">a few seconds ago</p>
            </div>

            {/* Cross Image */}
            <Image
              src="/Image/cross.png"
              alt="Cross"
              width={40}
              height={40}
              className="w-10 h-10"
            />

            {/* Right Side */}
            <div className="flex flex-col items-center gap-1">
              <Image
                src={user.rightImg}
                alt="User"
                width={64}
                height={64}
                className="w-16 h-16 rounded-full border-2 border-red-500"
              />
              <p className="text-white text-sm font-semibold">GUEST</p>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button (Outside the Box) */}
      {visibleUsers < allUsers.length && (
        <button
          onClick={handleLoadMore}
          className="bg-[#212121] text-white px-4 py-3 rounded-xl font-medium text-xs mt-4 mx-auto block shadow-md max-w-lg"
        >
          View More
        </button>
      )}
    </>
  );
};

export default ActivityList;
