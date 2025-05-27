import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Laser Cut Pendant Chain",
      price: "Rs. 7,000.00",
      image: "/pr4.avif",
    },
    {
      id: 2,
      name: "Eternal Ruby Stud",
      price: "Rs. 3,900.00",
      image: "/pr2.avif",
    },
  ]);

  const handleRemove = (id) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="font-sans bg-[#f9f7f2] min-h-screen">
      {/* Header */}
      <div
        className="bg-cover bg-center py-24 text-center"
        style={{ backgroundImage: "url('/background.avif')" }}
      >
        <h1 className="text-3xl sm:text-5xl font-serif text-[#2f2f2f] mb-4">Wishlist</h1>
        <div className="text-sm uppercase text-[#3c2b2e] tracking-widest">
          <span className="mr-2 font-semibold px-3">HOME</span>
          <span className="mx-1">✦</span>
          <span className="font-semibold">WISHLIST</span>
        </div>
      </div>

      {/* Wishlist Table */}
      <div className="max-w-8xl mx-auto px-4 py-12 overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-[#2f2f2f] text-sm">
          <thead className="bg-[#f0eeeb] uppercase text-[#c2867b]">
            <tr>
              <th className="border border-gray-300 px-4 py-3 text-left">Image</th>
              <th className="border border-gray-300 px-4 py-3 text-left">Product</th>
              <th className="border border-gray-300 px-4 py-3 text-left">Price</th>
              <th className="border border-gray-300 px-4 py-3 text-left">Purchase</th>
              <th className="border border-gray-300 px-4 py-3 text-left">Remove</th>
            </tr>
          </thead>
          <tbody className="bg-[#f9f7f2]">
            {wishlistItems.map((item) => (
              <tr key={item.id} className="text-sm sm:text-base">
                <td className="border border-gray-300 px-4 py-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 sm:w-28 sm:h-28 object-cover mx-auto"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-6 font-semibold text-lg sm:text-xl">
                  {item.name}
                </td>
                <td className="border border-gray-300 px-4 py-6 font-medium">
                  {item.price}
                </td>
                <td className="border border-gray-300 px-4 py-6">
                  <button className="bg-[#f2dcc5] px-6 py-3 font-semibold uppercase text-[#2f2f2f] hover:bg-[#e6cdb8] transition">
                    Select Options
                  </button>
                </td>
                <td className="border border-gray-300 px-4 py-6 text-center">
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-[#2f2f2f] hover:text-red-600"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
            {wishlistItems.length === 0 && (
              <tr>
                <td
                  colSpan="5"
                  className="text-center py-10 text-gray-500 font-medium"
                >
                  Your wishlist is empty.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wishlist;
