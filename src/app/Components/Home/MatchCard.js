// 'use client';

// import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';

// const MatchCard = ({ match }) => (
//   <div className="bg-black rounded-2xl h-[240px] p-3 w-48 shadow-lg relative text-white border border-gray-700">
//     {/* Live Icon */}
//     <div className="absolute top-2 left-2 flex items-center space-x-1">

//       <span className="text-sm text-red-500 font-semibold">Live</span>
//       <Image src="/Image/image 2.png" alt="Live" width={20} height={20} />
//     </div>

//     {/* Star Icon */}
//     <div className="absolute top-2 right-2">
//       <Image src="/Image/Icon (1).png" alt="Favorite" width={40} height={40} />
//     </div>

//     {/* Match Image */}
//     <div className="mt-4 mb-2 flex justify-center">
//       <Image src={match.image} alt={match.title} width={160} height={100} className="rounded-lg" />
//     </div>

//     {/* Match Title */}
//     <h2 className="text-lg font-bold text-center">{match.title}</h2>

//     {/* Tournament Details */}
//     <p className="text-gray-400 text-center text-xs">{match.details}</p>
//   </div>
// );

// export default function Matches() {
//   const matches = [
//     { image: '/Image/Frame 1686552995.png', title: 'Ind vs Pak', details: 'ICC Champions Trophy 2025' },
//     { image: '/Image/image 4.png', title: 'NZ vs SA', details: 'ODI Series [5-0] Match 4' },
//     { image: '/Image/Frame 1686552995.png', title: 'AUS vs ENG', details: 'Ashes Series 2025' },
//     { image: '/Image/image 4.png', title: 'WI vs SL', details: 'T20 World Cup Qualifiers' },
//   ];

//   return (
//     <div className="flex justify-center items-center py-8 w-[392px] mx-auto">
//       <Swiper
//         spaceBetween={16} // Cards ke beech 16px ka gap
//         slidesPerView={2} // Ek time pe 2 cards dikhane hain
//       >
//         {matches.map((match, index) => (
//           <SwiperSlide key={index}>
//             <MatchCard match={match} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// 'use client';

// import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';

// const MatchCard = ({ match }) => (
//   <div className="relative w-48 h-[260px] rounded-2xl p-3 shadow-lg bg-cover bg-center border border-gray-700"
//     style={{ backgroundImage: `url(${match.bgImage})` }}>

//     {/* Outer Shadow */}
//     <div className="absolute inset-0 shadow-2xl rounded-2xl"></div>

//     {/* Live Icon */}
//     <div className="absolute top-2 left-2 flex items-center space-x-1 z-10 p-2 rounded-3xl
//       bg-opacity-50 px-3">
//       <span className="text-md text-white font-semibold">Live</span>
//       <Image src="/Image/image 2.png" className='pl-1' alt="Live" width={20} height={20} />
//     </div>

//     {/* Star Icon */}
//     <div className="absolute top-2 right-2 z-10">
//       <Image src="/Image/Icon (1).png" alt="Favorite" width={40} height={40} />
//     </div>

//     {/* Match Image */}
//     <div className="relative mt-4 pt-12 mb-2 flex justify-center z-10">
//       <Image src={match.image} alt={match.title} width={160} height={100} className="rounded-lg shadow-xl" />
//     </div>

//     {/* Match Title */}
//     <h2 className="text-lg font-bold text-center text-white z-10">{match.title}</h2>

//     {/* Tournament Details */}
//     <p className="text-gray-400 text-center text-xs z-10">{match.details}</p>
//   </div>
// );

// export default function Matches() {
//   const matches = [
//     { bgImage: '/Image/CArd 9.png', image: '/Image/Frame 1686552995.png', title: 'Ind vs Pak', details: 'ICC Champions Trophy 2025' },
//     { bgImage: '/Image/CArd 9.png', image: '/Image/image 4.png', title: 'NZ vs SA', details: 'ODI Series [5-0] Match 4' },
//     { bgImage: '/Image/CArd 9.png', image: '/Image/Frame 1686552995.png', title: 'AUS vs ENG', details: 'Ashes Series 2025' },
//     { bgImage: '/Image/CArd 9.png', image: '/Image/image 4.png', title: 'WI vs SL', details: 'T20 World Cup Qualifiers' },
//   ];

