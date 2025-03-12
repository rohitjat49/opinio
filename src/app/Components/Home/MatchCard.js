"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import BallBox from "../../ui/LiveButton";

const MatchCard = ({ match }) => {
  const router = useRouter(); 

  return (
    <Link href="about"> 
    <div
      className="relative w-[186px] h-[270px] rounded-2xl p-2 shadow-lg  bg-[#151414] cursor-pointer border-[0.5px] border-[#222222]"
    >
      <div
        className="w-full h-full rounded-2xl p-1 bg-cover bg-center flex flex-col justify-between shadow-md border-[0.5px] border-[#222222] overflow-hidden"
        style={{ backgroundImage: "url('/Image/Card.png')" }}
      >
        <div><BallBox/></div>
        <div className="flex justify-center items-center p-2">
          <Image
            src={match.image}
            alt={match.title}
            width={140}
            height={90}
            className="rounded-lg shadow-md"
          />
        </div>

        <div className="text-center mt-2 mb-3">
          <h2 className="text-lg font-medium text-white">{match.title}</h2>
          <p className="text-gray-300 text-xs">{match.details}</p>
        </div>
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