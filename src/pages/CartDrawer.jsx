import { X } from "lucide-react";
import { Link } from "react-router-dom";

export default function CartDrawer({ isOpen, onClose }) {
  return (
    <>
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 w-[400px] max-w-full h-full bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#4e4035] text-white">
          <h2 className="text-[22px] font-[500] tracking-wide">
            Shopping cart
          </h2>
          <button onClick={onClose}>
            <X size={26} />
          </button>
        </div>

        {/* Product Item */}
        <div className="p-8  py-15 flex gap-10 ">
          <img
            src="/pr2.avif"
            alt="Eternal Ruby Stud"
            className="w-35 h-28 object-cover"
          />
          <div className="flex flex-col justify-between">
            <div>
              <p className="font-semibold text-sm text-[#333] mb-1">
                Eternal Ruby Stud
              </p>
              <p className="text-sm text-[#444]">Rs. 7,800.00 USD</p>
            </div>
            <div className="flex items-center gap-3 mt-3 border border-[#ddd] w-fit px-2 py-5 rounded-sm">
              <button className="text-lg font-light">−</button>
              <span className="text-sm font-medium">2</span>
              <button className="text-lg font-light">+</button>
            </div>
          </div>
        </div>

        {/* Cart Options */}
        <div className="p-15 px-1.5 grid grid-cols-3 text-center text-sm border-b border-gray-200 bg-gray-100">
          <div className="space-y-1 ">
            <div className="text-xl">📝</div>
            <p className="text-[13px] text-[#333]">Add note</p>
          </div>
          <div className="space-y-1">
            <div className="text-xl">🚚</div>
            <p className="text-[13px] text-[#333]">Shipping</p>
          </div>
          <div className="space-y-1">
            <div className="text-xl">🎁</div>
            <p className="text-[13px] text-[#333]">Discount</p>
          </div>
        </div>

        {/* Subtotal Section */}
        <div className="p-6 text-60px border-b border-gray-200  bg-gray-100">
          <div className="flex justify-between font-semibold text-base mb-1">
            <span>Subtotal</span>
            <span>Rs. 7,800.00</span>
          </div>
          <p className="text-gray-500 text-50px">
            Taxes and shipping calculated at checkout
          </p>
        </div>

        {/* Buttons */}
        <div className="p-6  bg-gray-100">
          <Link
            to="/checkout"
            className="block w-full bg-[#ffc38f] text-black text-sm py-2 rounded font-semibold mb-3 text-center"
          >
            CHECK OUT
          </Link>
          <Link
            to="/viewcart"
            className="block w-full bg-[#ffc38f] text-black text-sm py-2 rounded font-semibold mb-3 text-center"
          >
            VIEW CART
          </Link>
        </div>
      </div>
    </>
  );
}
