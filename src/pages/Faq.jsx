import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FaInstagram as InstaIcon } from "react-icons/fa";

const faqs = [
  {
    question: "How should I clean my jewelry at home?",
    answer:
      "Fusce id blandit blandit finibus eros. Vestibulum eu maximus turpis. Ut enim mas da id scelerisque eu, volutpat id mi.",
  },
  {
    question: "How to store my gold and diamond jewelry?",
    answer:
      "Store jewelry separately in soft pouches or original boxes to prevent scratches and tangling. Keep them in a cool, dry place.",
  },
  {
    question: "How to find my jewelry is real or fake?",
    answer:
      "Look for hallmarks, get a professional appraisal, and consider using a diamond tester or consulting your jeweler.",
  },
  {
    question: "How do I choose the right necklace for party?",
    answer:
      "Match the necklace to your outfit neckline and occasion. Statement pieces work well with simple dresses.",
  },
  {
    question: "How do I choose the right style earrings for my face shape?",
    answer:
      "Round faces suit long earrings, while angular faces work well with hoops or studs.",
  },
  {
    question: "How to get my diamond purity certificate?",
    answer:
      "You can get it from a certified gemologist or your jeweler if the diamond is GIA/IGI certified.",
  },
];

const instagramImages = [
  "/ban15.avif",
  "/pr1.avif",
  "/pr2.avif",
  "/pr3.avif",
  "/pr4.avif",
  "/pr5.avif",
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="font-sans bg-[#f9f7f2]">
      {/* Header */}
      <div
        className="bg-cover bg-center py-34 text-center"
        style={{ backgroundImage: "url('/background.avif')" }}
      >
        <h1 className="text-5xl font-serif text-[#2f2f2f] mb-4">Faq</h1>
        <div className="text-sm uppercase text-[#3c2b2e] tracking-widest">
          <span className="mr-2 font-semibold">HOME</span>
          <span className="mx-1">✦</span>
          <span className="font-semibold">FAQ</span>
        </div>
      </div>

      {/* Main FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 py-26 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left Accordion */}
        <div className="px-6">
          <div className="text-left">
            <span className="font-semibold text-[#d96822] mb-5 block">FAQ</span>
            <h1 className="text-4xl font-serif text-[#2f2f2f] mb-5">
              Frequently Asked Question
            </h1>
            <p className="text-[#6b6b6b] mb-8 text-base">
              Egestas maximus ullamcorper quis vestibulum nibh aptent dignissim
              donec imperdiet. Dui ridiculus dictumst auctor proin vivamus
              efficitur aptent tempus.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border ${
                  activeIndex === index
                    ? "border-[#eab694] bg-[#fcf7f2]"
                    : "border-[#eab694]"
                } transition-all duration-300`}
              >
                <button
                  className={`w-full text-left px-4 py-4 text-[16px] font-medium ${
                    activeIndex === index ? "text-[#e57c59]" : "text-[#2b2b2b]"
                  } flex justify-between items-center`}
                  onClick={() => toggleAccordion(index)}
                >
                  {faq.question}
                  <span
                    className={`transform transition-transform duration-300 text-[#e57c59] text-xl ${
                      activeIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    ❯
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="px-4 pb-1 text-sm text-[#2b2b2b]">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="/image.png"
            alt="faq"
            className="w-[150%] max-w-[900px] h-auto max-h-[500px]"
          />
        </div>
      </div>

      {/* Instagram Image Swiper */}
      <div className="bg-[#f9f7f2] px-1 pb-4 py-2">
      <Swiper
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {instagramImages.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative group overflow-hidden">
                <img
                  src={src}
                  alt={`Instagram ${index + 1}`}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <div className="bg-white p-3 rounded-full">
                    <InstaIcon className="text-xl text-[#2b2b2b]" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Faq;