//   return (
//     <div className="flex justify-center items-center py-8 w-[392px] mx-auto">
//       <Swiper spaceBetween={16} slidesPerView={2}>
//         {matches.map((match, index) => (
//           <SwiperSlide key={index}>
//             <MatchCard match={match} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// 'use client';

// import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';

// const MatchCard = ({ match }) => (
//   <div
//     className="relative w-48 h-[260px] rounded-2xl p-3 shadow-lg  bg-cover bg-center"
//     style={{ backgroundImage: "url('/Image/Card.png')" }} // Default background image
//   >
//     {/* Outer Shadow */}
//     <div className="absolute inset-0 rounded-2xl"></div>

//     {/* Live Icon */}
//     <div className="absolute top-2 left-2 flex items-center space-x-1 z-10 p-2 rounded-3xl bg-[#333333] bg-opacity- px-3">
//       <span className="text-md text-white font-semibold">Live</span>
//       <Image src="/Image/image 2.png" className='pl-1' alt="Live" width={20} height={20} />
//     </div>

//     {/* Star Icon */}
//     <div className="absolute top-2 right-2 z-10">
//       <Image src="/Image/Icon (1).png" alt="Favorite" width={40} height={40} />
//     </div>

//     {/* Match Image */}
//     <div className="relative mt-4 pt-12 mb-2 flex justify-center z-10">
//       <Image src={match.image} alt={match.title} width={160} height={100} className="rounded-lg shadow-xl" />
//     </div>

//     {/* Match Title */}
//     <h2 className="text-lg font-bold text-center text-white z-10">{match.title}</h2>

//     {/* Tournament Details */}
//     <p className="text-gray-400 text-center text-xs z-10">{match.details}</p>
//   </div>
// );

// export default function Matches() {
//   const matches = [
//     { image: '/Image/Frame 1686552995.png', title: 'Ind vs Pak', details: 'ICC Champions Trophy 2025' },
//     { image: '/Image/image4.png', title: 'NZ vs SA', details: 'ODI Series [5-0] Match 4' },
//     { image: '/Image/Frame1686552995.png', title: 'AUS vs ENG', details: 'Ashes Series 2025' },
//     { image: '/Image/image4.png', title: 'WI vs SL', details: 'T20 World Cup Qualifiers' },
//   ];

//   return (
//     <div className="flex justify-center items-center py-8 w-[392px] mx-auto">
//       <Swiper spaceBetween={16} slidesPerView={2}>
//         {matches.map((match, index) => (
//           <SwiperSlide key={index}>
//             <MatchCard match={match} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// 'use client';

// import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';

// const MatchCard = ({ match }) => (
//   <div
//     className="relative w-48 h-[270px] rounded-2xl p-3 shadow-lg bg-cover bg-center flex flex-col justify-between"
//     style={{ backgroundImage: "url('/Image/Card.png')" }} // Background image
//   >
//     {/* Live Badge */}
//     <div className="absolute top-2 left-2 flex items-center space-x-1 bg-[#333333] bg-opacity-70 px-3 py-1 rounded-2xl shadow">
//       <span className="text-white text-sm font-semibold">Live</span>
//       <Image src="/Image/image 2.png" alt="Live" width={18} height={18} />
//     </div>

//     {/* Favorite (Star) Icon */}
//     <div className="absolute top-2 right-2">
//       <Image src="/Image/Icon (1).png" alt="Favorite" width={25} height={25} />
//     </div>

//     {/* Match Image */}
//     <div className="flex justify-center items-center pt-11">
//       <Image src={match.image} alt={match.title} width={160} height={100} className="rounded-lg shadow-md" />
//     </div>

//     {/* Match Title & Details */}
//     <div className="text-center mt-2">
//       <h2 className="text-lg font-bold text-white">{match.title}</h2>
//       <p className="text-gray-400 text-xs">{match.details}</p>
//     </div>
//   </div>
// );

// export default function Matches() {
//   const matches = [
//     { image: '/Image/image (2).png',  title: 'Ind vs Pak', details: 'ICC Champions Trophy 2025' },
//     { image: '/Image/image (2).png', title: 'NZ vs SA', details: 'ODI Series [5-0] Match 4' },
//     { image: '/Image/image (2).png', title: 'AUS vs ENG', details: 'Ashes Series 2025' },
//     { image: '/Image/image (2).png', title: 'WI vs SL', details: 'T20 World Cup Qualifiers' },
//   ];

