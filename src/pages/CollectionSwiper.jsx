import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

import pearl from "../assets/jwel1.avif";
import hooks from "../assets/jwel2.avif";
import chain from "../assets/blog2.avif";
import ring from "../assets/ring.avif";
import accessories from "../assets/accessories.avif";
import bracelet from "../assets/bracelete.avif";
import pendant from "../assets/jwel3.avif";
import studs from "../assets/jwel4.avif";
import bangles from "../assets/jwel5.avif";
import necklace from "../assets/blog3.avif";

const categories = [
  { image: pearl, title: "Pearl Jewellery" },
  { image: hooks, title: "Ear Hooks" },
  { image: chain, title: "Chain" },
  { image: ring, title: "Ring" },
  { image: accessories, title: "Accessories" },
  { image: bracelet, title: "Bracelets" },
  { image: pendant, title: "Pendant" },
  { image: studs, title: "Studs" },
  { image: bangles, title: "Bangles" },
  { image: necklace, title: "Necklace" },
];

const CollectionSwiper = () => {
  return (
    <section className="w-full bg-[#fdf8f4] py-12 sm:py-16 px-0 font-serif">
      <div className="w-full text-center px-4 sm:px-8 md:px-12 mb-10 sm:mb-14">
        <p className="text-xs sm:text-sm text-[#ce9c84] uppercase tracking-widest font-medium mb-1 sm:mb-2">
          Attractive Jewellery
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#130c0dd1]">
          Gorgeous Collections
        </h2>
      </div>

      <Swiper
        slidesPerView="auto"
        spaceBetween={20}
        loop={true}
        freeMode={true}
        grabCursor={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Autoplay]}
        className="pl-4 sm:pl-10 pb-2"
      >
        {categories.map((cat, index) => (
          <SwiperSlide
            key={index}
            className="!w-[150px] sm:!w-[180px] md:!w-[200px] flex flex-col items-center"
          >
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-[3px] border-[#e9e4de] shadow-lg">
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base font-medium text-[#2d2b2c] uppercase tracking-widest text-center">
              {cat.title}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CollectionSwiper;
