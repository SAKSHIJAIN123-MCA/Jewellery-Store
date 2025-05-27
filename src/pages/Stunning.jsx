import React from "react";
import chainFlat from "../assets/blog2.avif";
import chainModel from "../assets/blog3.avif";
import banner1 from "../assets/b1.avif";
import banner2 from "../assets/banner2.avif";
import banner3 from "../assets/banner3.avif";

const FeaturedBanner = () => {
  return (
    <>
      {/* Main Featured Banner Section */}
      <section className="bg-[#f6f3f2] text-white w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center py-12 md:py-16 gap-10 px-4 sm:px-6 md:px-10 w-full">
          {/* Left Box */}
          <div className="bg-[#3e322c] p-6 sm:p-8 md:h-[500px] flex flex-col justify-center relative z-10">
            <p className="uppercase text-[#d39c8a] text-xs sm:text-sm mb-2 tracking-wide">
              Stunning Jewels
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold leading-tight mb-4">
              For Precious <br className="hidden sm:block" /> Women
            </h2>
            <p className="text-gray-200 text-sm sm:text-base mb-6">
              Mi bibendum neque egestas congue quisque egestas diam.
            </p>
            <div className="flex items-center gap-4 mb-6 text-base sm:text-lg">
              <span>$21.00</span>
              <span className="line-through text-gray-400">$34.00</span>
            </div>
            <button className="border border-white w-[100px] px-2 py-1 text-xs uppercase tracking-wide hover:bg-white hover:text-[#4e4039] transition">
              Shop Now
            </button>
          </div>

          {/* Right Section (Images) */}
          <div className="relative flex justify-center items-center md:h-[500px] h-[300px] sm:h-[400px]">
            <img
              src={chainModel}
              alt="Model"
              className="absolute top-[10px] sm:top-[20px] left-0 sm:left-[-90px] w-[350px] sm:w-[600px] md:w-[1300px] h-[250px] sm:h-[400px] md:h-[450px] object-cover z-10"
            />
            <img
              src={chainFlat}
              alt="Chain"
              className="absolute top-[120px] sm:top-[110px] left-[20px] sm:left-[-100px] md:left-[-170px] w-[100px] sm:w-[150px] md:w-[200px] h-[100px] sm:h-[150px] md:h-[200px] object-cover z-20"
            />
          </div>
        </div>
      </section>

      {/* Horizontal 3 Banner Section */}
      <section className="bg-[#ece2dd] py-6 px-4 sm:px-6 md:px-10 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {/* Banner 1 */}
          <div className="h-auto text-white p-2 flex flex-col justify-start items-center">
            <img
              src={banner1}
              alt="Banner 1"
              className="w-full h-[200px] sm:h-[250px] object-cover rounded mb-4"
            />
          </div>

          {/* Banner 2 */}
          <div className="h-auto text-white p-2 flex flex-col justify-start items-center">
            <img
              src={banner2}
              alt="Banner 2"
              className="w-full h-[200px] sm:h-[250px] object-cover rounded mb-4"
            />
          </div>

          {/* Banner 3 */}
          <div className="h-auto text-white p-2 flex flex-col justify-start items-center">
            <img
              src={banner3}
              alt="Banner 3"
              className="w-full h-[200px] sm:h-[250px] object-cover rounded mb-4"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedBanner;