//   return (
//     <div className="flex justify-center items-center py-8 w-[392px] mx-auto">
//       <Swiper spaceBetween={16} slidesPerView={2}>
//         {matches.map((match, index) => (
//           <SwiperSlide key={index}>
//             <MatchCard match={match} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// 'use client';

// import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';

// const MatchCard = ({ match }) => (
//   <div className="relative w-48 h-[270px] rounded-3xl p-3 shadow-2xl border-1 border-amber-50 bg-[#151414] ">
//     {/* Background Image */}
//     <div
//       className="w-full h-full rounded-3xl p-4 bg-cover bg-center flex flex-col justify-between shadow-full"
//       style={{ backgroundImage: "url('/Image/Card.png')" }} // Background image
//     >
//       {/* Live Badge */}
//       <div className="absolute top-5 left-5 flex items-center justify-center gap-1 bg-[#333333] bg-opacity-70 px-3 py-1 rounded-3xl shadow-md h-[30px]">
//   <span className="text-white text-xl font-light leading-none">Live</span>
//   <Image src="/Image/image 2.png" alt="Live" width={20} height={20} className="object-contain" />
// </div>

// {/* Favorite (Star) Icon */}
// <div className="absolute items-center justify-center top-7 right-1">
//   <Image src="/Image/Icon (1).png" alt="Favorite" width={25} height={25} />
// </div>

//       {/* Match Image */}
//       <div className="flex justify-center items-center pt-11">
//         <Image src={match.image} alt={match.title} width={160} height={100} className="rounded-lg shadow-md" />
//       </div>

//       {/* Match Title & Details */}
//       <div className="text-center mt-2">
//         <h2 className="text-lg font-medium text-white">{match.title}</h2>
//         <p className="text-white text-xs">{match.details}</p>
//       </div>
//     </div>
//   </div>
// );

// export default function Matches() {
//   const matches = [
//     { image: '/Image/image (2).png', title: 'Ind vs Pak', details: 'ICC Champions Trophy 2025' },
//     { image: '/Image/image (2).png', title: 'NZ vs SA', details: 'ODI Series [5-0] Match 4' },
//     { image: '/Image/image (2).png', title: 'AUS vs ENG', details: 'Ashes Series 2025' },
//     { image: '/Image/image (2).png', title: 'WI vs SL', details: 'T20 World Cup Qualifiers' },
//   ];

//   return (
//     <div className="flex justify-center items-center py-8 w-[392px] mx-auto">
//       <Swiper spaceBetween={16} slidesPerView={2}>
//         {matches.map((match, index) => (
//           <SwiperSlide key={index}>
//             <MatchCard match={match} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// 'use client';

// import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';

// const MatchCard = ({ match }) => (
//   <div className="relative w-48 h-[270px] rounded-3xl p-3 border-[0.5px] border-gray-600 bg-[#151414] shadow-[0_0_15px_rgba(255,255,255,0.1)]">
//     {/* Background Image */}
//     <div
//       className="w-full h-full rounded-3xl p-2 bg-cover bg-center flex flex-col justify-between"
//       style={{ backgroundImage: "url('/Image/Card.png')" }}
//     >
//       {/* First Div: Live Badge & Favorite Icon */}
//       <div className="flex items-center justify-between px-2">
//         {/* Live Badge */}
//         <div className="flex items-center bg-[#333] bg-opacity-70 px-3 py-1 rounded-3xl shadow-md">
//           <span className="text-white text-lg font-light">Live</span>
//           <Image src="/Image/image 2.png" alt="Live" width={20} height={20} className="ml-2" />
//         </div>
//         {/* Favorite (Star) Icon */}
//         <div>
//           <Image src="/Image/Icon (1).png" alt="Favorite" width={25} height={25} />
//         </div>
//       </div>

//       {/* Second Div: Match Image */}
//       <div className="flex justify-center items-center p-3">
//         <Image src={match.image} alt={match.title} width={160} height={100} className="rounded-lg shadow-md" />
//       </div>

