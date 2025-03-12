
"use client";
import { useRouter } from "next/navigation";
import YesButton from "../../ui/YesButton";
import NoButton from "../../ui/NoButton";
import Image from "next/image";

const CardComponent = () => {
  const router = useRouter();

  const handleCardNavigation = (e) => {
    e.stopPropagation(); 
    router.push("/PredictionsBid");
  };

  const handleBidNavigation = (e) => {
    e.stopPropagation(); 
    router.push("/BidPage");
  };

  const cardData = [1, 2, 3]; 

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
          onClick={handleCardNavigation} 
        >
          <div className="relative z-10">
            <div className="flex items-center gap-3">
              <Image
                src="/Image/image 2.png"
                width={24}
                height={24}
                alt="Ball"
              />
              <p className="text-lg font-normal text-white">Cricket</p>
              <div className="flex gap-2 items-center ml-auto">
                <Image
                  src="/Image/image 9 (1).png"
                  width={28}
                  height={20}
                  alt="SA Flag"
                />
                <span className="text-gray-300 text-sm">V/s</span>
                <Image
                  src="/Image/image 10.png"
                  width={28}
                  height={20}
                  alt="NZ Flag"
                />
              </div>
            </div>

            {/* Match Details */}
            <p className="text-sm text-white font-normal mt-3">
              South Africa to win the 2nd Semi-Final vs New Zealand?
            </p>

            <div className="flex items-center gap-2 my-4">
              <Image
                src="/Image/people.png"
                width={18}
                height={18}
                alt="Traders Icon"
              />
              <p className="text-[#606060] text-sm">123,446 Traders</p>
            </div>

            <p className="text-white font-light text-xs">
              H2H Last 5 ODI SA: 02, NZ: 03, Draw: 0
            </p>

            <div className="flex justify-between gap-4 mt-5 cursor-pointer">
              <div onClick={handleBidNavigation}>
                <YesButton />
              </div>

              <div onClick={handleBidNavigation}>
                <NoButton />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
