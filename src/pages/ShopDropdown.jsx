import { useState, useEffect, useRef } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function ShopDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="relative flex items-center gap-1"
      ref={dropdownRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* "Shop" navigates to /products */}
      <Link
        to="/products"
        className="text-sm font-medium uppercase hover:text-[#c2867b] flex items-center gap-1"
      >
        <span className="text-[#c2867b]">✦</span>
        Shop
      </Link>

      {/* Dropdown toggle (optional click for mobile) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-[#c2867b] text-[14px] hover:text-[#a87067]"
      >
        <FiChevronDown />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute left-0 top-full mt-4 w-[1100px] bg-[#fcf9f6] shadow-xl p-8 z-50 grid grid-cols-5 gap-6 text-[#2b2b2b]">
          {/* Left Image */}
          <div className="col-span-1">
            <img src="pr2.avif" alt="Shining Ring" className="w-full object-cover" />
          </div>

          {/* Earrings Column */}
          <div>
            <h4 className="text-[#c2867b] font-semibold text-sm mb-3 uppercase">Earrings</h4>
            <ul className="space-y-2 text-sm">
              <li>STONE COLLECTION</li>
              <li>PEARLS EARRINGS</li>
              <li>FASHIONABLE</li>
              <li>TRADITIONAL</li>
              <li>TRENDING</li>
              <li>PLATINUM</li>
            </ul>
          </div>

          {/* Rings Column */}
          <div>
            <h4 className="text-[#c2867b] font-semibold text-sm mb-3 uppercase">Rings</h4>
            <ul className="space-y-2 text-sm">
              <li>GOLD RINGS</li>
              <li>PLATINUM RINGS</li>
              <li>DIAMOND RINGS</li>
              <li>GEMSTONE RINGS</li>
              <li>ROSE GOLD RINGS</li>
              <li>YELLOW GOLD RING</li>
            </ul>
          </div>

          {/* Necklaces Column */}
          <div>
            <h4 className="text-[#c2867b] font-semibold text-sm mb-3 uppercase">Necklaces</h4>
            <ul className="space-y-2 text-sm">
              <li>ANTIQUE DESIGN</li>
              <li>FASHIONABLE DESIGN</li>
              <li>DIAMOND NECKLACE</li>
              <li>WEDDING SET</li>
              <li>VINTAGE NECKLACE</li>
              <li>PARTY NECKLACE</li>
            </ul>
          </div>

          {/* Right Promo Image */}
          <div className="col-span-1">
            <img src="pr1.avif" alt="New Collection" className="w-full object-cover" />
          </div>
        </div>
      )}
    </div>
  );
}
