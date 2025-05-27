import React, { useEffect, useState } from "react";

const allProducts = [
  {
    id: 1,
    name: "Blossom Diamond Pendant",
    price: "From Rs. 5,200.00",
    image: "/ban6.avif",
    tag: "New",
    link: "/blossom",
    countdownDate:
      new Date().getTime() +
      172 * 24 * 60 * 60 * 1000 +
      12 * 60 * 60 * 1000 +
      7 * 60 * 1000,
  },
  {
    id: 2,
    name: "Brilliant Stylish Earrings",
    price: "Rs. 1,900.00",
    image: "/pr2.avif",
    tag: "New",
    link: "/brilliant",

  },
  {
    id: 3,
    name: "Delicate Diamond Ring",
    price: "From Rs. 3,200.00",
    image: "/pr3.avif",
    link: "/delicate",

  },
  {
    id: 4,
    name: "Diamond Grace Ring",
    price: "From Rs. 1,700.00",
    image: "/ban8.avif",
    link: "/diamond",

  },
  {
    id: 5,
    name: "Eternal Ruby Stud",
    price: "From Rs. 2,500.00",
    image: "/ban9.avif",
    link: "/eternal",

  },
  {
    id: 6,
    name: "Fancy Diamond Finger Ring",
    price: "From Rs. 3,200.00",
    image: "/ban14.avif",
    link: "/fancy",

  },
  {
    id: 7,
    name: "Gem Stone Drop Earing",
    price: "From Rs. 2,400.00",
    image: "/ba2.avif",
    link: "/gem",

  },
  {
    id: 8,
    name: "Gemstone Pendant Chain",
    price: "From Rs. 4,500.00",
    image: "/ba3.avif",
    tag: "New",
    link: "/gemstone",
  },
];

