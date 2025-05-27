import React from "react";
import { Star } from "lucide-react";

const ReviewStars = ({ rating }) => {
  const totalStars = 5;
  return (
    <div className="flex items-center space-x-1 text-[#c77b52]">
      {Array.from({ length: totalStars }).map((_, index) => (
        <Star
          key={index}
          size={16}
          fill={index < rating ? "#c77b52" : "none"}
          stroke="#c77b52"
        />
      ))}
    </div>
  );
};

const Review = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-[#2f2f2f]">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <h2 className="text-2xl font-serif">Customer Reviews</h2>
      </div>

      {/* Ratings Summary */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        {/* Left - Average Rating */}
        <div className="flex items-center space-x-4 mb-6 md:mb-0">
          <ReviewStars rating={4} />
          <div className="text-sm">
            <div className="font-medium">4.00 out of 5</div>
            <div className="text-[#6b7280]">Based on 1 review ✅</div>
          </div>
        </div>

        {/* Middle - Distribution */}
        <div className="flex flex-col space-y-1 w-full max-w-sm text-sm">
          {[5, 4, 3, 2, 1].map((star, idx) => (
            <div key={star} className="flex items-center space-x-2">
              <div className="flex">
                <ReviewStars rating={star} />
              </div>
              <div className="flex-1 bg-gray-200 h-2 rounded">
                {star === 4 && (
                  <div className="bg-[#c77b52] h-2 rounded w-[80%]"></div>
                )}
              </div>
              <div className="w-4 text-sm text-gray-500">
                {star === 4 ? "1" : "0"}
              </div>
            </div>
          ))}
        </div>

        {/* Right - Button */}
        <button className="bg-[#c77b52] text-white px-6 py-2 rounded uppercase font-semibold text-sm">
          Write a review
        </button>
      </div>

      <hr className="border-t border-gray-200 mb-4" />

      {/* Sorting */}
      <div className="flex justify-between items-center text-sm text-[#c77b52] mb-4">
        <div className="font-medium">Most Recent</div>
        <div className="text-gray-400">09/07/2023</div>
      </div>

      {/* Review Item */}
      <div className="mb-6">
        <ReviewStars rating={4} />
        <div className="flex items-center mt-2 mb-2">
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-2">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0"
              />
            </svg>
          </div>
          <div className="font-medium text-[#c77b52]">Madison</div>
        </div>
        <h3 className="font-bold mb-1">Consequat ac felis donec</h3>
        <p className="text-sm text-gray-700">
          Interdum varius sit amet mattis. Felis imperdiet proin fermentum leo
          vel orci porta non. Pretium fusce id velit ut tortor pretium viverra.
          Dictumst vestibulum rhoncus est pellentesque elit. Ante metus dictum
          at tempor commodo ullamcorper a. Aliquam ut porttitor leo a diam
          sollicitudin. Lectus nulla at volutpat diam ut venenatis.
        </p>
      </div>

      <hr className="border-t border-gray-200" />
    </div>
  );
};

export default Review;
