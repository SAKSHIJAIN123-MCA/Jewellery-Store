import React, { useEffect, useState } from "react";
import jwel3 from "../assets/jwel3.avif";
import jwel4 from "../assets/jwel4.avif";
import jwel5 from "../assets/jwel5.avif";
import blog3 from "../assets/blog3.avif";

const products = [
  {
    image: jwel3,
    title: "Gemstone Pendant Chain",
    price: "From Rs. 4,500.00",
  },
  {
    image: jwel4,
    title: "Eternal Ruby Stud",
    price: "From Rs. 2,500.00",
  },
  {
    image: jwel5,
    title: "Brilliant Stylish Earrings",
    price: "Rs. 1,900.00",
  },
  {
    image: blog3,
    title: "Inspired Round Hooks",
    price: "From Rs. 2,600.00",
  },
];

const Countdown = () => {
  const [time, setTime] = useState({
    days: 1272,
    hours: 8,
    minutes: 16,
    seconds: 42,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap gap-4 sm:gap-6 justify-center md:justify-start mt-4 md:mt-0">
      {["Days", "Hrs", "Mins", "Secs"].map((label, i) => {
        const value = Object.values(time)[i];
        return (
          <div
            key={label}
            className="w-[130px] sm:w-[150px] md:w-[170px] h-[90px] sm:h-[100px] md:h-[110px] border border-[#c77c5b] flex flex-col justify-center items-center"
          >
            <div className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-800">
              {value.toString().padStart(2, "0")}
            </div>
            <div className="text-xs sm:text-sm text-[#c77c5b] mt-2 font-sans">
              {label}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const JewelsCollection = () => {
  return (
    <section className="bg-[#f7f5f0] py-12 px-4 sm:px-6 md:px-8 w-full font-serif">
      <div className="max-w-full mx-auto">
        {/* Heading Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left mb-12 gap-6">
          <div className="mb-8 md:mb-0 px-2">
            <p className="uppercase text-sm text-[#c77c5b] tracking-widest mb-2">
              Stunning Design
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif mb-4 text-gray-800">
              Astonishing Jewels Collection
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto md:mx-0 font-sans text-sm sm:text-base">
              Morbi enim nunc faucibus a pellentesque sit amet porttitor. Justo
              nec ultrices dui sapien eget. Tincidunt arcu non sodales neque
              sodales ut etiam.
            </p>
          </div>
          <Countdown />
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white p-4 hover:shadow-xl transition rounded-md overflow-hidden"
            >
              <div className="w-full h-64 sm:h-72 overflow-hidden mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Hover Buttons */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-300 bg-opacity-70">
                <button className="bg-gray-700 text-white px-4 py-2 text-xs uppercase rounded-md">
                  Add to Cart
                </button>
                <button className="text-gray-600 hover:text-red-500 text-xl">
                  🤍
                </button>
              </div>

              <div className="text-center mt-4">
                <h3 className="uppercase text-sm font-medium tracking-wide text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm font-sans">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JewelsCollection;
