import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import CollectionSwiper from "./CollectionSwiper";
import JewelsCollection from "./JewelsCollection";
import Handmade from "./Handmade";
import Spark from "./Spark";
import Stunning from "./Stunning";
import Feedback from "./Feedback";
import Blog from "./Blog";

import modelImg from "../assets/girljewel.avif";
import goldSetImg from "../assets/blog2.avif";
import ringImg from "../assets/blog3.avif";
import p1 from "../assets/p1.avif";
import p2 from "../assets/p2.avif";
import p3 from "../assets/p3.avif";

const slides = [
  {
    image: modelImg,
    title: "Save Upto $200",
    subtitle: "Truly Fashionable",
    description: "15% Glamour's & Charming Gold Jewels",
    button: "DISCOVER NOW",
  },
  {
    image: p1,
    title: "Flat Rs. 1500 Off",
    subtitle: "Bold Gold Designs",
    description: "Step into elegance with our latest collection.",
    button: "SHOP NOW",
  },
  {
    image: p3,
    title: "Limited Time Deal",
    subtitle: "Wedding Wonders",
    description: "12% Off Stunning Wedding Rings",
    button: "EXPLORE",
  },
];

const Home = () => {
  return (
    <section className="w-full flex flex-col items-center font-serif">
      {/* Hero Section */}
      <div className="w-full flex flex-col md:flex-row h-[600px]">
        {/* Left Swiper */}
        <div className="w-full md:w-2/3 h-[103%]">
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 4000 }}
            pagination={{ clickable: true }}
            loop={true}
            className="w-full h-full"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start px-10 md:px-20 text-[#f0eeeb]">
                    <h2 className="text-[60px] leading-[1.1] font-light tracking-wide mb-4">
                      {slide.title}
                    </h2>
                    <p className="text-[20px] font-light mb-4">
                      {slide.subtitle}
                    </p>
                    <p className="text-[18px] font-light mb-8">
                      {slide.description}
                    </p>
                    <button className="relative inline-block px-10 py-3 text-[13px] tracking-[2px] font-medium text-black bg-white uppercase z-10">
                      <span className="absolute inset-0 translate-x-[6px] translate-y-[6px] border border-white z-0"></span>
                      <span className="relative z-10">{slide.button}</span>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <style>{`
  .swiper-pagination-bullet {
    background-color: white !important;
    opacity: 0.6;
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
  }
`}</style>
        </div>

        {/* Right Stacked Images */}
        <div className="w-full md:w-1/3 flex flex-col gap-4 pl-2">
          {/* First Box */}
          <div className="relative h-1/2">
            <img
              src={goldSetImg}
              alt="Gold Set"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-end px-6 text-white">
              <h3 className="text-xl font-light">20% Offer</h3>
              <p className="text-lg font-light mb-3">Glorious Jewellery</p>
              <button className="relative text-black bg-white border border-white px-6 py-2 text-sm font-medium hover:bg-black hover:text-white transition">
                <span className="absolute inset-0 border border-white translate-x-1 translate-y-1 pointer-events-none"></span>
                <span className="relative z-10">SHOP NOW</span>
              </button>
            </div>
          </div>

          {/* Second Box */}
          <div className="relative h-1/2">
            <img
              src={ringImg}
              alt="Ring"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-start px-6 text-white">
              <h3 className="text-xl font-light">12% Offer</h3>
              <p className="text-lg font-light mb-3">Pretty Wedding Ring</p>
              <button className="relative text-black bg-white border border-white px-6 py-2 text-sm font-medium hover:bg-black hover:text-white transition">
                <span className="absolute inset-0 border border-white translate-x-1 translate-y-1 pointer-events-none"></span>
                <span className="relative z-10">SHOP NOW</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of homepage */}
      <CollectionSwiper />
      <JewelsCollection />
      <Handmade />
      <Spark />
      <Stunning />
      <Feedback />
      <Blog />
    </section>
  );
};

export default Home;
