import React from "react";
import image1 from "../assets/blog1.avif";
import image2 from "../assets/blog2.avif";
import image3 from "../assets/blog3.avif";
import image4 from "../assets/jwel4.avif";

const articles = [
  {
    image: image1,
    date: "06 September",
    content:
      "Riestas congue quisque egestas diam in arcu cursus euismod quis. Sed cras ornare arcu dui. Molestie nunc non blandit massa...",
  },
  {
    image: image2,
    date: "06 September",
    content:
      "Waestas congue quisque egestas diam in arcu cursus euismod quis. Sed cras ornare arcu dui. Molestie nunc non blandit massa...",
  },
  {
    image: image3,
    date: "06 September",
    content:
      "Waestas congue quisque egestas diam in arcu cursus euismod quis. Sed cras ornare arcu dui. Molestie nunc non blandit massa...",
  },
  {
    image: image4,
    date: "06 September",
    content:
      "Soestas congue quisque egestas diam in arcu cursus euismod quis. Sed cras ornare arcu dui. Molestie nunc non blandit massa...",
  },
];

const JewelryArticles = () => {
  return (
    <section className="bg-[#f7f5f0] py-16 w-full font-sans">
      <div className="w-full text-center px-4 sm:px-6 lg:px-10">
        {/* Main Heading */}
        <h2 className="text-[15px] font-serif text-[#ea9d3f] mb-4">
          NEWS & BLOGS
        </h2>

        {/* Subheading */}
        <h3 className="text-[28px] sm:text-[30px] font-serif text-[#2e2e2e] mb-12">
          Jewelry Articles
        </h3>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition p-4 flex flex-col h-full"
            >
              {/* Image */}
              <img
                src={article.image}
                alt={`Article ${idx + 1}`}
                className="w-full h-60 object-cover rounded mb-4"
              />

              {/* Date */}
              <p className="text-sm text-[#c08c60] font-medium tracking-wider uppercase mb-1">
                {article.date}
              </p>

              {/* Content */}
              <p className="text-[15px] sm:text-[16px] md:text-[17px] text-[#2e2e2e] leading-relaxed flex-grow mb-4">
                {article.content}
              </p>

              {/* Read More */}
              <a
                href="#"
                className="text-sm text-[#2e2e2e] font-semibold uppercase tracking-widest hover:underline"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JewelryArticles;
