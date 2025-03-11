// import Image from "next/image";

// const CardComponent = () => {
//   return (
//     <div
//       className="relative w-full min-h-[230px] my-8 rounded-[20px] p-5 shadow-lg border border-gray-700 flex flex-col justify-between mx-auto bg-cover bg-center"
//       style={{
//         backgroundImage: "url('/Image/Bg Elements (1).png')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         boxShadow: "2px 2px 2px #777777, -2px 2px 2px #777777, 0px 2px 2px #777777", // Softer shadow effect on three sides

//       }}
//     >
//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-[#191818] to-[#0B0B0B] opacity-80 rounded-[20px]"></div>

//       {/* Content */}
//       <div className="relative z-10">
//         {/* Cricket Title & Team Logos */}
//         <div className="flex items-center gap-2">
//           {/* Ball Image instead of ● */}
//           <Image src="/Image/image 2.png" width={20} height={20} alt="Ball" />
//           <p className="text-lg font-semibold text-white">Cricket</p>

//           {/* Team Logos */}
//           <div className="flex gap-1 items-center ml-auto">
//             <Image src="/Image/image 9 (1).png" width={24} height={16} alt="SA Flag" />
//             <span className="text-gray-400 text-xs">V/s</span>
//             <Image src="/Image/image 10.png" width={24} height={16} alt="NZ Flag" />
//           </div>
//         </div>

//         {/* Match Details */}
//         <p className="text-sm text-gray-300 mt-2">
//           South Africa to win the 2nd Semi-Final vs New Zealand?
//         </p>

//         {/* Traders Info with Image */}
//         <div className="flex items-center gap-2 mt-2">
//           <Image src="/Image/people.png" width={16} height={16} alt="Link Icon" /> {/* Trader Icon */}
//           <p className="text-gray-500 text-sm">123446 Traders</p>
//         </div>

//         <p className="text-gray-500 text-xs">H2H Last 5 ODI SA: 02, NZ: 03, Draw: 0</p>

//         {/* Betting Buttons */}
//         <div className="flex justify-between gap-[5px] mt-3">
//           <button
//             className="w-[96px] h-[41px] bg-[#D3E5FF] text-[#2A7FE8] rounded-[10px] text-sm font-bold border border-[#2A7FE8] flex items-center justify-center shadow-lg"
//           >
//             Yes ₹ 4.5
//           </button>
//           <button
//             className="w-[96px] h-[41px] bg-[#FFD6D6] text-[#E92A2A] rounded-[10px] text-sm font-bold border border-[#E92A2A] flex items-center justify-center shadow-lg"
//           >
//             No ₹ 4.5
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardComponent;

// import Image from "next/image";

// const CardComponent = () => {
//   const cardData = [1, 2, 3]; // Dummy array to render three cards

//   return (
//     <div className="grid grid-cols-1  gap-4">
//         <div className="text-xl mt-5 font-semibold text-white">Hotshots in market</div>
//       {cardData.map((_, index) => (
//         <div
//           key={index}
//           className="relative w-full min-h-[230px] my-4 rounded-[20px] p-5 shadow-lg border border-gray-700 flex flex-col justify-between mx-auto bg-cover bg-center"
//           style={{
//             backgroundImage: "url('/Image/CArd 9.png')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             boxShadow: "2px 2px 2px #777777, -2px 2px 2px #777777, 0px 2px 2px #777777", // Softer shadow effect on three sides
//           }}
//         >
//           {/* Gradient Overlay */}
//           {/* <div className="absolute inset-0 bg-gradient-to-b from-[#191818] to-[#0B0B0B] opacity-80 rounded-[20px]"></div> */}

//           {/* Content */}
//           <div className="relative z-10">
//             {/* Cricket Title & Team Logos */}
//             <div className="flex items-center gap-2">
//               {/* Ball Image instead of ● */}
//               <Image src="/Image/image 2.png" width={20} height={20} alt="Ball" />
//               <p className="text-lg font-semibold text-white">Cricket</p>

//               {/* Team Logos */}
//               <div className="flex gap-1 items-center ml-auto">
//                 <Image src="/Image/image 9 (1).png" width={24} height={16} alt="SA Flag" />
//                 <span className="text-gray-400 text-xs">V/s</span>
//                 <Image src="/Image/image 10.png" width={24} height={16} alt="NZ Flag" />
//               </div>
//             </div>

//             {/* Match Details */}
//             <p className="text-sm text-gray-300 mt-2">
//               South Africa to win the 2nd Semi-Final vs New Zealand?
//             </p>

//             {/* Traders Info with Image */}
//             <div className="flex items-center gap-2 mt-2">
//               <Image src="/Image/people.png" width={16} height={16} alt="Link Icon" /> {/* Trader Icon */}
//               <p className="text-gray-500 text-sm">123446 Traders</p>
//             </div>

//             <p className="text-gray-500 text-xs">H2H Last 5 ODI SA: 02, NZ: 03, Draw: 0</p>