//       {/* Third Div: Match Title & Score */}
//       <div className="text-center mt-2">
//         <h2 className="text-xl font-medium font-[Inter] text-white">{match.title}</h2>
//         <p className="text-white text-xs">{match.details}</p>
//       </div>
//     </div>
//   </div>
// );

// export default function Matches() {
//   const matches = [
//     { image: '/Image/image (2).png', title: 'Ind vs Pak', details: 'ICC Champions Trophy 2025' },
//     { image: '/Image/image (2).png', title: 'NZ vs SA', details: 'ODI Series [5-0] Match 4' },
//     { image: '/Image/image (2).png', title: 'AUS vs ENG', details: 'Ashes Series 2025' },
//     { image: '/Image/image (2).png', title: 'WI vs SL', details: 'T20 World Cup Qualifiers' },
//   ];

//   return (
//     <div className="flex justify-center items-center py-8 w-[392px] mx-auto">
//       <Swiper spaceBetween={16} slidesPerView={2}>
//         {matches.map((match, index) => (
//           <SwiperSlide key={index}>
//             <MatchCard match={match} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// 'use client';

// import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';

// const MatchCard = ({ match }) => (
//   <div className="relative w-48 h-[270px] rounded-2xl p-2 shadow-lg border border-gray-700 bg-[#151414]">
//     {/* Background Image */}
//     <div
//       className="w-full h-full rounded-2xl p-2 bg-cover bg-center flex flex-col justify-between shadow-md border border-gray-600"
//       style={{ backgroundImage: "url('/Image/Card.png')" }}
//     >
//       {/* First Div: Live Badge & Favorite Icon */}
// <div className="flex items-center justify-between">
//   {/* Live Badge */}
//   <div className="flex items-center bg-black bg-opacity-50 px-2 py-1 rounded-xl shadow">
//     <span className="text-white text-sm font-light">Live</span>
//     <Image src="/Image/image 2.png" alt="Live" width={18} height={18} className="ml-1" />
//   </div>
//   {/* Favorite (Star) Icon */}
//   <Image src="/Image/Icon (1).png" alt="Favorite" width={22} height={22} />
// </div>

//       {/* Second Div: Match Image */}
//       <div className="flex justify-center items-center p-2">
//         <Image src={match.image} alt={match.title} width={140} height={90} className="rounded-lg shadow-md" />
//       </div>

//       {/* Third Div: Match Title & Score */}
//       <div className="text-center mt-2">
//         <h2 className="text-lg font-medium text-white">{match.title}</h2>
//         <p className="text-gray-300 text-xs">{match.details}</p>
//       </div>
//     </div>
//   </div>
// );

// export default function Matches() {
//   const matches = [
//     { image: '/Image/image (2).png', title: 'Ind vs Pak', details: 'ICC Champions Trophy 2025' },
//     { image: '/Image/image (2).png', title: 'NZ vs SA', details: 'ODI Series [5-0] Match 4' },
//     { image: '/Image/image (2).png', title: 'AUS vs ENG', details: 'Ashes Series 2025' },
//     { image: '/Image/image (2).png', title: 'WI vs SL', details: 'T20 World Cup Qualifiers' },
//   ];

//   return (
//     <div className="flex justify-center items-center py-8 w-full">
//       <Swiper spaceBetween={12} slidesPerView={2}>
//         {matches.map((match, index) => (
//           <SwiperSlide key={index}>
//             <MatchCard match={match} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// 'use client';

// import Image from 'next/image';
// import { useRouter } from "next/navigation";
// import Link from 'next/link';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import { useRouter } from "next/navigation";

// const MatchCard = ({id, match }) => (

//   // <Link href={`/src/app/page/LiveMatch/Page.js`}>
//   <div    onClick={() => router.push("/liveMatch")} className="relative w-48 h-[270px] rounded-2xl p-2 shadow-lg  bg-[#151414]">
//     {/* Background Image */}
//     <div
//       className="w-full h-full rounded-2xl p-2 bg-cover bg-center flex flex-col justify-between shadow-md "
//       style={{ backgroundImage: "url('/Image/Card.png')" }}
//     >
//       {/* First Div: Live Badge & Favorite Icon */}
//       <div className="flex items-center justify-between">
//         {/* Live Badge */}
//         <div className="flex items-center bg-[#333333] bg-opacity-70 px-3 py-1 rounded-full shadow">
//           <span className="text-white text-lg font-light">Live</span>
//           <Image src="/Image/image 2.png" alt="Live" width={18} height={18} className="ml-1" />
//         </div>
//         {/* Favorite (Star) Icon */}
//         <Image src="/Image/Icon (1).png" alt="Favorite" width={22} height={22} />
//       </div>

