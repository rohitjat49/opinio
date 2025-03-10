// "use client";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { useState } from "react";

// const schema = yup.object().shape({
//   cardNumber: yup
//     .string()
//     .matches(/^(\d{4}-){3}\d{4}$/, "Invalid card format (XXXX-XXXX-XXXX-XXXX)")
//     .required("Card Number is required"),
//   cvv: yup
//     .string()
//     .matches(/^\d{3}$/, "CVV must be 3 digits")
//     .required("CVV is required"),
//   expiry: yup
//     .string()
//     .matches(/^(0[1-9]|1[0-2])\/\d{4}$/, "Invalid format (MM/YYYY)")
//     .required("Expiry date is required"),
//   fullName: yup.string().required("Full Name is required"),
// });

// export default function CardPayment() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isValid },
//   } = useForm({
//     resolver: yupResolver(schema),
//     mode: "onChange",
//   });

//   const [cardNumber, setCardNumber] = useState("");

//   // Card Number Formatting
//   const handleCardInput = (e) => {
//     let value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
//     value = value.substring(0, 16); // Allow only 16 digits
//     let formattedValue = value.replace(/(\d{4})/g, "$1-").trim(); // Add `-` after every 4 digits
//     formattedValue = formattedValue.replace(/-$/, ""); // Remove trailing `-`
//     setCardNumber(formattedValue);
//   };

//   const onSubmit = (data) => {
//     console.log("Payment Details:", data);
//   };

//   return (
//     <div className="max-w-md mx-auto bg-gray-900 text-white p-6 rounded-lg shadow-lg">
//       <h2 className="text-lg font-semibold flex items-center gap-2">
//         <span>💳</span> Debit / Credit Card
//       </h2>

//       <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
//         {/* Card Number */}
//         <div>
//           <label className="block text-sm">Card Number</label>
//           <input
//             type="text"
//             placeholder="XXXX-XXXX-XXXX-XXXX"
//             value={cardNumber}
//             onChange={handleCardInput}
//             maxLength={19} // Prevent typing more than needed
//             className="w-full p-2 rounded bg-gray-800 border border-gray-600 text-white focus:outline-none"
//           />
//           {errors.cardNumber && <p className="text-red-500 text-xs">{errors.cardNumber.message}</p>}
//         </div>

//         {/* CVV & Expiry */}
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm">CVV/CVC No.</label>
//             <input
//               type="text"
//               placeholder="000"
//               {...register("cvv")}
//               maxLength={3}
//               className="w-full p-2 rounded bg-gray-800 border border-gray-600 text-white focus:outline-none"
//             />
//             {errors.cvv && <p className="text-red-500 text-xs">{errors.cvv.message}</p>}
//           </div>
//           <div>
//             <label className="block text-sm">Valid Thru</label>
//             <input
//               type="text"
//               placeholder="MM/YYYY"
//               {...register("expiry")}
//               maxLength={7}
//               className="w-full p-2 rounded bg-gray-800 border border-gray-600 text-white focus:outline-none"
//             />
//             {errors.expiry && <p className="text-red-500 text-xs">{errors.expiry.message}</p>}
//           </div>
//         </div>

//         {/* Full Name */}
//         <div>
//           <label className="block text-sm">Full Name</label>
//           <input
//             type="text"
//             placeholder="Name"
//             {...register("fullName")}
//             className="w-full p-2 rounded bg-gray-800 border border-gray-600 text-white focus:outline-none"
//           />
//           {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName.message}</p>}
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className={`w-full font-semibold p-2 rounded-lg mt-2 ${
//             isValid ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-gray-600 text-gray-400 cursor-not-allowed"
//           }`}
//           disabled={!isValid}
//         >
//           Proceed to pay ₹25
//         </button>
//       </form>
//     </div>
//   );
// }


"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

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
    <div className="max-w-md mx-auto bg-gray-900 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold flex items-center gap-2">
        <span>💳</span> Debit / Credit Card
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
        {/* Card Number */}
        <div>
          <label className="block text-sm">Card Number</label>
          <input
            type="text"
            placeholder="XXXX-XXXX-XXXX-XXXX"
            value={cardNumber}
            onChange={handleCardInput}
            maxLength={19}
            className="w-full p-2 rounded bg-gray-800 border border-gray-600 text-white focus:outline-none"
          />
          {errors.cardNumber && <p className="text-red-500 text-xs">{errors.cardNumber.message}</p>}
        </div>

        {/* CVV & Expiry */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm">CVV/CVC No.</label>
            <input
              type="text"
              placeholder="000"
              {...register("cvv")}
              maxLength={3}
              className="w-full p-2 rounded bg-gray-800 border border-gray-600 text-white focus:outline-none"
            />
            {errors.cvv && <p className="text-red-500 text-xs">{errors.cvv.message}</p>}
          </div>
          <div>
            <label className="block text-sm">Valid Thru</label>
            <input
              type="text"
              placeholder="MM/YYYY"
              value={expiry}
              onChange={handleExpiryInput}
              maxLength={7}
              {...register("expiry")}
              className="w-full p-2 rounded bg-gray-800 border border-gray-600 text-white focus:outline-none"
            />
            {errors.expiry && <p className="text-red-500 text-xs">{errors.expiry.message}</p>}
          </div>
        </div>

        {/* Full Name */}
        <div>
          <label className="block text-sm">Full Name</label>
          <input
            type="text"
            placeholder="Name"
            {...register("fullName")}
            className="w-full p-2 rounded bg-gray-800 border border-gray-600 text-white focus:outline-none"
          />
          {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full font-semibold p-2 rounded-lg mt-2 ${
            isValid ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-gray-600 text-gray-400 cursor-not-allowed"
          }`}
          disabled={!isValid}
        >
          Proceed to pay ₹25
        </button>
      </form>
    </div>
  );
}
