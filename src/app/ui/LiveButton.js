// import Image from "next/image";

// export default function BallBox() {
//   return (
//     <>
    
    
// <div className="relative flex items-center justify-center w-[120px] h-[50px] p-[12px] 
//       rounded-[24.37px] bg-white/10 text-white text-lg font-medium 
//       shadow-[inset_0_-1.62px_2.52px_#777777] before:absolute before:inset-0 before:rounded-[24.37px] 
//       before:bg-gradient-to-b before:from-white/5 before:to-transparent before:z-[-1]">
      
//       <span>Live</span>
//       <Image
//         src="/Image/image 2.png"
//         alt="Live Ball"
//         width={30}
//         height={30}
//         className="absolute right-3"
//       />
// </div>

//   </>
//   );
// }



// import Image from "next/image";

// export default function BallBox() {
//   return (
//     <>
     

//       {/* Live Box */}
//       <div className="relative flex items-center justify-center w-[120px] h-[50px] p-[12px] 
//         rounded-[24.37px] bg-white/10 text-white text-lg font-medium 
//         shadow-[inset_0_-1.62px_2.52px_#777777] before:absolute before:inset-0 before:rounded-[24.37px] 
//         before:bg-gradient-to-b before:from-white/5 before:to-transparent before:z-[-1]">
        
//         <span>Live</span>
//         <Image
//           src="/Image/image 2.png"
//           alt="Live Ball"
//           width={30}
//           height={30}
//           className="absolute right-3"
//         />
//       </div>

//       {/* Start Image */}
//       <div className="relative flex items-center justify-center mt-4">
//         <Image
//           src="/Image/Icon (1).png" // Replace with your actual start image path
//           alt="Start Icon"
//           width={40}
//           height={40}
//         />
//       </div>
//     </>
//   );
// }


// import Image from "next/image";

// export default function BallBox() {
//   return (
//     <div className="relative flex items-center">
//       {/* Live Box */}
//       <div className="flex items-center justify-center w-[120px] h-[50px] p-[12px] 
//         rounded-[24.37px] bg-white/10 text-white text-lg font-medium 
//         shadow-[inset_0_-1.62px_2.52px_#777777] before:absolute before:inset-0 before:rounded-[24.37px] 
//         before:bg-gradient-to-b before:from-white/5 before:to-transparent before:z-[-1] space-x-2">
        
//         <span>Live</span>

//         {/* Live Ball Icon */}
//         <Image
//           src="/Image/image 2.png"
//           alt="Live Ball"
//           width={30}
//           height={30}
//         />
//       </div>

//       {/* Start Icon Outside Live Box */}
//       <Image
//         src="/Image/Icon (1).png" // Replace with your actual start image path
//         alt="Start Icon"
//         width={30}
//         height={30}
//         className="ml-3  w-14 h-14"
//       />
//     </div>
//   );
// }


import Image from "next/image";

export default function BallBox() {
  return (
    <div className="relative flex items-center space-x-12">
      {/* Live Box */}
      <div className="flex items-center justify-center  py-1 px-2
        rounded-[24.37px] bg-white/10 text-white text-[10px] font-light
        shadow-[inset_0_-1.62px_2.52px_#777777] before:absolute before:inset-0 before:rounded-[24.37px] 
        before:bg-gradient-to-b before:from-white/5 before:to-transparent before:z-[-1] space-x-2">
        
        <span>Live</span>

        {/* Live Ball Icon */}
        <Image
          src="/Image/image 2.png"
          alt="Live Ball"
          className="w-3 h-3"
          width={13}
          height={13}
        />
      </div>

      {/* Start Icon Outside Live Box, Centered */}
      <div className="flex items-center justify-center ml-4 ">
        <Image
          src="/Image/Icon (1).png" // Replace with your actual start image path
          alt="Start Icon"
          width={56}
          height={56}
          className="w-8 h-8 mt-2"
        />
      </div>
    </div>
  );
}
