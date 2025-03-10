"use client";
import Image from "next/image";
// import { FaAngleRight } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

// Payment method images (stored in public folder)
const paymentMethods = [
  { image: "/Image/googlePay.png", label: "Google Pay" },
  { image: "/Image/PhonePe.png", label: "PhonePe" },
  { image: "/Image/image (3).png", label: "Paytm" },
  { image: "/Image/ApplePay.png", label: "Apple Pay" },
];

export default function PaymentMethods() {
  return (
    <div className="flex flex-col items-center  justify-center min-h-screen bg-[#333] text-white">
      <div className="w-full max-w-md p-5 rounded-lg">
        <h2 className="text-sm  font-normal  mb-4">
          Choose Payment method to add money into your wallet
        </h2>

        <div className="space-y-2">
          {paymentMethods.map((method, index) => (
            <PaymentOption key={index} image={method.image} label={method.label} />
          ))}
        </div>

        <button className="mt-8 w-full bg-blue-600 text-white py-3 rounded-full text-lg font-normal ">
          Proceed to pay ₹25
        </button>
      </div>
    </div>
  );
}

function PaymentOption({ image, label }) {
  return (
    <div className="flex items-center justify-between p-2 rounded-lg cursor-pointer  transition">
      <div className="flex items-center space-x-6">
        <Image src={image} alt={label} width={30} height={30} className="w-8 h-8 rounded-full" />
        <span className="text-white text-sm font-normal">{label}</span>
      </div>
      <IoIosArrowForward className="text-white" size={25} />
    </div>
  );
}
