
'use client'
import { useRouter } from "next/navigation";
import YesButton from "../../ui/YesButton";
import NoButton from "../../ui/NoButton";
import Image from "next/image";



const BatsmanComponent = () => {
  const router = useRouter();

  const handleBidNavigation = (e) => {
    e.stopPropagation(); 
    router.push("/BidPage");
  };

  return (
    <div
      className="relative w-full max-w-md min-h-[250px] rounded-[20px] p-6 flex flex-col justify-between mx-auto bg-cover bg-center shadow-lg"
      style={{
        backgroundImage: "url('/Image/CArd 9.png')", // Ensure the correct path
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/Image/image 9 (1).png" alt="South Africa" width={24} height={16} />
            <p className="text-white text-lg font-semibold">South Africa</p>
          </div>
          <Image src="/Image/images.png" alt="David Miller" width={44} height={44} className="rounded-full border border-gray-300" />
        </div>

        <p className="text-sm text-white font-normal mt-3 leading-tight">
          Will <span className="font-semibold">David Miller</span> make a century while chasing? And become Man Of The Match?
        </p>

        <div className="flex items-center gap-2 mt-3">
          <Image src="/Image/people.png" width={16} height={16} alt="Link Icon" />
          <p className="text-[#606060] text-sm">123446 Traders</p>
        </div>

        <p className="text-white text-[10px] mt-1">
          Last few innings of David in knockouts: <span className="font-semibold">72* (89), 112 (120), 120* (89)</span>
        </p>

        <div className="flex justify-between gap-3 mt-5">
        <div onClick={handleBidNavigation}>
                <YesButton />
              </div>

              <div onClick={handleBidNavigation}>
                <NoButton />
              </div>
        </div>
      </div>
    </div>
  );
};

export default BatsmanComponent;