const PromoBanner = () => {
  return (
    <div className="mt-10 w-[300px]">
      <div className="h-[650px]">
        <img
          src="/pr4.avif"
          alt="Pearls Jewels"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-[#4a3f38] text-white text-center py-8 px-4">
        <p className="text-sm text-[#d2cfcf]">Antique Luxury</p>
        <h3 className="text-2xl font-serif mt-1 mb-4">Pearls Jewels</h3>
        <button className="bg-white text-black text-sm px-6 py-2 font-semibold hover:bg-[#ddd]">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

const ChevronIcon = ({ open }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`w-4 h-4 transition-transform duration-200 ${
      open ? "rotate-180" : ""
    }`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="#c2867b"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
  </svg>
);

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = getTimeRemaining(targetDate);
      setTimeLeft(remaining);
      if (remaining.total <= 0) clearInterval(timer);
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  function getTimeRemaining(target) {
    const total = target - new Date().getTime();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return { total, days, hours, minutes, seconds };
  }

  const items = [
    { label: "Days", value: timeLeft.days },
    { label: "Hrs", value: timeLeft.hours },
    { label: "Mins", value: timeLeft.minutes },
    { label: "Secs", value: timeLeft.seconds },
  ];

  return (
    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-[#f4f1eb] px-2 py-1">
      <div className="flex gap-[3px]">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center w-[70px] h-[70px] border border-[#d6a77a] bg-white"
          >
            <div className="text-2xl font-serif">
              {String(item.value).padStart(2, "0")}
            </div>
            <div className="text-[#c2867b] text-sm mt-1">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const OurProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [gridCols, setGridCols] = useState(3);
  const currentProducts = allProducts;
  const totalPages = 3;
  const [showAvailability, setShowAvailability] = useState(true);
  const [showProductType, setShowProductType] = useState(true);

  const handleViewChange = (cols) => setGridCols(cols);

  return (
    <div className="font-sans bg-[#f9f7f2]">
      <div
        className="bg-cover bg-center py-24 text-center"
        style={{ backgroundImage: "url('/background.avif')" }}
      >
        <h1 className="text-5xl font-serif text-[#2f2f2f] mb-4">Products</h1>
        <div className="text-sm uppercase text-[#3c2b2e] tracking-widest">
          <span className="mx-2 font-semibold">Home</span>
          <span className="mx-1">✦</span>
          <span className="mx-2 font-semibold">All Collections</span>
          <span className="mx-1">✦</span>
          <span className="mx-2 font-semibold">Products</span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row px-6 md:px-12 lg:px-24 py-16 gap-12">
        <div className="lg:w-1/4 space-y-10 text-[#3c2b2e] text-[15px] leading-relaxed">
          <div>
            <h3
              onClick={() => setShowAvailability(!showAvailability)}
              className="text-[17px] font-medium mb-3 border-l-4 border-[#c2867b] pl-3 py-2 text-[#c2867b] bg-[#f5f3f0] cursor-pointer flex justify-between items-center"
            >
              <span>✦ Availability</span>
              <ChevronIcon open={showAvailability} />
            </h3>
            {showAvailability && (
              <div className="pl-1">
                <label className="block py-1">
                  <input type="checkbox" className="mr-2 align-middle" />
                  In stock <span className="text-sm text-gray-500">(11)</span>
                </label>
                <label className="block py-1">
                  <input type="checkbox" className="mr-2 align-middle" />
                  Out of stock{" "}
                  <span className="text-sm text-gray-500">(12)</span>
                </label>
              </div>
            )}
          </div>

          <div>
            <h3
              onClick={() => setShowProductType(!showProductType)}
              className="text-[17px] font-medium mb-3 border-l-4 border-[#c2867b] pl-3 py-2 text-[#c2867b] bg-[#f5f3f0] cursor-pointer flex justify-between items-center"
            >
              <span>✦ Product type</span>
              <ChevronIcon open={showProductType} />
            </h3>
            {showProductType && (
              <div className="pl-1">
                <label className="block py-1">
                  <input type="checkbox" className="mr-2 align-middle" />
                  Earrings <span className="text-sm text-gray-500">(3)</span>
                </label>
                <label className="block py-1">
                  <input type="checkbox" className="mr-2 align-middle" />
                  Pendant <span className="text-sm text-gray-500">(5)</span>
                </label>
              </div>
            )}
          </div>

          <PromoBanner />
        </div>

        <div className="lg:w-3/4">
          <div className="flex flex-col space-y-8 mb-8">
            <div className="flex justify-between items-center space-x-4">
              <div className="flex items-center ">
                <select className="text-sm border border-orange-300 px-6 py-2 mr-4">
                  <option>Sort by</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Latest</option>
                </select>
                <div className="flex space-x-4">
                  {[
                    { label: "II", cols: 2 },
                    { label: "III", cols: 3 },
                    { label: "IIII", cols: 4 },
                  ].map((view, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleViewChange(view.cols)}
                      className={`px-3 py-1 text-sm w-10 text-center ${
                        gridCols === view.cols
                          ? "bg-[#48413f] text-white"
                          : "bg-[#e4e0dc] text-[#48413f]"
                      }`}
                    >
                      {view.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <img
              src="/Artboard 5Kalibera_[1].png"
              alt="Banner"
              className="w-full h-70 object-cover"
            />
          </div>

          <div
            className={`grid gap-8`}
            style={{
              gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))`,
            }}
          >
            {currentProducts.map((product, index) => (
              <div key={product.id} className="text-center">
                <div className="relative bg-[#f1eee8] p-4">
                  {product.tag && (
                    <span className="absolute top-2 left-2 bg-[#f5e7dd] text-[#c2867b] text-xs px-2 py-1 uppercase">
                      {product.tag}
                    </span>
                  )}
                  <div className="relative w-full h-[300px]">
                    <a href={product.link}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </a>
                    {product.countdownDate && index === 0 && (
                      <CountdownTimer targetDate={product.countdownDate} />
                    )}
                  </div>
                </div>
                <h4 className="mt-4 text-[#2f2f2f] font-medium uppercase tracking-wide">
                  {product.name}
                </h4>
                <p className="text-[#3c2b2e] mt-1">{product.price}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12 space-x-4">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 rounded-full border text-sm font-medium ${
                  currentPage === i + 1
                    ? "bg-[#c2867b] text-white"
                    : "border-[#c2867b] text-[#3c2b2e]"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => {
                if (currentPage < totalPages) setCurrentPage(currentPage + 1);
              }}
              className="w-10 h-10 rounded-full border border-[#c2867b] text-[#3c2b2e] text-lg"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div className="w-full mt-16">
        <div className="grid grid-cols-5 gap-5">
          {[
            "/ban9.avif",
            "/ban10.avif",
            "/ban11.avif",
            "/ban12.avif",
            "/ban13.avif",
          ].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Bottom Banner ${idx + 1}`}
              className="w-full h-[350px] object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
