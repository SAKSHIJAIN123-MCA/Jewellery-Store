import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";
import banner1 from "../assets/b1.avif";
import banner2 from "../assets/banner2.avif";
import banner3 from "../assets/banner3.avif";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaInstagram as InstaIcon } from "react-icons/fa";

const instagramImages = [
  "/ban15.avif",
  "/pr1.avif",
  "/pr2.avif",
  "/pr3.avif",
  "/pr4.avif",
  "/pr5.avif",
];

const products = [
  {
    image: "ban14.avif",
    name: "LASER CUT PENDANT CHAIN",
    price: "From Rs. 5,700.00",
    oldPrice: "Rs. 8,700.00",
  },
  {
    image: "pr2.avif",
    name: "PEARL NECKLACE",
    price: "From Rs. 6,500.00",
    oldPrice: "Rs. 9,000.00",
  },
  {
    image: "pr3.avif",
    name: "GOLDEN FLOWER CHARM",
    price: "From Rs. 4,800.00",
    oldPrice: "Rs. 7,200.00",
  },
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  return (
    <div className="font-sans bg-[#f9f7f2]">
      {/* === HEADER === */}
      <div
        className="bg-cover bg-center py-24 text-center"
        style={{ backgroundImage: "url('/background.avif')" }}
      >
        <h1 className="text-5xl font-serif text-[#2f2f2f] mb-4">About</h1>
        <div className="text-sm uppercase text-[#3c2b2e] tracking-widest">
          <span className="mr-2 font-semibold">HOME</span>
          <span className="mx-1">✦</span>
          <span className="font-semibold">ABOUT</span>
        </div>
      </div>

      {/* === SINCE 1960 SECTION === */}
      <div className="flex flex-col md:flex-row items-center justify-between px-17 py-24 gap-6">
        {/* Text Left */}
        <div className="md:w-[32%] text-[#2f2f2f]">
          <h3 className="uppercase text-[#d49273] tracking-widest mb-2 text-sm">Since</h3>
          <h2 className="text-[60px] font-serif italic mb-6 leading-none">1960</h2>
          <p className="mb-6 leading-6 text-sm">
            Vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Mauris pharetra et ultrices neque ornare. Quam quisque id diam vel quam elementum pulvinar. Morbi tristique senectus et netus et.
          </p>
          <button className="mt-4 px-6 py-3 bg-[#f3dfcb] text-[#2f2f2f] font-semibold tracking-wide shadow-[4px_4px_0px_0px_#ead4be]">
            DISCOVER NOW
          </button>
        </div>

        {/* Middle Image */}
        <div className="md:w-[32%]">
          <img
            src="/pr3.avif"
            alt="Jewelry on Marble"
            className="w-full h-70px object-cover"
          />
        </div>

        {/* Stats Right */}
        <div className="md:w-[20%] flex flex-col gap-10 text-center text-[#2f2f2f]">
          {[
            { label: "Shops All Over The World", value: "35+" },
            { label: "Happy Clients", value: "100%" },
            { label: "Years Of Service", value: "65+" },
          ].map((stat, i) => (
            <div key={i}>
              <h2 className="text-5xl font-serif">{stat.value}</h2>
              <p className="mt-2 text-[#d49273] font-medium text-[15px] leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* === DESIGNER JEWELRY SECTION === */}
      <div className="flex flex-col md:flex-row w-full">
        {/* Left Image */}
        <div className="md:w-1/2 w-full">
          <img
            src="/pr4.avif"
            alt="Designer Jewelry"
            className="w-full h-[900px] object-cover"
          />
        </div>

        {/* Right Text */}
        <div className="md:w-1/2 w-full bg-[#4c3f39] text-white px-10 py-16 flex flex-col justify-center gap-y-12">
          <h2 className="text-4xl font-serif mb-4 leading-tight">
            The Most Exquisite And Opulent<br />Designer Jewelry
          </h2>
          <p className="text-base leading-7 text-[#e5e3df]">
            A scelerisque purus semper eget duis. Ac turpis egestas maecenas pharetra convallis.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {[
              { src: "icon1.png", alt: "Custom Jewelry", text: "100% Custom-Made Jewelry" },
              { src: "icon2.png", alt: "Quality Tested", text: "Internal Quality Tested" },
              { src: "icon3.png", alt: "Certified Diamonds", text: "Certified Diamonds" },
              { src: "icon4.png", alt: "Gold Purity", text: "Guarantee For Gold Purity" },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-[#5a4a44] p-4 rounded-lg flex flex-col items-center text-center"
              >
                <img src={feature.src} alt={feature.alt} className="mb-3 w-10 h-15" />
                <p className="text-sm">{feature.text}</p>
              </div>
            ))}
          </div>

          <button className="px-6 py-3 bg-white text-black font-semibold border border-black shadow-[4px_4px_0_0_#333] w-fit">
            READ MORE
          </button>
        </div>
      </div>
{/* === GLITTERING JEWELRY SECTION (EXACT MATCH) === */}
<div className="bg-[#f9f7f2] px-6 md:px-20 py-16 flex flex-col lg:flex-row items-center justify-between gap-10">
  {/* LEFT: Model Image */}
  <div className="w-full lg:w-1/2">
    <img
      src="pr2.avif"
      alt="Pearl Necklace"
      className="w-full h-auto object-cover"
    />
  </div>

  {/* MIDDLE: Text Content */}
  <div className="w-full lg:w-[40%] flex flex-col justify-center text-left">
    <p className="uppercase text-sm tracking-widest text-[#c3907c] mb-2">
      New Launched
    </p>
    <h2 className="text-4xl font-serif text-[#2d2d2d] mb-4">
      Glittering Jewelry
    </h2>
    <p className="text-base text-[#6c6c6c] leading-7 mb-6">
      Sit amet aliquam id diam maecenas ultricies mi eget. Augue mauris augue
      neque gravida in fermentum et. Amet risus nullam eget.
    </p>
    <p className="text-xl text-[#2d2d2d] font-medium mb-8 leading-snug">
      Best Gift For Your<br />Special One
    </p>
    <div className="relative inline-block">
  {/* Outline Box */}
  <div className="absolute w-[110px] h-[40px] border border-[#f4ddca] translate-x-[2px] translate-y-[2px]"></div>

  {/* Button */}
  <button className="relative bg-[#f4ddca] text-[#2d2d2d] w-[110px] h-[40px] text-sm font-medium">
    SHOP NOW
  </button>
</div>


  </div>

  {/* RIGHT: Scrollable Product Card (compact) */}
  <div className="hidden lg:flex flex-col items-center justify-center bg-[#e9e7de8f] p-6 w-[220px] h-[350px] relative rounded">
    <img
      src={products[currentIndex].image}
      alt={products[currentIndex].name}
      className="w-[250px] h-[250px] object-contain mb-4"
    />
    <h3 className="text-center text-[#2d2d2d] tracking-widest text-xs mb-2">
      {products[currentIndex].name}
    </h3>
    <p className="text-[#2d2d2d] text-sm">
      {products[currentIndex].price}
    </p>
    <p className="line-through text-[#777] text-sm">
      {products[currentIndex].oldPrice}
    </p>

    {/* Scroll Next Button */}
    <button
      onClick={handleNext}
      className="absolute right-[-75px] top-1/2 -translate-y-1/2 flex items-center gap-2 text-[#2d2d2d] text-sm"
    >
      <span className="w-[16px] h-[1px] bg-black"></span>
      <span>Scroll Next</span>
      <span className="w-6 h-6 border border-black rounded-full"></span>
    </button>
  </div>
</div>


      {/* === VIDEO SECTION === */}
      <div
        className="relative w-full h-[500px] bg-cover bg-center"
        style={{ backgroundImage: "url('ban11.avif')" }}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <button
            onClick={() => window.open("https://youtu.be/Fs0v1ELuFjo", "_blank")}
            className="w-[80px] h-[80px] rounded-full border border-black bg-white/70 hover:bg-white/90 transition flex items-center justify-center"
          >
            <svg fill="black" height="28" width="28" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>

      {/* === SUCCESSFUL TEAM SECTION === */}
      <div className="py-24 px-4 md:px-20 bg-[#f9f7f2] text-center">
        <h2 className="text-4xl font-serif text-[#2f2f2f] mb-12">Successful Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Jessica", role: "Product Designer", image: "ban9.avif" },
            { name: "Ameron", role: "Marketing Manager", image: "ban10.avif" },
            { name: "Memphis", role: "Retail Manager", image: "ban11.avif" },
            { name: "Trysta", role: "Gold Smith", image: "ban12.avif" },
          ].map((member, i) => (
            <div key={i} className="group flex flex-col items-center text-center">
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-300">
                  {[FaXTwitter, FaFacebookF, FaPinterestP, FaInstagram].map((Icon, i) => (
                    <div key={i} className="bg-white rounded-full p-2 hover:scale-110 transition">
                      <Icon className="text-sm" />
                    </div>
                  ))}
                </div>
              </div>
              <h3 className="mt-4 text-[#c17852] text-xl font-semibold">{member.name}</h3>
              <p className="text-sm tracking-wider text-[#2f2f2f] mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* === 3 BANNERS SECTION === */}
      <section className="bg-[#f6f3f2] py-16 px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {[banner1, banner2, banner3].map((banner, i) => (
            <div key={i} className="h-[300px] text-white p-4 flex flex-col justify-start items-center">
              <img src={banner} alt={`Banner ${i + 1}`} className="w-full h-[250px] object-cover rounded mb-4" />
            </div>
          ))}
        </div>
      </section>

      {/* === INSTAGRAM SWIPER === */}
      <div className="bg-[#f9f7f2] px-1 pb-4 pt-12">
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {instagramImages.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative group overflow-hidden">
                <img
                  src={src}
                  alt={`Instagram ${index + 1}`}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <div className="bg-white p-3 rounded-full">
                    <InstaIcon className="text-xl text-[#2b2b2b]" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default About;
