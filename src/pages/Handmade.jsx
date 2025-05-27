import React from "react";
import pearlNecklace from "../assets/blog2.avif"; 
import doubleRow from "../assets/blog3.avif"; 

const SpecialOfferSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 w-full">
      {/* Left Side Image */}
      <div className="w-full h-64 sm:h-96 md:h-full">
        <img
          src={pearlNecklace}
          alt="Pearl Necklace"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side Content */}
      <div className="bg-[#3e322c] text-white px-4 sm:px-6 md:px-10 py-10 sm:py-14 md:py-16 relative flex flex-col justify-center">
        <p className="uppercase text-lg sm:text-xl md:text-2xl text-[#c1a487] tracking-widest mb-4">
          Festive Sale Offers
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif leading-snug mb-4">
          Handmade Jewelry For Special Occasions
        </h2>
        <p className="text-gray-300 mb-6 max-w-md text-base sm:text-lg md:text-2xl">
          Aliquet eget sit amet tellus cras adipiscing enim. Non quam lacus
          suspendisse faucibus interdum posuere. Lobortis mattis aliquam
          faucibus purus in massa tempor nec.
        </p>

        {/* Offer Badge */}
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-[#25201d] rounded-full w-16 h-16 sm:w-20 sm:h-20 flex flex-col items-center justify-center text-center text-white text-sm font-medium shadow-inner">
            <span className="text-lg sm:text-xl">17%</span>
            <span className="text-xs">Offer</span>
          </div>
          <div className="h-[1px] w-16 sm:w-24 bg-[#c1a487]"></div>
        </div>

        <h3 className="text-xl sm:text-2xl font-serif mb-1">Double Row Earrings</h3>
        <p className="text-sm text-gray-400 mb-6">Antique Luxury</p>

        {/* Transparent Shop Now Button with White Border */}
        <div className="flex justify-start">
          <button className="border border-white text-white px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm uppercase tracking-wide rounded-md bg-transparent hover:bg-white hover:text-[#3e322c] transition-all duration-300 ease-in-out">
            Shop Now
          </button>
        </div>

        {/* Decorative Image Removed */}
        {/* 
        <img
          src={doubleRow}
          alt="Double Row Earrings"
          className="absolute right-6 bottom-6 w-24 opacity-30 md:opacity-100 md:w-32"
        /> 
        */}
      </div>
    </section>
  );
};

export default SpecialOfferSection;
