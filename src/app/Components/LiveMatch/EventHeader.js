// 'use client';

// import { ArrowLeft, Share2 } from 'lucide-react';

// export default function EventHeader() {
//   return (
//     <div className="flex items-center justify-between bg-black text-white p-4">
//       <button className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full">
//         <ArrowLeft size={20} />
//       </button>
//       <h1 className="text-lg font-semibold">Event (SA vs ZA ODI Match)</h1>
//       <button className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full">
//         <Share2 size={20} />
//       </button>
//     </div>
//   );
// }


'use client';

import { IoArrowUndo, IoShareOutline } from 'react-icons/io5';

export default function EventHeader() {
  return (
    <div className="flex items-center justify-between  text-white ">
      <button className="flex items-center justify-center w-10 h-10 bg-[#333] rounded-full">
        <IoArrowUndo size={24} />
      </button>
      <h1 className="text-lg font-semibold">Event (SA vs ZA ODI Match)</h1>
      <button className="flex items-center justify-center w-10 h-10  rounded-full">
        <IoShareOutline size={24} />
      </button>
    </div>
  );
}
