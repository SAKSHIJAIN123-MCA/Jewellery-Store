import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";

const Refund = () => {
  return (
    <div className="font-sans bg-[#f9f7f2]">
      {/* Header */}
      <div
        className="bg-cover bg-center py-24 text-center"
        style={{ backgroundImage: "url('/background.avif')" }}
      >
        <h1 className="text-5xl font-serif text-[#2f2f2f] mb-4">Refund & Cancellation Policy</h1>
        <div className="text-sm uppercase text-[#3c2b2e] tracking-widest">
          <span className="mr-2 font-semibold">HOME</span>
          <span className="mx-1">✦</span>
          <span className="font-semibold">Refund & Cancellation Policy</span>
        </div>
      </div>

      {/* Refund & Cancellation Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-serif text-[#2f2f2f] mb-6">
          Refund & Cancellation Details
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

      {/* Refund & Cancellation Policy Section */}
      <div className="max-w-4xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-serif text-[#2f2f2f] mb-6">
          Refund & Cancellation Policy
        </h2>
        <p className="text-[#4a4a4a] mb-4 leading-7">
          At DT-Glamora, customer satisfaction is our top priority. If you are not completely satisfied with your purchase, we’re here to help.
        </p>
        <p className="text-[#4a4a4a] mb-4 leading-7">
          You may cancel your order within 24 hours of placing it. After this window, cancellations may not be possible if the order has already been processed or shipped.
        </p>
        <p className="text-[#4a4a4a] mb-4 leading-7">
          To request a refund or cancel an order, please email us at support@dt-glamora.com with your order number and reason for the request. We will evaluate your request and respond within 1–2 business days.
        </p>
        <p className="text-[#4a4a4a] mb-4 leading-7">
          Please note that customized or personalized items are not eligible for cancellation or refund unless defective or damaged upon arrival.
        </p>
        <p className="text-[#4a4a4a] leading-7">
          DT-Glamora reserves the right to approve or deny cancellation and refund requests based on the condition and timing of the order.
        </p>
      </div>
    </div>
  );
};

export default Refund;
