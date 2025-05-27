import React, { useState } from "react";
import jwel1 from "../assets/jwel1.avif";
import jwel2 from "../assets/jwel2.avif";
import jwel3 from "../assets/jwel3.avif";
import jwel4 from "../assets/jwel4.avif";

const collectionData = {
  Diamond: [
    {
      title: "Laser Cut Pendant Chain",
      image: jwel1,
      price: "From Rs. 5,700.00",
      original: "Rs. 8,700.00",
    },
    {
      title: "Eternal Ruby Stud",
      image: jwel2,
      price: "From Rs. 2,500.00",
    },
    {
      title: "Leaf Stud Earring",
      image: jwel3,
      price: "From Rs. 4,100.00",
    },
    {
      title: "Gem Stone Drop Earing",
      image: jwel4,
      price: "From Rs. 2,400.00",
    },
  ],
  "Pearl Earrings": [],
  Bracelets: [],
  Bangles: [],
  Necklaces: [],
};

const tabs = Object.keys(collectionData);

const SparklingCollection = () => {
  const [activeTab, setActiveTab] = useState("Diamond");

  return (
    <section className="bg-[#f7f5f0] py-12 px-4 sm:px-6 lg:px-10 w-full">
      <div className="w-full text-center">
        {/* Headings */}
        <p className="text-sm tracking-wide text-[#d39c8a] uppercase mb-2 py-2">
          Dazzling & Stylish
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4 py-2">
          Sparkling Jewels Collection
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-sm sm:text-base">
          Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in.
          Turpis cursus in hac habitasse. At consectetur lorem donec massa
          molestie ac.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`uppercase text-xs sm:text-sm tracking-wide ${
                activeTab === tab
                  ? "text-[#d39c8a] font-semibold underline underline-offset-4 px-3 sm:px-4"
                  : "text-gray-700 hover:text-[#d39c8a] px-3 sm:px-4"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {collectionData[activeTab].length === 0 ? (
            <p className="col-span-full text-gray-400 italic text-sm">
              No products available in this category.
            </p>
          ) : (
            collectionData[activeTab].map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 shadow-sm hover:shadow-md transition rounded"
              >
                <div className="relative h-60 sm:h-64 md:h-72 mb-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <h3 className="uppercase text-sm font-medium tracking-wide mb-1">
                  {item.title}
                </h3>
                <div className="text-sm text-gray-600">
                  {item.price}{" "}
                  {item.original && (
                    <span className="line-through ml-2 text-gray-400">
                      {item.original}
                    </span>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default SparklingCollection;
