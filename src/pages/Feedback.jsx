import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import client1 from "../assets/blog1.avif";
import client2 from "../assets/blog2.avif";
import client3 from "../assets/blog3.avif";

const testimonials = [
  {
    image: client1,
    name: "Aisha Khan",
    role: "Fashion Blogger",
    quote:
      "Tortor dignissim convallis aenean et tortor. Pellentesque diam volutpat commodo sed. Et malesuada fames ac turpis egestas maecenas pharetra. Tincidunt tortor aliquam nulla facilisi. Neque viverra justo nec ultrices dui sapien eget mi proin.",
    rating: 5,
  },
  {
    image: client2,
    name: "Neha Sharma",
    role: "Influencer",
    quote:
      "These jewels add the perfect sparkle to my outfits. I’m beyond impressed. Beautiful craftsmanship and amazing customer service. Highly recommended!",
    rating: 4,
  },
  {
    image: client3,
    name: "Priya Verma",
    role: "Entrepreneur",
    quote:
      "Absolutely in love with the collection. The designs are elegant and perfect for any occasion. Best customer experience I've had!",
    rating: 5,
  },
];

const ClientFeedback = () => {
  return (
    <section className="relative bg-[#e8e5df] py-16 sm:py-20 md:py-24 w-full text-center font-sans overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <p className="uppercase text-xs sm:text-sm tracking-[2px] text-[#c08c60] mb-2">
            Testimonials
          </p>
          <h2 className="text-2xl sm:text-[28px] md:text-[44px] font-serif text-[#2e2e2e] font-light mb-10 px-2">
            Positive Client Feedback
          </h2>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop={true}
            className="px-2 sm:px-4"
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <div className="text-[48px] sm:text-[60px] text-[#e4cdb0] mb-6">“”</div>
                <p className="text-sm sm:text-base md:text-[18px] text-[#2e2e2e] leading-relaxed mb-8 px-2 sm:px-6 md:px-8">
                  {t.quote}
                </p>
                <h3 className="text-base sm:text-[16px] font-semibold text-[#2e2e2e]">{t.name}</h3>
                <p className="text-sm sm:text-[14px] text-gray-500">{t.role}</p>
                <div className="flex justify-center text-[#c08c60] text-sm sm:text-[16px] mt-2">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                  {Array.from({ length: 5 - t.rating }).map((_, i) => (
                    <span key={i} className="text-gray-300">★</span>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Custom CSS to make the arrows smaller */}
      <style jsx>{`
        .swiper-button-next, .swiper-button-prev {
          width: 20px; 
          height: 20px; 
        }

        .swiper-button-next:after, .swiper-button-prev:after {
          font-size: 16px; 
        }
      `}</style>
    </section>
  );
};

export default ClientFeedback;
