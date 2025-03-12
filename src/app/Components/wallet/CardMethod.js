"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import Image from "next/image";

const schema = yup.object().shape({
  cardNumber: yup
    .string()
    .matches(/^(\d{4}-){3}\d{4}$/, "Invalid card format (XXXX-XXXX-XXXX-XXXX)")
    .required("Card Number is required"),
  cvv: yup
    .string()
    .matches(/^\d{3}$/, "CVV must be 3 digits")
    .required("CVV is required"),
  expiry: yup
    .string()
    .required("Expiry date is required")
    .test("valid-date", "Invalid format (MM/YYYY)", (value) => {
      if (!/^(0[1-9]|1[0-2])\/\d{4}$/.test(value)) return false; // MM/YYYY format check

      const [month, year] = value.split("/").map(Number);
      const currentDate = new Date();
      const enteredDate = new Date(year, month - 1);

      return enteredDate >= currentDate; // Future or current date allowed
    }),
  fullName: yup.string().required("Full Name is required"),
});

export default function CardMethod() {
    const [isOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");

  // Card Number Formatting
  const handleCardInput = (e) => {
    let value = e.target.value.replace(/\D/g, "").substring(0, 16);
    let formattedValue = value.replace(/(\d{4})/g, "$1-").trim().replace(/-$/, "");
    setCardNumber(formattedValue);
  };

  // Expiry Date Formatting
  const handleExpiryInput = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove non-numeric
    if (value.length > 6) return; // Max length 6 (MMYYYY)
    if (value.length > 2) value = value.replace(/(\d{2})/, "$1/"); // Add `/` after MM
    setExpiry(value);
  };

  const onSubmit = (data) => {
    console.log("Payment Details:", data);
  };

  return (
    <div className="max-w-md mx-auto bg-[#3C3C3C] text-white p-6 rounded-lg shadow-lg">
     <div
      className="flex items-center justify-between  text-white  rounded-md cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center gap-2">
        <Image src="/Image/CreditCard.png" alt="Card Icon" width={24} height={24} />
        <span className="text-[16px] font-normal">Debit / Credit Card</span>
      </div>
      {isOpen ? <FaAngleUp className="text-xl" /> : <FaAngleDown className="text-xl" />}
    </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-5 text-xs font-normal">
        <div>
          <label className="block mb-2">Card Number</label>
          <input
            type="text"
            placeholder="XXXX-XXXX-XXXX-XXXX"
            value={cardNumber}
            onChange={handleCardInput}
            maxLength={19}
            className="w-full  rounded-xl py-5 px-5  border border-[#C5C6CC] text-white focus:outline-none"
          />
          {errors.cardNumber && <p className="text-red-500 mt-1 ml-2 text-xs">{errors.cardNumber.message}</p>}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">CVV/CVC No.</label>
            <input
              type="text"
              placeholder="000"
              {...register("cvv")}
              maxLength={3}
              className="w-full  rounded-xl py-5 px-5 border border-[#C5C6CC] text-white focus:outline-none"
            />
            {errors.cvv && <p className="text-red-500 mt-1 ml-2 text-xs">{errors.cvv.message}</p>}
          </div>
          <div>
            <label className="block mb-2">Valid Thru</label>
            <input
              type="text"
              placeholder="MM/YYYY"
              value={expiry}
              onChange={handleExpiryInput}
              maxLength={7}
              {...register("expiry")}
              className="w-full rounded-xl py-5 px-5  border border-[#C5C6CC] text-white focus:outline-none"
            />
            {errors.expiry && <p className="text-red-500 mt-1 ml-2 text-xs">{errors.expiry.message}</p>}
          </div>
        </div>
        <div>
          <label className="block mb-2">Full Name</label>
          <input
            type="text"
            placeholder="Name"
            {...register("fullName")}
            className="w-full rounded-xl py-5 px-5  border border-[#C5C6CC] text-white focus:outline-none"
          />
          {errors.fullName && <p className="text-red-500 mt-1 ml-2 text-xs">{errors.fullName.message}</p>}
        </div>

        <button
  type="submit"
  className={`w-[383px] h-[46px] rounded-[20px] text-white font-normal text-sm mt-2 
    ${isValid ? "bg-gradient-to-r from-[#1963E3] to-[#003A9E] hover:opacity-90" : "bg-gray-400 cursor-not-allowed"}`}
  disabled={!isValid}
>
  Proceed to pay ₹25
</button>

      </form>
    </div>
  );
}
