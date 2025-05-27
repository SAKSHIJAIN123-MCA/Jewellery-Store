import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

export default function PagesDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
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
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm font-medium uppercase hover:text-[#c2867b]"
      >
        <span className="text-[#c2867b]">✦</span>
        Pages
        <FiChevronDown className="text-[#c2867b] text-[14px]" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-32 bg-[#fcf9f6] shadow-md py-2 z-50">
          <Link
            to="/about"
            className="block px-4 py-2 text-sm text-[#2b2b2b] hover:bg-[#f0e7e2]"
            onClick={() => setIsOpen(false)}
          >
            ABOUT
          </Link>
          <Link
            to="/faq"
            className="block px-4 py-2 text-sm text-[#2b2b2b] hover:bg-[#f0e7e2]"
            onClick={() => setIsOpen(false)}
          >
            FAQ
          </Link>
        </div>
      )}
    </div>
  );
}