//             {/* Betting Buttons */}
//             <div className="flex justify-between gap-[5px] mt-3">
//               <button
//                 className="w-[96px] h-[41px] bg-[#D3E5FF] text-[#2A7FE8] rounded-[10px] text-sm font-bold border border-[#2A7FE8] flex items-center justify-center shadow-lg"
//               >
//                 Yes ₹ 4.5
//               </button>
//               <button
//                 className="w-[96px] h-[41px] bg-[#FFD6D6] text-[#E92A2A] rounded-[10px] text-sm font-bold border border-[#E92A2A] flex items-center justify-center shadow-lg"
//               >
//                 No ₹ 4.5
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CardComponent;

// import Image from "next/image";

// const CardComponent = () => {
//   const cardData = [1, 2, 3]; // Dummy array to render three cards

//   return (
//     <div className="grid grid-cols-1 gap-4">
//       <div className="text-xl mt-5 font-semibold text-white">Hotshots in market</div>
//       {cardData.map((_, index) => (
//         <div
//           key={index}
//           className="relative w-full min-h-[230px] my-4 rounded-[20px] p-5 flex flex-col justify-between mx-auto bg-cover bg-center"
//           style={{
//             backgroundImage: "url('/Image/CArd 9.png')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           {/* Content */}
//           <div className="relative z-10">
//             {/* Cricket Title & Team Logos */}
//             <div className="flex items-center gap-2">
//               <Image src="/Image/image 2.png" width={20} height={20} alt="Ball" />
//               <p className="text-lg font-semibold text-white">Cricket</p>
//               <div className="flex gap-1 items-center ml-auto">
//                 <Image src="/Image/image 9 (1).png" width={24} height={16} alt="SA Flag" />
//                 <span className="text-gray-400 text-xs">V/s</span>
//                 <Image src="/Image/image 10.png" width={24} height={16} alt="NZ Flag" />
//               </div>
//             </div>

//             {/* Match Details */}
//             <p className="text-sm text-white font-normal mt-2">
//               South Africa to win the 2nd Semi-Final vs New Zealand?
//             </p>

//             {/* Traders Info with Image */}
//             <div className="flex items-center gap-2 my-4 font-light">
//               <Image src="/Image/people.png" width={16} height={16} alt="Link Icon" />
//               <p className="text-gray-500 text-xs">123446 Traders</p>
//             </div>

//             <p className="text-white font-light text-[10px]">H2H Last 5 ODI SA: 02, NZ: 03, Draw: 0</p>

//             {/* Betting Buttons */}
//             <div className="flex justify-between gap-[5px] mt-3">
//               <button
//                 className="w-[96px] h-[41px] bg-[#D3E5FF] text-[#2A7FE8] rounded-[10px] text-sm font-medium border border-[#2A7FE8] flex items-center justify-center"
//               >
//                 Yes ₹ 4.5
//               </button>
//               <button
//                 className="w-[96px] h-[41px] bg-[#FFD6D6] text-[#E92A2A] rounded-[10px] text-sm font-medium  border border-[#E92A2A] flex items-center justify-center"
//               >
//                 No ₹ 4.5
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CardComponent;



// import Image from "next/image";

// const CardComponent = () => {
//   const cardData = [1, 2, 3]; // Dummy array to render three cards

//   return (
//     <div className="grid grid-cols-1 gap-6 px-4 ">
//       <div className="text-xl mt-6 font-semibold text-white">Hotshots in Market</div>
//       {cardData.map((_, index) => (
//         <div
//           key={index}
//           className="relative w-full min-h-[250px] rounded-2xl p-6 flex flex-col justify-between mx-auto bg-cover bg-center shadow-lg"
//           style={{
//             backgroundImage: "url('/Image/CArd 9.png')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           {/* Content */}
//           <div className="relative z-10">
//             {/* Cricket Title & Team Logos */}
//             <div className="flex items-center gap-3">
//               <Image src="/Image/image 2.png" width={24} height={24} alt="Ball" />
//               <p className="text-lg font-semibold text-white">Cricket</p>
//               <div className="flex gap-2 items-center ml-auto">
//                 <Image src="/Image/image 9 (1).png" width={28} height={20} alt="SA Flag" />
//                 <span className="text-gray-300 text-sm">V/s</span>
//                 <Image src="/Image/image 10.png" width={28} height={20} alt="NZ Flag" />
//               </div>
//             </div>

//             {/* Match Details */}
//             <p className="text-sm text-white font-normal mt-3">
//               South Africa to win the 2nd Semi-Final vs New Zealand?
//             </p>

//             {/* Traders Info with Image */}
//             <div className="flex items-center gap-2 my-4">
//               <Image src="/Image/people.png" width={18} height={18} alt="Traders Icon" />
//               <p className="text-gray-400 text-sm">123,446 Traders</p>
//             </div>

//             <p className="text-white font-light text-xs">H2H Last 5 ODI SA: 02, NZ: 03, Draw: 0</p>

