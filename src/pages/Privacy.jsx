import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";

const Privacy = () => {
  return (
    <div className="font-sans bg-[#f9f7f2]">
      {/* Header */}
      <div
        className="bg-cover bg-center py-24 text-center"
        style={{ backgroundImage: "url('/background.avif')" }}
      >
        <h1 className="text-5xl font-serif text-[#2f2f2f] mb-4">Privacy Policy</h1>
        <div className="text-sm uppercase text-[#3c2b2e] tracking-widest">
          <span className="mr-2 font-semibold">HOME</span>
          <span className="mx-1">✦</span>
          <span className="font-semibold">PRIVACY POLICY</span>
        </div>
      </div>

      {/* Privacy Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-serif text-[#2f2f2f] mb-6">
          Privacy Policy Details
        </h2>
        <p className="text-[#4a4a4a] mb-4 leading-7">
          We value your privacy and are committed to protecting the personal information you share with us. This policy outlines how we collect, use, and safeguard your data when you interact with our website.
        </p>
        <p className="text-[#4a4a4a] mb-4 leading-7">
          We may collect personal details such as your name, email address, and usage behavior through forms, cookies, or other tracking technologies to improve your experience.
        </p>
        <p className="text-[#4a4a4a] mb-4 leading-7">
          Your information is never sold or rented to third parties. It is used strictly for providing services, communicating updates, or responding to your queries. We implement industry-standard security measures to protect your data.
        </p>
        <p className="text-[#4a4a4a] mb-4 leading-7">
          You have the right to request access to, correction of, or deletion of your personal data at any time. Contact details for these requests can be found in our support section.
        </p>
        <p className="text-[#4a4a4a] leading-7">
          By using our site, you consent to our privacy practices as described here. This policy may be updated periodically, and continued use of the site indicates acceptance of the revised terms.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
