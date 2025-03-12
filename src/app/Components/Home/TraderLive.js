import Image from "next/image";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const TraderLive = () => {
  const users = [
    { id: 1, leftImg: "/user1.png", rightImg: "/user2.png" },
    { id: 2, leftImg: "/user3.png", rightImg: "/user4.png" },
    { id: 3, leftImg: "/user5.png", rightImg: "/user6.png" },
    { id: 4, leftImg: "/user7.png", rightImg: "/user8.png" },
  ];

  return (
    <div className="flex flex-col px-4">
      <div className="bg-[#191818] p-5 rounded-2xl shadow-lg w-full max-w-lg">
        {users.map((user) => (
          <div key={user.id} className="flex flex-col md:flex-row items-center justify-between py-3">
            {/* Left Side */}
            <div className="flex flex-col items-center gap-1 mb-3 md:mb-0">
              <Image
                src={user.leftImg}
                alt="User"
                width={64} // equivalent to w-16
                height={64} // equivalent to h-16
                className="rounded-full border-2 border-blue-500"
              />
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
                <p className="text-gray-400 text-md">a few seconds ago</p>
              </div>
            </div>

            {/* Right Icon (Cross) */}
            <FaTimesCircle className="text-red-500 text-3xl relative -mr-6 shadow-lg" />

            {/* Right Side */}
            <div className="flex flex-col items-center gap-1 mb-3 md:mb-0">
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

      <button className="bg-[#191818] text-white px-4 py-2 rounded-md mt-4 shadow-lg w-full md:w-auto">
        View More
      </button>
    </div>
  );
};

export default TraderLive;