//       {/* Second Div: Match Image */}
//       <div className="flex justify-center items-center p-2">
//         <Image src={match.image} alt={match.title} width={140} height={90} className="rounded-lg shadow-md" />
//       </div>

//       {/* Third Div: Match Title & Score */}
//       <div className="text-center mt-2 mb-3">
//         <h2 className="text-lg font-medium text-white">{match.title}</h2>
//         <p className="text-gray-300 text-xs">{match.details}</p>
//       </div>
//     </div>
//   </div>
//   // </Link>
// );

// export default function Matches() {
//   const matches = [
//     { image: '/Image/image (2).png', title: 'Ind vs Pak', details: 'ICC Champions Trophy 2025' },
//     { image: '/Image/image (2).png', title: 'NZ vs SA', details: 'ODI Series [5-0] Match 4' },
//     { image: '/Image/image (2).png', title: 'AUS vs ENG', details: 'Ashes Series 2025' },
//     { image: '/Image/image (2).png', title: 'WI vs SL', details: 'T20 World Cup Qualifiers' },
//   ];

//   const router = useRouter(); // Router initialize

//   return (

//     <div className="flex justify-center items-center gap-8 py-8 w-[392px] mx-auto">
//       <Swiper spaceBetween={12} slidesPerView={2}>
//         {matches.map((match, index) => (
//           <SwiperSlide key={index}>
//             <MatchCard match={match} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";

const MatchCard = ({ match }) => {
  const router = useRouter(); // 👈 Router initialize inside component

  return (
    <Link
      href="about"
      className="relative w-48 h-[270px] rounded-2xl p-2 shadow-lg bg-[#151414] cursor-pointer"
    >
      {/* Background Image */}
      <div
        className="w-full h-full rounded-2xl p-2 bg-cover bg-center flex flex-col justify-between shadow-md"
        style={{ backgroundImage: "url('/Image/Card.png')" }}
      >
        {/* First Div: Live Badge & Favorite Icon */}
        <div className="flex items-center justify-between">
          {/* Live Badge */}
          <div className="flex items-center bg-[#333333] bg-opacity-70 px-3 py-1 rounded-full shadow">
            <span className="text-white text-lg font-light">Live</span>
            <Image
              src="/Image/image 2.png"
              alt="Live"
              width={18}
              height={18}
              className="ml-1"
            />
          </div>
          {/* Favorite (Star) Icon */}
          <Image
            src="/Image/Icon (1).png"
            alt="Favorite"
            width={22}
            height={22}
          />
        </div>

        {/* Second Div: Match Image */}
        <div className="flex justify-center items-center p-2">
          <Image
            src={match.image}
            alt={match.title}
            width={140}
            height={90}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Third Div: Match Title & Score */}
        <div className="text-center mt-2 mb-3">
          <h2 className="text-lg font-medium text-white">{match.title}</h2>
          <p className="text-gray-300 text-xs">{match.details}</p>
        </div>
      </div>
    </Link>
  );
};

export default function Matches() {
  const matches = [
    {
      image: "/Image/image (2).png",
      title: "Ind vs Pak",
      details: "ICC Champions Trophy 2025",
    },
    {
      image: "/Image/image (2).png",
      title: "NZ vs SA",
      details: "ODI Series [5-0] Match 4",
    },
    {
      image: "/Image/image (2).png",
      title: "AUS vs ENG",
      details: "Ashes Series 2025",
    },
    {
      image: "/Image/image (2).png",
      title: "WI vs SL",
      details: "T20 World Cup Qualifiers",
    },
  ];

  return (
    <div className="flex justify-center items-center gap-8 py-8 w-[392px] mx-auto">
      <Swiper spaceBetween={12} slidesPerView={2}>
        {matches.map((match, index) => (
          <SwiperSlide key={index}>
            <MatchCard match={match} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
