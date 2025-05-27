import React from "react";
import {
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import logo from "/kaliebaa-01.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#4e4037] text-white text-[14px] font-sans w-full">
      {/* Newsletter Section */}
      <div className="border-b border-[#6f6157] px-4 sm:px-6 py-10 sm:py-12">
        <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-6 text-center md:text-left">
          <div className="leading-snug">
            <h3 className="text-[20px] sm:text-[22px] font-normal font-serif">
              Join Our Newsletter to
            </h3>
            <h3 className="text-[20px] sm:text-[22px] font-normal font-serif">
              Keep Up To Date With Us
            </h3>
          </div>
          <form className="flex flex-col sm:flex-row w-full max-w-md border-b border-white">
            <input
              type="email"
              placeholder="email"
              className="w-full bg-transparent text-white placeholder:text-white text-[14px] px-2 py-2 focus:outline-none"
            />
            <button className="bg-white text-black text-[12px] font-medium px-6 py-2 uppercase tracking-wider mt-2 sm:mt-0 sm:ml-2">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-4 sm:px-6 py-12 text-[#dcdcdc]">
        {/* Logo & Socials */}
        <div>
          <img src={logo} alt="Logo" className="h-[60px] mb-6 mx-auto md:mx-0" />
          <p className="text-[#dcdcdc] text-[16px] leading-[1.8] mt-4 text-center md:text-left">
            Lacus vestibulum sed arcu non odio euismod. Vulputate eu scelerisque
            felis imperdiet proin fermentum.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            {[FaFacebookF, FaXTwitter, FaPinterestP, FaInstagram].map(
              (Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-white text-[#4e4037] rounded-full p-2 w-[36px] h-[36px] flex items-center justify-center text-[16px]"
                >
                  <Icon />
                </a>
              )
            )}
          </div>
        </div>

        {/* Customer Services */}
        <div className="text-center sm:text-left">
          <h4 className="text-[14px] font-bold text-white mb-4 uppercase tracking-wide">
            Customer Services
          </h4>
          <ul className="space-y-3">
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="#">Track Your Orders</a></li>
            <li><a href="#">Book an Appointment</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/shipping">Shipping & Returns</a></li>
          </ul>
        </div>

        {/* Company */}
        <div className="text-center sm:text-left">
          <h4 className="text-[14px] font-bold text-white mb-4 uppercase tracking-wide">
            Company
          </h4>
          <ul className="space-y-3">
            <li><a href="/about">About Us</a></li>
            <li><Link to="/products">Our Products</Link></li>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/refund">Refund & Cancellation Policy</a></li>
          </ul>
        </div>

        {/* Our Resources */}
        <div className="text-center sm:text-left">
          <h4 className="text-[14px] font-bold text-white mb-4 uppercase tracking-wide">
            Our Resources
          </h4>
          <ul className="space-y-3">
            <li><a href="#">Plan & Pricing</a></li>
            <li><a href="#">Client Business</a></li>
            <li><a href="#">Sales & Purchase</a></li>
            <li><a href="#">Product Quality</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#6f6157] text-[#dcdcdc] text-[12px] px-4 sm:px-6 py-4">
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-2">
          <p>© DesignThemes 2023</p>
          <div className="space-x-6">
            <a href="/terms">Terms & Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
