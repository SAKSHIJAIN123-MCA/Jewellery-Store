import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";

const Terms = () => {
  return (
    <div className="font-sans bg-[#f9f7f2]">
      {/* Header */}
      <div
        className="bg-cover bg-center py-24 text-center"
        style={{ backgroundImage: "url('/background.avif')" }}
      >
        <h1 className="text-5xl font-serif text-[#2f2f2f] mb-4">Terms & Conditions</h1>
        <div className="text-sm uppercase text-[#3c2b2e] tracking-widest">
          <span className="mr-2 font-semibold">HOME</span>
          <span className="mx-1">✦</span>
          <span className="font-semibold">TERMS & CONDITIONS</span>
        </div>
      </div>

      {/* Terms Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-serif text-[#2f2f2f] mb-6">
          Terms & Conditions Details
        </h2>
        <p className="text-[#4a4a4a] mb-4 leading-7">
          By accessing or using our website, you agree to comply with and be bound by the following terms and conditions. Please read them carefully. If you do not agree to these terms, you should not use this site.
        </p>
        <p className="text-[#4a4a4a] mb-4 leading-7">
          All content provided on this site is for informational purposes only. We reserve the right to make changes to the content, features, or availability of the website at any time without notice.
        </p>
        <p className="text-[#4a4a4a] mb-4 leading-7">
          Users are responsible for ensuring that any information they provide is accurate and up-to-date. We do not share your personal information with third parties except as outlined in our Privacy Policy.
        </p>
        <p className="text-[#4a4a4a] mb-4 leading-7">
          Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense. Any disputes arising out of such use will be subject to the jurisdiction of the relevant courts.
        </p>
        <p className="text-[#4a4a4a] leading-7">
          Thank you for visiting our website. Your continued use constitutes your acceptance of these terms and any future modifications.
        </p>
      </div>
    </div>
  );
};

export default Terms;
