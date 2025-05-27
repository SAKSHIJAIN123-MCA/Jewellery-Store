import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="font-sans bg-[#f9f7f2]">
      {/* Header */}
      <div
        className="bg-cover bg-center py-24 text-center"
        style={{ backgroundImage: "url('/background.avif')" }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2f2f2f] mb-4">
          Contact
        </h1>
        <div className="text-xs sm:text-sm uppercase text-[#3c2b2e] tracking-widest">
          <span className="mr-2 font-semibold">HOME</span>
          <span className="mx-1">✦</span>
          <span className="font-semibold">CONTACT</span>
        </div>
      </div>

      {/* Main Section */}
      <div className="px-4 sm:px-6 md:px-16 lg:px-32 py-16 grid grid-cols-1 md:grid-cols-[1fr_2px_2fr] gap-8 sm:gap-12">
        {/* Left Side: Contact Info */}
        <div className="text-[#3c2b2e] space-y-8 sm:space-y-10">
          <div>
            <h2 className="text-lg sm:text-xl font-medium text-[#c2867b] mb-1">
              Address
            </h2>
            <p>
              No: 58 A, East Madison Street,
              <br />
              Baltimore, MD, USA 4508
            </p>
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-medium text-[#c2867b] mb-1">
              Phone
            </h2>
            <p>(00) 123 456 789</p>
            <p>1001234 56789</p>
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-medium text-[#c2867b] mb-1">
              Email
            </h2>
            <p>info@example.com</p>
            <p>support@example.com</p>
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-medium text-[#c2867b] mb-1">
              Social
            </h2>
            <div className="flex gap-4 mt-2 text-[#3c2b2e] text-lg">
              {[FaFacebookF, FaXTwitter, FaPinterestP, FaInstagram].map(
                (Icon, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-[#c2867b] hover:bg-[#c2867b] hover:text-white transition-colors"
                  >
                    <Icon />
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Middle Divider */}
        <div className="hidden md:block w-px bg-[#e4c8b3]"></div>

        {/* Right Side: Contact Form */}
        <form className="space-y-6 w-full max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-serif text-[#3c2b2e] mb-6 tracking-wide">
            Tell Us Your Message
          </h2>
          <input
            type="text"
            placeholder="Your Name (required)"
            className="w-full border border-[#d7a98c] py-3 px-4 placeholder:text-[#3c2b2e] bg-transparent"
            required
          />
          <input
            type="email"
            placeholder="Your Email (required)"
            className="w-full border border-[#d7a98c] py-3 px-4 placeholder:text-[#3c2b2e] bg-transparent"
            required
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full border border-[#d7a98c] py-3 px-4 placeholder:text-[#3c2b2e] bg-transparent"
          />
          <textarea
            placeholder="Your Message"
            rows="6"
            className="w-full border border-[#d7a98c] py-3 px-4 placeholder:text-[#3c2b2e] bg-transparent resize-none"
          />
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="save"
              className="accent-[#c2867b] mt-1"
            />
            <label htmlFor="save" className="text-sm text-[#3c2b2e]">
              Save my name, email, and website in this browser.
            </label>
          </div>
          <button
            type="submit"
            className="bg-[#f4dbc4] text-[#3c2b2e] px-8 py-3 uppercase text-sm tracking-wide font-semibold shadow-[inset_-4px_-4px_0_0_rgba(0,0,0,0.05)] hover:bg-[#c2867b] hover:text-white transition-all"
          >
            Send
          </button>
        </form>
      </div>

      {/* Full-Width Google Map */}
      <div className="w-full h-[400px] mt-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28567.28714081964!2d77.97178462289246!3d26.490813771641537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976ad94e5eee875%3A0x129da10596778ea!2sMorena%2C%20Madhya%20Pradesh%20476001!5e0!3m2!1sen!2sin!4v1746429234176!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