//             {/* Betting Buttons */}
//             <div className="flex justify-between gap-4 mt-4">
//               <button
//                 className="w-[100px] h-[44px] bg-[#D3E5FF] text-[#2A7FE8] rounded-xl text-sm font-medium border border-[#2A7FE8] flex items-center justify-center shadow-sm"
//               >
//                 Yes ₹ 4.5
//               </button>
//               <button
//                 className="w-[100px] h-[44px] bg-[#FFD6D6] text-[#E92A2A] rounded-xl text-sm font-medium border border-[#E92A2A] flex items-center justify-center shadow-sm"
//               >
//                 No ₹ 4.5
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CardComponent;

// "use client";
// import YesButton from "../../ui/YesButton";
// import NoButton from "../../ui/NoButton";
// import Image from "next/image";
// import Link from "next/link";




// const CardComponent = () => {
  
//   const cardData = [1, 2, 3]; // Dummy array to render three cards

//   return (
//     <Link href="PredictionsBid"> 
//     <div className="grid grid-cols-1 gap-6 ">
    
//       {cardData.map((_, index) => (
//         <div
//           key={index}
//           className="relative w-full min-h-[250px] rounded-2xl p-6 flex flex-col justify-between mx-auto bg-cover bg-center shadow-lg"
//           style={{
//             backgroundImage: "url('/Image/CArd 9.png')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           {/* Content */}
//           <div className="relative z-10">
//             {/* Cricket Title & Team Logos */}
//             <div className="flex items-center gap-3">
//               <Image src="/Image/image 2.png" width={24} height={24} alt="Ball" />
//               <p className="text-lg font-normal text-white">Cricket</p>
//               <div className="flex gap-2 items-center ml-auto">
//                 <Image src="/Image/image 9 (1).png" width={28} height={20} alt="SA Flag" />
//                 <span className="text-gray-300 text-sm">V/s</span>
//                 <Image src="/Image/image 10.png" width={28} height={20} alt="NZ Flag" />
//               </div>
//             </div>

//             {/* Match Details */}
//             <p className="text-sm text-white font-normal mt-3">
//               South Africa to win the 2nd Semi-Final vs New Zealand?
//             </p>

//             {/* Traders Info with Image */}
//             <div className="flex items-center gap-2 my-4">
//               <Image src="/Image/people.png" width={18} height={18} alt="Traders Icon" />
//               <p className="text-gray-400 text-sm">123,446 Traders</p>
//             </div>

//             <p className="text-white font-light text-xs">H2H Last 5 ODI SA: 02, NZ: 03, Draw: 0</p>

//             {/* Betting Buttons */}
//             <div className="flex justify-between gap-4 mt-5">
//              <YesButton/>
//              <NoButton/>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//     </Link>
//   );
// };

// export default CardComponent;



"use client";
import { useRouter } from "next/navigation";
import YesButton from "../../ui/YesButton";
import NoButton from "../../ui/NoButton";
import Image from "next/image";

const CardComponent = () => {
  const router = useRouter();

  // Navigate to PredictionsBid page on card click
  const handleCardNavigation = (e) => {
    e.stopPropagation(); // Yes/No बटन क्लिक से PredictionsBid ओपन न हो
    router.push("/PredictionsBid");
  };

  // Navigate to BidPages on Yes/No button click
  const handleBidNavigation = (e) => {
    e.stopPropagation(); // Card click event को रोकें
    router.push("/BidPage");
  };

  const cardData = [1, 2, 3]; // Dummy array to render three cards

  return (
    <div className="grid grid-cols-1 gap-6">
      {cardData.map((_, index) => (
        <div
          key={index}
          className="relative w-full min-h-[250px] rounded-2xl p-6 flex flex-col justify-between mx-auto bg-cover bg-center shadow-lg cursor-pointer"
          style={{
            backgroundImage: "url('/Image/CArd 9.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          onClick={handleCardNavigation} // Card click से PredictionsBid पर जाए
        >
          {/* Content */}
          <div className="relative z-10">
            {/* Cricket Title & Team Logos */}
            <div className="flex items-center gap-3">
              <Image src="/Image/image 2.png" width={24} height={24} alt="Ball" />
              <p className="text-lg font-normal text-white">Cricket</p>
              <div className="flex gap-2 items-center ml-auto">
                <Image src="/Image/image 9 (1).png" width={28} height={20} alt="SA Flag" />
                <span className="text-gray-300 text-sm">V/s</span>
                <Image src="/Image/image 10.png" width={28} height={20} alt="NZ Flag" />
              </div>
            </div>

            {/* Match Details */}
            <p className="text-sm text-white font-normal mt-3">
              South Africa to win the 2nd Semi-Final vs New Zealand?
            </p>

            {/* Traders Info with Image */}
            <div className="flex items-center gap-2 my-4">
              <Image src="/Image/people.png" width={18} height={18} alt="Traders Icon" />
              <p className="text-[#606060] text-sm">123,446 Traders</p>
            </div>

            <p className="text-white font-light text-xs">H2H Last 5 ODI SA: 02, NZ: 03, Draw: 0</p>

            {/* Betting Buttons */}
            <div className="flex justify-between gap-4 mt-5 cursor-pointer">
              <button onClick={handleBidNavigation}>
                <YesButton />
              </button>
              <button onClick={handleBidNavigation}>
                <NoButton />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
