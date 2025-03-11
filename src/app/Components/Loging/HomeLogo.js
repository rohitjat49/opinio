// "use client";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";

// const HomeLogo = () => {
//   const router = useRouter();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       router.push("/nextpage"); // Change to your next page route
//     }, 3000); // Redirects after 3 seconds

//     return () => clearTimeout(timer);
//   }, [router]);

//   return (
//     <div className="flex items-center justify-center mx-auto w-[440px] max-h-screen bg-black">
//       <img
//         src="/Image/Opinio.png" // Change to your logo image path
//         alt="Logo"
//         className=""
//       />
//     </div>
//   );
// };

// export default HomeLogo;


"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const HomeLogo = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/nextpage"); // Change to your next page route
    }, 3000); // Redirects after 3 seconds

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <img
        src="/Image/Opinio.png" // Change to your logo image path
        alt="Logo"
        className="w-[440px] h-auto"
      />
    </div>
  );
};

export default HomeLogo;

