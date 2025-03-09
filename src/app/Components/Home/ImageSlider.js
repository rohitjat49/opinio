// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectFade } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import Image from "next/image";

// const images = [
//   "/Image/Card=01, Size=Lg.png",  
//   "/Image/Card=02, Size=Lg.png",
//   "/Image/Card=03, Size=Lg.png",
// ];

// export default function ImageSlider() {
//   return (
//     <div className="w-full max-w-lg mx-auto">
//       <Swiper
//         modules={[EffectFade]}
//         effect="fade"
//         spaceBetween={0}
//         slidesPerView={1}
//       >
//         {images.map((src, index) => (
//           <SwiperSlide key={index}>
//             <Image
//               src={src}
//               alt={`Slide ${index + 1}`}
//               width={500}
//               height={300}
//               className="rounded-lg"
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }


// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectFade } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import Image from "next/image";

// const images = [
//   "/Image/Card=01, Size=Lg.png",  
//   "/Image/Card=02, Size=Lg.png",
//   "/Image/Card=03, Size=Lg.png",
// ];

// export default function ImageSlider() {
//   return (
//     <div className="w-full max-w-lg mx-auto">
//       <Swiper
//         modules={[EffectFade]}
//         effect="fade"
//         spaceBetween={10} // Thoda gap
//         slidesPerView={1.2} // 1 image fully dikhegi + next image ka aadha part dikhega
//         loop={true} // Last image ke baad wapas first image aaye
//         centeredSlides={true} // Current slide center me rahega
//       >
//         {images.map((src, index) => (
//           <SwiperSlide key={index} className="flex justify-center">
//             <Image
//               src={src}
//               alt={`Slide ${index + 1}`}
//               width={500}
//               height={300}
//               className="rounded-lg shadow-lg"
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }



"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Image from "next/image";

const images = [
  "/Image/Card=01, Size=Lg.png",
  "/Image/Card=02, Size=Lg.png",
  "/Image/Card=03, Size=Lg.png",
];

export default function ImageSlider() {
  return (
    <div className="w-full max-w-lg mx-auto relative">
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade" // Fade effect enable
        slidesPerView={1}
        loop={true} // Image khatam hote hi first wapas aaye
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className="relative"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              width={500}
              height={300}
              className="rounded-lg shadow-lg transition-opacity duration-700"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

