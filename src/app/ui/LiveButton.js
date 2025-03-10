import Image from "next/image";

export default function BallBox() {
  return (
    <>
    <div className="relative flex items-center justify-center w-[58.8px] h-[25.99px] p-[6.5px_9.75px] rounded-[24.37px] shadow-inner bg-white/7 text-black">
      <span className="text-sm font-medium">Ball</span>
      <Image
        src="/Image/image (2).png" // Replace with your actual image path
        alt="Ball"
        width={20}
        height={20}
        className="absolute right-2"
      />
    </div>
    {/* <div className="relative flex items-center justify-center w-[120px] h-[50px] px-[16px] py-[10px] 
      rounded-[24.37px] bg-white/10 text-white text-lg font-medium 
      shadow-[inset_0_-1.62px_2.52px_#777777] before:absolute before:inset-0 before:rounded-[24.37px] 
      before:bg-gradient-to-b before:from-white/5 before:to-transparent before:z-[-1]">
      
      <span>Live</span>
      <Image
        src="/Image/image 2.png" // Ensure this image is in your public folder
        alt="Live Ball"
        width={30}
        height={30}
        className="absolute right-3"
      />
    </div> */}

<div className="relative flex items-center justify-center w-[120px] h-[50px] p-[12px] 
      rounded-[24.37px] bg-white/10 text-white text-lg font-medium 
      shadow-[inset_0_-1.62px_2.52px_#777777] before:absolute before:inset-0 before:rounded-[24.37px] 
      before:bg-gradient-to-b before:from-white/5 before:to-transparent before:z-[-1]">
      
      <span>Live</span>
      <Image
        src="/Image/image 2.png"
        alt="Live Ball"
        width={30}
        height={30}
        className="absolute right-3"
      />
</div>

  </>
  );
}
