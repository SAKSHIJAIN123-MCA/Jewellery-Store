import React from "react";
import { LuSearch } from "react-icons/lu";

const SearchModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-[#666] z-50 flex items-center justify-center">
<div className="relative w-full max-w-[1400px] h-[90vh] bg-[#f9f8f2] p-4 overflow-hidden mx-auto">
{/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black text-2xl font-bold hover:text-red-500"
        >
          ×
        </button>

        {/* Search Box at Top */}
        <div className="mt-12 flex justify-center">
          <div className="bg-[#504037] px-8 py-6 w-full max-w-2xl">
            <div className="flex items-center bg-[#f9f8f2] px-4 py-2">
              <input
                type="text"
                placeholder="Search"
                className="flex-grow text-[#504037] bg-transparent outline-none text-sm"
              />
              <LuSearch className="text-[#504037]" />
            </div>
          </div>
        </div>

        {/* Popular Searches */}
        <div className="mt-6 text-center">
          <p className="text-[#504037] text-sm mb-2">Popular searches:</p>
          <div className="flex justify-center flex-wrap gap-2">
            {["Featured", "Trendy", "Sale", "New"].map((tag) => (
              <span
                key={tag}
                className="bg-[#e7e4df] px-3 py-1 text-[#504037] text-sm rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
