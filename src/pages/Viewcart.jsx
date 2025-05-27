import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";

const Viewcart = () => {
  return (
<div className="font-sans pb-0">
{/* Header */}
      <div
        className="bg-cover bg-center py-32 text-center"
        style={{ backgroundImage: "url('/background.avif')" }}
      >
        <h1 className="text-5xl font-serif text-[#2f2f2f] mb-4">Your Shopping Cart</h1>
        <div className="text-sm uppercase text-[#3c2b2e] tracking-widest">
          <span className="mr-2 font-semibold">HOME</span>
          <span className="mx-1">✦</span>
          <span className="font-semibold">YOUR SHOPPING CART</span>
        </div>
      </div>

      {/* Cart Section */}
      <div className="max-w-5xl mx-auto my-16 p-8 border border-[#e6bfae] bg-transparent text-[#3c2b2e]">
      {/* Table Header */}
        <div className="grid grid-cols-3 text-xs uppercase font-semibold pb-4 border-b border-[#e6bfae]">
          <div className="">Product</div>
          <div className="text-center">Quantity</div>
          <div className="text-right">Total</div>
        </div>

        {/* Product Rows */}
        <div className="py-6 border-b border-[#e6bfae] grid grid-cols-3 items-center">
          <div className="flex gap-4">
            <img src="pr2.avif" alt="Product 1" className="w-16 h-16 object-cover" />
            <div className="text-sm">
              <p className="font-semibold">DT-GLAMORA</p>
              <p>Brilliant Stylish Earrings</p>
              <p className="text-xs mt-1">
                Weight: 3.83 g <br />
                Purity: 18 KT <br />
                Length: 4 cm
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <button className="border border-[#e6bfae] px-2">−</button>
            <span>2</span>
            <button className="border border-[#e6bfae] px-2">+</button>
            <button className="ml-2 text-[#a16a5e]">🗑️</button>
          </div>
          <div className="text-right text-sm">Rs. 3,800.00</div>
        </div>

        <div className="py-6 border-b border-[#e6bfae] grid grid-cols-3 items-center">
          <div className="flex gap-4">
            <img src="pr3.avif" alt="Product 2" className="w-16 h-16 object-cover" />
            <div className="text-sm">
              <p className="font-semibold">DT-GLAMORA</p>
              <p>Eternal Ruby Stud</p>
              <p className="text-xs mt-1">
                Weight: 3.95 g <br />
                Purity: 14 KT <br />
                Length: 4 cm
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <button className="border border-[#e6bfae] px-2">−</button>
            <span>1</span>
            <button className="border border-[#e6bfae] px-2">+</button>
            <button className="ml-2 text-[#a16a5e]">🗑️</button>
          </div>
          <div className="text-right text-sm">Rs. 3,900.00</div>
        </div>

        {/* Notes + Total + Checkout */}
        <div className="grid grid-cols-2 gap-8 mt-8">
          {/* Note Box */}
          <div>
            <p className="text-sm mb-2 flex items-center gap-1">
              📝 <span className="font-semibold">Add note</span>
            </p>
            <textarea
              className="w-full h-24 border border-[#e6bfae] p-2 text-sm bg-[#fdfaf4] resize-none"
              placeholder="Add note"
            ></textarea>
          </div>

          {/* Summary Section */}
          <div className="flex flex-col items-end space-y-4">
            <p className="text-sm">
              Subtotal: <span className="font-bold text-lg ml-2 text-[#a16a5e]">Rs. 7,700.00</span>
            </p>
            <p className="text-xs">Taxes and shipping calculated at checkout</p>
            <button className="bg-[#f7dbc5] shadow-md text-sm px-6 py-2">CHECK OUT</button>

            <div className="flex gap-2 w-full justify-end">
              <input
                type="text"
                placeholder="Discount code..."
                className="border border-[#e6bfae] px-3 py-2 w-2/3 text-sm"
              />
              <button className="bg-[#f7dbc5] px-4 py-2 text-sm">APPLY</button>
            </div>
          </div>
        </div>

        {/* Continue Shopping Button */}
        <div className="mt-10 text-center">
          <button className="bg-[#f7dbc5] px-8 py-2 text-sm shadow-md">CONTINUE SHOPPING</button>
        </div>
      </div>
    </div>
  );
};

export default Viewcart;
