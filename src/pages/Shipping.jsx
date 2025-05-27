import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";

const Shipping = () => {
  return (
    <div className="font-sans bg-[#f9f7f2]">
      {/* Header */}
      <div
        className="bg-cover bg-center py-24 text-center"
        style={{ backgroundImage: "url('/background.avif')" }}
      >
        <h1 className="text-5xl font-serif text-[#2f2f2f] mb-4">Shipping & Returns</h1>
        <div className="text-sm uppercase text-[#3c2b2e] tracking-widest">
          <span className="mr-2 font-semibold">HOME</span>
          <span className="mx-1">✦</span>
          <span className="font-semibold">Shipping & Returns</span>
        </div>
      </div>

      {/* Shipping & Returns Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-serif text-[#2f2f2f] mb-6">
          Shipping & Returns Details
        </h2>
        <p className="text-[#4a4a4a] mb-4 leading-7">
          We are committed to delivering your order quickly and efficiently. All orders are processed within 1–3 business days. Delivery times may vary based on your location and the shipping method selected.
        </p>
        <p className="text-[#4a4a4a] mb-4 leading-7">
          Once your order is shipped, you will receive a confirmation email with tracking information. We are not responsible for delays caused by the carrier or circumstances beyond our control.
        </p>
        <p className="text-[#4a4a4a] mb-4 leading-7">
          We offer hassle-free returns within 14 days of delivery. Items must be unused, in original condition, and returned in original packaging. To initiate a return, please contact our support team.
        </p>
        <p className="text-[#4a4a4a] mb-4 leading-7">
          Refunds will be processed back to your original method of payment within 5–7 business days of receiving the returned item. Shipping charges are non-refundable unless the return is due to an error on our part.
        </p>
        <p className="text-[#4a4a4a] leading-7">
          For international shipping and return inquiries, please refer to our International Policy page or get in touch with our customer service team.
        </p>
      </div>
    </div>
  );
};

export default Shipping;
