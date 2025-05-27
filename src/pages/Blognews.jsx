import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FaInstagram as InstaIcon } from "react-icons/fa";
import { Link } from "react-router-dom";

const instagramImages = [
  "/ban15.avif",
  "/pr1.avif",
  "/pr2.avif",
  "/pr3.avif",
  "/pr4.avif",
  "/pr5.avif",
];
const blogPosts = [
  {
    img: "ban15.avif",
    date: "06 September",
    author: "John Mathew",
    comments: "2 Comments",
    title: "THE MOST VALUABLE WEDDING JEWELRY COLLECTIONS OF MODERN TIMES",
    description:
      "Riestas congue quisque egestas diam in arcu cursus euismod quis. Sed cras ornare arcu dui. Molestie nunc non blandit massa...",
    link: "/blogread1",
  },
  {
    img: "ban14.avif",
    date: "12 August",
    author: "Sarah Lee",
    comments: "5 Comments",
    title: "HOW TO STYLE YOUR JEWELRY FOR ANY OCCASION",
    description:
      "Learn how to mix and match jewelry pieces for every outfit. From casual looks to evening gowns, we've got you covered...",
    link: "/blogread2",
  },
  {
    img: "ban13.avif",
    date: "28 July",
    author: "Emma Stone",
    comments: "3 Comments",
    title: "TOP 10 JEWELRY TRENDS THAT NEVER GO OUT OF STYLE",
    description:
      "Discover the timeless pieces that always make a comeback. From pearls to gold chains, here’s what to invest in...",
    link: "/blogread3",
  },
];

const Blognews = () => {
  return (
    <div className="font-sans bg-[#f9f7f2]">
      {/* Header */}
      <div
        className="bg-cover bg-center py-30 text-center"
        style={{ backgroundImage: "url('/background.avif')" }}
      >
        <h1 className="text-5xl font-serif text-[#2f2f2f] mb-4">News</h1>
        <div className="text-sm uppercase text-[#3c2b2e] tracking-widest">
          <span className="mr-2 font-semibold">HOME</span>
          <span className="mx-1">✦</span>
          <span className="font-semibold">NEWS</span>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-9 relative">
        {/* Left Side: Blog Posts */}
        <div className="lg:col-span-2 space-y-10 relative">
          {["ban15.avif", "ban14.avif", "ban13.avif"].map((img, i) => (
            <div key={i}>
              <img
                src={img}
                alt="Wedding Jewelry"
                className="w-full h-[400px] object-cover rounded-md mb-6"
              />
              <div className="flex items-center text-sm text-[#cc886f] space-x-4 mb-5">
                <span>06 September</span>
                <span>|</span>
                <span className="font-semibold">John Mathew</span>
                <span>|</span>
                <span>2 Comments</span>
              </div>
              <h2 className="text-xl font-serif text-[#2f2f2f] mb-4">
                THE MOST VALUABLE WEDDING JEWELRY COLLECTIONS OF MODERN TIMES
              </h2>
              <p className="text-[#3c2b2e] mb-5 text-base">
                Riestas congue quisque egestas diam in arcu cursus euismod quis.
                Sed cras ornare arcu dui. Molestie nunc non blandit massa...
              </p>
              <Link
                to="/blogread1"
                className="uppercase tracking-widest text-sm font-semibold text-[#2f2f2f] underline underline-offset-4"
              >
                Read More
              </Link>
            </div>
          ))}

          {/* Pagination aligned to the SHOP NOW button */}
          <div className="flex justify-center items-center gap-4 mt-12">
            {["1", "2", "3", "→"].map((item, i) => (
              <button
                key={i}
                className={`w-10 h-10 rounded-full flex items-center justify-center border ${
                  item === "1"
                    ? "bg-[#5b4b3a] text-white border-[#5b4b3a]"
                    : "text-[#2f2f2f] border-[#cc886f]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="hidden lg:block absolute left-2/3 top-10 bottom-10 w-px bg-[#cc886f]"></div>

       {/* Right: Sidebar */}
       <div className="space-y-6">
        <h3 className="text-xl font-semibold text-[#cc886f]">SEARCH</h3>
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 border border-[#cc886f] bg-transparent rounded-md placeholder:text-[#3c2b2e] focus:outline-none"
          />

          {/* Tags */}
          <div>
            <h3 className="text-xl font-bold text-[#cc886f] mb-6">Tags</h3>
            <div className="flex flex-wrap gap-3">
              {["Earrings", "Jewelry", "Rings"].map((tag) => (
                <button
                  key={tag}
                  className="bg-[#3c2b2e] text-white px-4 py-4 rounded-md text-sm font-semibold"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-xl font-bold text-[#cc886f] mb-5">
              Recent posts
            </h3>
            {[
              {
                img: "/ban11.avif",
                title: "The Most Valuable Wedding Jewelry Col...",
              },
              {
                img: "/ban12.avif",
                title: "The Most Iconic Jewelry Pieces Of Roy...",
              },
              {
                img: "/ban13.avif",
                title: "The Art Of Layering Gold Necklaces An...",
              },
            ].map((post, i) => (
              <div key={i} className="flex items-start mb-6">
                <img
                  src={post.img}
                  alt={`Recent Post ${i + 1}`}
                  className="w-40 h-40 object-cover rounded mr-4"
                />
                <div>
                  <p className="text-xs text-[#cc886f] mb-1">06 September</p>
                  <p className="font-semibold text-[#2f2f2f] leading-tight text-sm mb-1">
                    {post.title}
                  </p>
                  <p className="text-xs text-[#3c2b2e]">
                    Waestas congue quisque egestas diam in arcu...
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Promo Section */}
          <div className="relative w-full">
            <img
              src="/pr2.avif"
              alt="Gold Mine Offer"
              className="w-full h-[1200px] object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-between items-start h-full px-6 py-12 text-white">
              {/* Top Content */}
              <div>
                <h2 className="text-5xl leading-tight font-light mb-9">
                  Gold Mine <br /> Offers
                </h2>
                <p className="text-[#0a0909] font-medium text-base mt-9">
                  Pay 10 & Get 1 free = 11/Mon
                </p>
              </div>

              {/* Button at Bottom */}
              <button className="bg-[#f2e4d7] text-[#2f2f2f] px-6 py-3 text-sm font-medium shadow-sm border border-[#f2e4d7] hover:shadow-md transition duration-200">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Instagram Image Swiper */}
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

export default Blognews;
