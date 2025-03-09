// "use client";

// import { useState } from "react";
// import { FiHome, FiUser, FiClock, FiShoppingBag } from "react-icons/fi";

// const ButtonNav = () => {
//   const [active, setActive] = useState("home");

//   return (
//     <div className="fixed bottom-5 left-1/2 -translate-x-1/2 flex items-center bg-[#333333] p-2 rounded-full shadow-lg space-x-4">
//       {[
//         { id: "home", icon: <FiHome />, label: "Home" },
//         { id: "wallet", icon: <FiShoppingBag />, label: "Wallet" },
//         { id: "clock", icon: <FiClock />, label: "Clock" },
//         { id: "profile", icon: <FiUser />, label: "Profile" },
//       ].map((item) => (
//         <button
//           key={item.id}
//           onClick={() => setActive(item.id)}
//           className={`flex items-center space-x-2 p-3 rounded-full transition-all duration-300 ${
//             active === item.id
//               ? "bg-gradient-to-r from-[#1963E3] to-[#003A9E] text-white"
//               : "text-gray-400"
//           }`}
//         >
//           {item.icon}
//           {active === item.id && <span className="text-sm">{item.label}</span>}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default ButtonNav;


// "use client";

// import { useState } from "react";
// import { FiHome, FiUser, FiClock, FiShoppingBag } from "react-icons/fi";

// const ButtonNav = () => {
//   const [active, setActive] = useState("home");

//   return (
//     <div className="fixed bottom-2 left-1/2 -translate-x-1/2 flex items-center bg-[#333333] p-2 rounded-full shadow-lg space-x-4">
//       {[
//         { id: "home", icon: <FiHome />, label: "Home" },
//         { id: "wallet", icon: <FiShoppingBag />, label: "Wallet" },
//         { id: "clock", icon: <FiClock />, label: "Clock" },
//         { id: "profile", icon: <FiUser />, label: "Profile" },
//       ].map((item) => (
//         <button
//           key={item.id}
//           onClick={() => setActive(item.id)}
//           className={`flex items-center space-x-2 p-3 rounded-full transition-all duration-300 ${
//             active === item.id
//               ? "bg-gradient-to-r from-[#003A9E] to-[#1963E3] text-white"
//               : "text-gray-400"
//           }`}
//         >
//           {item.icon}
//           {active === item.id && <span className="text-sm">{item.label}</span>}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default ButtonNav;

"use client";

import { useState } from "react";
import { FiHome, FiUser, FiClock, FiShoppingBag } from "react-icons/fi";

const ButtonNav = () => {
  const [active, setActive] = useState("home");

  return (
    <div className="fixed bottom-2 left-1/2 -translate-x-1/2 flex items-center bg-[#333333] p-2 rounded-full shadow-lg space-x-4">
      {[
        { id: "home", icon: <FiHome />, label: "Home" },
        { id: "wallet", icon: <FiShoppingBag />, label: "Wallet" },
        { id: "clock", icon: <FiClock />, label: "Clock" },
        { id: "profile", icon: <FiUser />, label: "Profile" },
      ].map((item) => (
        <button
          key={item.id}
          onClick={() => setActive(item.id)}
          className={`flex items-center space-x-2 p-3 rounded-full transition-all duration-300 cursor-pointer ${
            active === item.id
              ? "bg-gradient-to-r from-[#003A9E] to-[#1963E3] text-white"
              : "text-gray-400"
          }`}
        >
          {item.icon}
          {active === item.id && <span className="text-sm">{item.label}</span>}
        </button>
      ))}
    </div>
  );
};

export default ButtonNav;
