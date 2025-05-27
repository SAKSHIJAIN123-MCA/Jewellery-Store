import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaXTwitter,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa6";
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

const Blogread1 = () => {
  return (
    <div className="font-sans bg-[#f9f7f2]">
      {/* Header */}
      <div
        className="bg-cover bg-center py-20 text-center"
        style={{ backgroundImage: "url('/background.avif')" }}
      >
        <h1 className="text-2xl sm:text-3xl font-serif text-[#2f2f2f] mb-3">
          THE MOST VALUABLE WEDDING JEWELRY COLLECTIONS O...
        </h1>
        <div className="text-xs sm:text-sm uppercase text-[#3c2b2e] tracking-widest">
          <span className="mr-2 font-semibold">HOME</span>
          <span className="mx-1">✦</span>
          <span className="font-semibold">NEWS</span>
          <span className="mx-1">✦</span>
          <span className="font-semibold">THE MOST VALUABLE...</span>
        </div>
      </div>

      {/* Main Blog Layout with vertical divider */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 relative">
        <div className="lg:flex gap-10">
          {/* Left: Blog Content */}
          <div className="lg:w-[66.66%] space-y-10">
            <img
              src="/pr2.avif"
              alt="Wedding Jewelry"
              className="w-full h-[500px] object-cover rounded-md"
            />
            <h1 className="text-2xl md:text-2xl font-serif text-[#2f2f2f]">
              The Most Valuable Wedding Jewelry Collections Of Modern Times
            </h1>
            <div className="text-[#cc886f] font-semibold text-sm tracking-wider">
              06 September <span className="mx-2">|</span> John Mathew
            </div>

            <div className="space-y-6 text-[#3c2b2e] text-1xl leading-7">
              <p>
                Riestas congue quisque egestas diam in arcu cursus euismod quis.
                dui. Sed enim ut sem viverra aliquet eget sit amet tellus. Iaculis
                lacus suspendisse faucibus interdum posuere lorem ipsum.
              </p>
            </div>

            <div className="text-center text-[#3c2b2e] italic text-1xl md:text-1xl font-medium leading-relaxed my-10">
              <FaQuoteLeft className="inline text-2xl text-[#cc886f] mr-2 align-top" />
              Fermentum Odio Eu Feugiat Pretium Nibh. Nulla At Volutpat Diam Ut
              Rutrum. Pulvinar Sapien Ullamcorper Malesuada Proin. Risus In
              <FaQuoteRight className="inline text-2xl text-[#cc886f] ml-2 align-top" />
            </div>

            <p className="text-[#3c2b2e] text-1xl leading-7 mb-6">
              Fnim nec dui nunc mattis enim. Quam lacus suspendisse faucibus
              sit amet tellus. Iaculis urna id volutpat lacus laoreet. Arcu
              bibendum at varius vel pharetra vel turpis nunc eget.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <img
                src="/pr3.avif"
                alt=""
                className="h-[320px] object-cover w-full rounded-md"
              />
              <img
                src="/pr4.avif"
                alt=""
                className="h-[320px] object-cover w-full rounded-md"
              />
            </div>

            <p className="text-[#3c2b2e] text-1xl leading-7">
              Sed cras ornare arcu dui. Molestie nunc non blandit massa enim nec
              urna id volutpat lacus laoreet. Arcu bibendum at varius vel pharetra
              bibendum at.
            </p>

            <h2 className="italic font-serif text-1xl md:text-1xl text-[#2f2f2f] my-6">
              Eu Non Diam Phasellus Vestibulum Lorem. Habitant Morbi Tristique
              Senectus Et. Feugiat In Ante Metus Dictum.
            </h2>

            <p className="text-[#3c2b2e] text-1xl leading-7 mb-10">
              Urna cursus eget nunc scelerisque viverra mauris. Auctor eu augue ut
              lectus arcu bibendum at. Cursus turpis massa tincidunt dui ut.
              Egestas congue quisque egestas diam in arcu cursus euismod quis. Sed Quam lacus
              suspendisse faucibus interdum posuere lorem ipsum.
            </p>

            {/* Tags & Share */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
              <div className="flex items-center space-x-3 text-[#cc886f] text-sm font-semibold">
                <span>Tags :</span>
                <button className="bg-[#3c2b2e] text-white px-3 py-1 rounded">Earrings</button>
                <button className="bg-[#3c2b2e] text-white px-3 py-1 rounded">Jewelry</button>
                <button className="bg-[#3c2b2e] text-white px-3 py-1 rounded">Rings</button>
              </div>
              <div className="flex items-center space-x-3 text-[#cc886f] text-sm font-semibold">
                <span>Share With Us:</span>
                <FaXTwitter className="text-black hover:text-[#cc886f] cursor-pointer" />
                <FaFacebookF className="text-black hover:text-[#cc886f] cursor-pointer" />
                <FaPinterestP className="text-black hover:text-[#cc886f] cursor-pointer" />
                <FaInstagram className="text-black hover:text-[#cc886f] cursor-pointer" />
              </div>
            </div>

            {/* Comments */}
            <h3 className="text-xl font-bold text-[#2f2f2f] mb-2">1 Comment</h3>
            <div className="border border-[#cc886f] p-4 md:p-6 rounded-md bg-white mb-6">
              <p className="text-[#3c2b2e] text-base leading-7 mb-2">
                Morbi leo urna molestie at. Quis enim lobortis scelerisque
                Tristique et egestas quis ipsum. Massa enim nec dui nunc mattis
                enim ut tellus elementum.
              </p>
              <div className="flex items-center text-xs text-[#cc886f] font-semibold space-x-3">
                <span className="text-[#cc886f]">👤 HELLEN</span>
                <span>|</span>
                <span>SEPTEMBER 7, 2023</span>
              </div>
            </div>

            {/* Reply */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-[#2f2f2f] mb-2">Leave A Reply</h3>
              <p className="text-[#3c2b2e] text-base mb-8">
                Nunc vehicula quam semper odio varius tincidunt. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere.
              </p>

              <form className="space-y-4">
                <input type="text" placeholder="Name" className="w-full border border-[#cc886f] px-4 py-2 placeholder-[#bbb] focus:outline-none" />
                <input type="email" placeholder="Email" className="w-full border border-[#cc886f] px-4 py-2 placeholder-[#bbb] focus:outline-none" />
                <textarea placeholder="Your message" rows="6" className="w-full border border-[#cc886f] px-4 py-2 placeholder-[#bbb] focus:outline-none"></textarea>
                <div className="flex items-start space-x-2 text-sm text-[#3c2b2e]">
                  <input type="checkbox" id="save-info" className="mt-1 border-[#cc886f] text-[#cc886f]" />
                  <label htmlFor="save-info">Save my name, email, and website in this browser.</label>
                </div>
                <button type="submit" className="relative inline-block bg-[#f7e1cd] text-[#2f2f2f] font-semibold px-4 py-2 border border-[#f7e1cd] hover:bg-[#f2d3b7] transition">SUBMIT NOW</button>
              </form>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-10 text-sm font-semibold text-[#2f2f2f]">
                <div className="flex items-center space-x-2 cursor-pointer">
                  <span className="border border-[#cc886f] rounded-full p-1">←</span>
                  <span>PREVIOUS STORY</span>
                </div>
                <div className="flex items-center space-x-2 cursor-pointer">
                  <span>NEXT STORY</span>
                  <span className="border border-[#cc886f] rounded-full p-1">→</span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-[2px] bg-[#cc886f] mx-5 hidden lg:block"></div>

          {/* Right: Sidebar */}
          <div className="lg:w-[33.33%] space-y-8">
            <h3 className="text-xl font-semibold text-[#cc886f]">SEARCH</h3>
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 border border-[#cc886f] bg-transparent rounded-md placeholder:text-[#3c2b2e] focus:outline-none"
            />

            <div className="space-y-8">
              <h3 className="text-[20px] font-medium text-[#cc886f]">Category</h3>
              <ul className="space-y-3">
                {["Bracelets", "Earrings", "Pendants"].map((item) => (
                  <li key={item} className="flex justify-between items-center text-[#2f2f2f] text-[15px] font-medium">
                    {item}
                    <span className="text-lg font-medium">+</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div>
              <h3 className="text-xl font-bold text-[#cc886f] mb-15">Recent posts</h3>
              {[
                { img: "/ban11.avif", title: "The Most Valuable Wedding Jewelry Col..." },
                { img: "/ban12.avif", title: "The Most Iconic Jewelry Pieces Of Roy..." },
                { img: "/ban13.avif", title: "The Art Of Layering Gold Necklaces An..." },
              ].map((post, i) => (
                <div key={i} className="flex items-start mb-15">
                  <img src={post.img} alt="" className="w-35 h-35 object-cover rounded mr-4" />
                  <div>
                    <p className="text-xs text-[#cc886f] mb-1">06 September</p>
                    <p className="font-semibold text-[#2f2f2f] text-sm mb-1">{post.title}</p>
                    <p className="text-xs text-[#3c2b2e]">Waestas congue quisque egestas diam in arcu...</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="mb-17">
              <h3 className="text-xl font-bold text-[#cc886f] mb-10">Tags</h3>
              <div className="flex flex-wrap gap-3">
                {["Earrings", "Jewelry", "Rings"].map((tag) => (
                  <button key={tag} className="bg-[#3c2b2e] text-white px-4 py-2 rounded-md text-sm font-semibold">{tag}</button>
                ))}
              </div>
            </div>

            {/* Promo */}
            <div className="relative w-full mb-15">
              <img src="/pr2.avif" alt="Promo" className="w-full h-[1200px] object-cover" />
              <div className="absolute inset-0 px-5 py-8 text-white flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-light leading-tight mb-5">Gold Mine<br />Offers</h2>
                  <p className="text-[#0a0909] font-semibold mt-4">Pay 10 & Get 1 free = 11/Mon</p>
                </div>
                <button className="bg-[#f2e4d7] text-[#2f2f2f] px-6 py-3 text-sm font-medium shadow border border-[#f2e4d7] hover:shadow-md transition">SHOP NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Instagram Swiper */}
      <div className="px-4 py-10">
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
                <img src={src} alt="" className="w-full h-[400px] object-cover" />
                <div className="absolute inset-0 bg-opacity-10 group-hover:bg-opacity-40 transition flex items-center justify-center">
                  <div className="bg-white p-2 rounded-full">
                    <InstaIcon className="text-lg text-[#2b2b2b]" />
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

export default Blogread1;
