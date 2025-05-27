import React, { useState } from "react";
import {
  LuSearch,
  LuHeart,
  LuUser,
  LuShoppingCart,
  LuMapPin,
} from "react-icons/lu";
import { Link } from "react-router-dom";
import logo from "../assets/kalibera-removebg-preview.png";
import SearchModal from "../pages/SearchModal";
import CartDrawer from "../pages/CartDrawer";
import PagesDropdown from "../pages/PagesDropdown";
import ShopDropdown from "../pages/ShopDropdown";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <header className="font-sans w-full">
      {/* Top Marquee Section */}
      <div className="bg-[#4b3c32] text-white text-sm py-1 px-4 sm:px-6 overflow-hidden w-full">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 min-w-full">
          {/* Offer message */}
          <div className="min-w-max">
            <p className="text-[13px] shrink-0">
              Best{" "}
              <span className="font-semibold">
                special offers every week 40% Off!
              </span>{" "}
              Free delivery time
            </p>
          </div>

          {/* Address */}
          <div className="min-w-max flex items-center text-[13px] text-[#d2c3c3] gap-2 shrink-0">
            <LuMapPin className="text-xs mt-[1px]" />
            <span>
              Mr John Smith. 132, My Street, Kingston,{" "}
              <span className="text-[#b9a7a7]">New York 12401.</span>
            </span>
          </div>
        </div>

        {/* Marquee Animation */}
        <style>{`
          @keyframes scroll-marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            animation: scroll-marquee 35s linear infinite;
          }
        `}</style>
      </div>

      {/* Main Navbar */}
      <div className="bg-[#f9f8f6] shadow-md w-full px-4 sm:px-6 md:px-8 lg:px-12 py-4 sticky top-0 z-50 font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-y-4 gap-x-6">
          {/* Left Nav Links */}
          <nav className="hidden lg:flex gap-6 text-sm font-medium uppercase text-[#3c2b2e] col-span-1">
            <Link to="/" className="text-[#c2867b]">✦ Home</Link>
            <ShopDropdown />
            <Link
              to="/blognews"
              className="hover:text-[#c2867b] flex items-center gap-1"
            >
              Blog
              <span className="bg-yellow-300 text-[10px] font-bold px-1 rounded-sm ml-1">NEW</span>
            </Link>
            <PagesDropdown />
            <Link to="/contact" className="hover:text-[#c2867b]">Contact</Link>
          </nav>

          {/* Logo */}
          <div className="flex justify-center col-span-1">
            <Link to="/">
              <img
                src={logo}
                alt="Glamora"
                className="h-8 sm:h-10 md:h-12 object-contain"
              />
            </Link>
          </div>

          {/* Icons Section */}
          <div className="flex flex-wrap justify-center sm:justify-end items-center gap-4 text-[#3c2b2e] text-base col-span-1">
            <LuSearch
              onClick={() => setShowSearch(true)}
              className="cursor-pointer hover:text-[#c2867b]"
            />
            <Link to="/login">
              <LuUser className="cursor-pointer hover:text-[#c2867b]" />
            </Link>
            <Link to="/wishlist">
              <LuHeart className="cursor-pointer hover:text-[#c2867b]" />
            </Link>
            <div className="relative">
              <button onClick={() => setIsCartOpen(true)}>
                <LuShoppingCart className="cursor-pointer hover:text-[#c2867b]" />
              </button>
            </div>
            <span className="text-sm hidden sm:inline">Rs. 0.00</span>
            <select className="text-sm bg-transparent border-l border-gray-300 pl-2 outline-none hidden sm:inline">
              <option>English</option>
              <option>Hindi</option>
            </select>
          </div>
        </div>
      </div>

      {/* Search Modal */}
      {showSearch && <SearchModal onClose={() => setShowSearch(false)} />}

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
};

export default Header;
