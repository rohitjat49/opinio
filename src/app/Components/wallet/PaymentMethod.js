// "use client";
// import Image from "next/image";
// // import { FaAngleRight } from "react-icons/fa";
// import { IoIosArrowForward } from "react-icons/io";

// // Payment method images (stored in public folder)
// const paymentMethods = [
//   { image: "/Image/googlePay.png", label: "Google Pay" },
//   { image: "/Image/PhonePe.png", label: "PhonePe" },
//   { image: "/Image/image (3).png", label: "Paytm" },
//   { image: "/Image/ApplePay.png", label: "Apple Pay" },
// ];

// export default function PaymentMethods() {
//   return (
//     <div className="flex flex-col items-center  justify-center min-h-screen bg-[#333] text-white">
//       <div className="w-full max-w-md p-5 rounded-lg">
//         <h2 className="text-sm  font-normal  mb-6">
//           Choose Payment method to add money into your wallet
//         </h2>

//         <div className="space-y-4 text-sm font-normal">
//           {paymentMethods.map((method, index) => (
//             <PaymentOption key={index} image={method.image} label={method.label} />
//           ))}
//         </div>

//         <button
//   type="submit"
//   className="w-[383px] h-[46px] rounded-[20px] text-white font-normal text-sm mt-8 
//              bg-gradient-to-r from-[#003A9E] to-[#1963E3] hover:opacity-90"
// >
//   Proceed to pay ₹25  
// </button>

//       </div>
//     </div>
//   );
// }

// function PaymentOption({ image, label }) {
//   return (
//     <div className="flex items-center justify-between p-2 rounded-lg cursor-pointer  transition">
//       <div className="flex items-center space-x-6">
//         <Image src={image} alt={label} width={30} height={30} className="w-8 h-8 rounded-full" />
//         <span className="text-white text-sm font-normal">{label}</span>
//       </div>
//       <IoIosArrowForward className="text-white" size={25} />
//     </div>
//   );
// }


// "use client";
// import Image from "next/image";
// import { IoIosArrowForward } from "react-icons/io";

// // Payment method images & links
// const paymentMethods = [
//   { image: "/Image/googlePay.png", label: "Google Pay", link: "https://pay.google.com/" },
//   { image: "/Image/PhonePe.png", label: "PhonePe", link: "https://www.phonepe.com/" },
//   { image: "/Image/image (3).png", label: "Paytm", link: "https://paytm.com/" },
//   { image: "/Image/ApplePay.png", label: "Apple Pay", link: "https://www.apple.com/apple-pay/" },
// ];

// export default function PaymentMethods() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-[#333] text-white">
//       <div className="w-full max-w-md p-5 rounded-lg">
//         <h2 className="text-sm font-normal mb-6">
//           Choose Payment method to add money into your wallet
//         </h2>

//         <div className="space-y-4 text-sm font-normal">
//           {paymentMethods.map((method, index) => (
//             <PaymentOption key={index} image={method.image} label={method.label} link={method.link} />
//           ))}
//         </div>

//         <button
//           type="submit"
//           className="w-[383px] h-[46px] rounded-[20px] text-white font-normal text-sm mt-8 
//                     bg-gradient-to-r from-[#003A9E] to-[#1963E3] hover:opacity-90"
//         >
//           Proceed to pay ₹25
//         </button>
//       </div>
//     </div>
//   );
// }

// function PaymentOption({ image, label, link }) {
//   return (
//     <div 
//       className="flex items-center justify-between p-2 rounded-lg cursor-pointer transition"
//       onClick={() => window.open(link, "_blank")} // Open link in a new tab
//     >
//       <div className="flex items-center space-x-6">
//         <Image src={image} alt={label} width={30} height={30} className="w-8 h-8 rounded-full" />
//         <span className="text-white text-sm font-normal">{label}</span>
//       </div>
//       <IoIosArrowForward className="text-white" size={25} />
//     </div>
//   );
// }


"use client";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

// Payment method images & links
const paymentMethods = [
  { image: "/Image/googlePay.png", label: "Google Pay", link: "https://pay.google.com/" },
  { image: "/Image/PhonePe.png", label: "PhonePe", link: "https://www.phonepe.com/" },
  { image: "/Image/image (3).png", label: "Paytm", link: "https://paytm.com/" },
  { image: "/Image/ApplePay.png", label: "Apple Pay", link: "https://www.apple.com/apple-pay/" },
];

export default function PaymentMethods() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#333] text-white">
      <div className="w-full max-w-md p-5 rounded-lg">
        <h2 className="text-sm font-normal mb-6">
          Choose Payment method to add money into your wallet
        </h2>

        <div className="space-y-4 text-sm font-normal">
          {paymentMethods.map((method, index) => (
            <PaymentOption key={index} image={method.image} label={method.label} link={method.link} />
          ))}
        </div>

        <button
          type="submit"
          className="w-[383px] h-[46px] rounded-[20px] text-white font-normal text-sm mt-8 
                    bg-gradient-to-r from-[#003A9E] to-[#1963E3] hover:opacity-90"
        >
          Proceed to pay ₹25
        </button>
      </div>
    </div>
  );
}

function PaymentOption({ image, label, link }) {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center justify-between p-2 rounded-lg cursor-pointer transition"
    >
      <div className="flex items-center space-x-6">
        <Image src={image} alt={label} width={30} height={30} className="w-8 h-8 rounded-full" />
        <span className="text-white text-sm font-normal">{label}</span>
      </div>
      <IoIosArrowForward className="text-white" size={25} />
    </a>
  );
}
