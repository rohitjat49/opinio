"use client";
import { useState } from "react";
import Image from "next/image";
import AuthLayout from "../Auth/AuthLayout";
const MobileNumberScreen = ({ onNext }) => {
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(false);
  const validateMobile = (value) => {
    if (!/^[6-9]\d{9}$/.test(value)) {
      setError("Please enter a valid 10-digit mobile number");
      setIsValid(false);
    } else {
      setError("");
      setIsValid(true);
    }
    setMobile(value);
  };

  return (
    <AuthLayout>
      <h2 className="text-2xl font-normal">Enter your mobile number</h2>
      <p className="text-sm text-[#909090] mb-6">We&apos;ll send you an OTP</p>

      <form className="space-y-4">
        <div className="flex items-center bg-[#77777740] rounded-lg overflow-hidden shadow-md">
          <span className="px-7 py-2 text-white flex items-center gap-2">
            <Image src="/Image/Group.png" alt="India Flag" width={24} height={16} priority />
            +91
          </span>
          <div className="w-[1px] h-14 bg-[#312f2f]"></div>
          <input
            type="text"
            maxLength={10}
            value={mobile}
            onChange={(e) => validateMobile(e.target.value)}
            className="w-full px-3 py-2 text-white bg-transparent outline-none placeholder-gray-400"
            placeholder="9876543210"
            aria-label="Enter mobile number"
          />
        </div>

        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

        <div className="mt-48">
          <p className="text-sm font-normal text-[#909090]">
            By continuing, you accept you are 18+ years of age and agree to the Terms & Conditions.
          </p>
          <button
            type="button"
            className={`w-full py-3 text-sm rounded-lg mt-6 transition ${
              isValid
                ? "bg-blue-500 text-white cursor-pointer hover:bg-blue-600"
                : "bg-[#77777740] text-[#817e7e] opacity-50 cursor-not-allowed"
            }`}
            disabled={!isValid}
            onClick={() => onNext(mobile)}
          >
            Get OTP
          </button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default MobileNumberScreen;

