// import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

// const TraderLive = () => {
//   const users = [
//     { id: 1, leftImg: "/Image/images.png", rightImg: "/Image/images.png" },
//     { id: 2, leftImg: "/Image/images.png", rightImg: "/Image/images.png" },
//     { id: 3, leftImg: "/Image/images.png", rightImg: "/Image/images.png" },
//     { id: 4, leftImg: "/Image/images.png", rightImg: "/Image/images.png" },
//   ];

//   return (
//     <div className="flex flex-col items-center">
//       {/* Card */}
//       <div className="bg-[#191818] p-5 rounded-2xl shadow-lg w-full max-w-lg">
//         {users.map((user) => (
//           <div key={user.id} className="flex items-center justify-between py-3 relative">
//             {/* Left Side */}
//             <div className="flex flex-col items-center gap-1">
//               <img src={user.leftImg} alt="User" className="w-16 h-16 rounded-full border-2 border-blue-500" />
//               <p className="text-white text-sm font-semibold">GUEST</p>
//             </div>

//             {/* Centered Icons */}
//             <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
//               <FaCheckCircle className="text-green-500 text-3xl" />
//               <FaTimesCircle className="text-red-500 text-3xl" />
//             </div>

//             {/* Betting Details */}
//             <div className="flex flex-col items-center">
//               <div className="flex bg-[#E8F0FF] rounded-lg overflow-hidden shadow-lg">
//                 <p className="text-blue-500 text-lg font-bold px-4 py-2 bg-[#E8F0FF]">₹ 4.5</p>
//                 <p className="text-red-500 text-lg font-bold px-4 py-2 bg-[#FFEAEA]">₹ 4.5</p>
//               </div>
//               <p className="text-gray-400 text-md mt-5">a few seconds ago</p>
//             </div>

//             {/* Right Side */}
//             <div className="flex flex-col items-center gap-1">
//               <img src={user.rightImg} alt="User" className="w-16 h-16 rounded-full border-2 border-red-500" />
//               <p className="text-white text-sm font-semibold">GUEST</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* View More Button (Outside the Card) */}
//       <button className="bg-[#191818] text-white px-4 py-2 rounded-md mt-4 shadow-lg">
//         View More
//       </button>
//     </div>
//   );
// };

// export default TraderLive;

import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const TraderLive = () => {
  const users = [
    { id: 1, leftImg: "/user1.png", rightImg: "/user2.png" },
    { id: 2, leftImg: "/user3.png", rightImg: "/user4.png" },
    { id: 3, leftImg: "/user5.png", rightImg: "/user6.png" },
    { id: 4, leftImg: "/user7.png", rightImg: "/user8.png" },
  ];

  return (
    <div className="flex flex-col  px-4">
      {/* Card */}
      <div className="bg-[#191818] p-5 rounded-2xl shadow-lg w-full max-w-lg">
        {users.map((user) => (
          <div key={user.id} className="flex flex-col md:flex-row items-center justify-between py-3">
            {/* Left Side */}
            <div className="flex flex-col items-center gap-1 mb-3 md:mb-0">
              <img src={user.leftImg} alt="User" className="w-16 h-16 rounded-full border-2 border-blue-500" />
              <p className="text-white text-sm font-semibold">GUEST</p>
            </div>

            {/* Right Icon (Check) */}
            <FaCheckCircle className="text-green-500 text-3xl relative -ml-6 shadow-lg" />

            {/* Betting Details */}
            <div className="flex flex-col items-center mx-4">
              <div className="flex bg-[#E8F0FF] rounded-lg overflow-hidden shadow-lg">
                <p className="text-blue-500 text-lg font-bold px-4 py-2 bg-[#E8F0FF]">₹ 4.5</p>
                <p className="text-red-500 text-lg font-bold px-4 py-2 bg-[#FFEAEA]">₹ 4.5</p>
              </div>
              <div className="flex justify-between items-center w-full mt-5">
                <p className="text-gray-400 text-md">a few second ago</p>
              </div>
            </div>

            {/* Right Icon (Cross) */}
            <FaTimesCircle className="text-red-500 text-3xl relative -mr-6 shadow-lg" />

            {/* Right Side */}
            <div className="flex flex-col items-center gap-1 mb-3 md:mb-0">
              <img src={user.rightImg} alt="User" className="w-16 h-16 rounded-full border-2 border-red-500" />
              <p className="text-white text-sm font-semibold">GUEST</p>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button (Outside the Card) */}
      <button className="bg-[#191818] text-white px-4 py-2 rounded-md mt-4 shadow-lg w-full md:w-auto">
        View More
      </button>
    </div>
  );
};

export default TraderLive;

