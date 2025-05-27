import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle login logic here
  };

  return (
    <div className="font-sans bg-[#fcfaf5] min-h-screen">
      {/* Header */}
      <div
        className="bg-cover bg-center py-24 text-center"
        style={{ backgroundImage: "url('/background.avif')" }}
      >
        <h1 className="text-3xl sm:text-5xl font-serif text-[#2f2f2f] mb-4">Login</h1>
        <div className="text-sm uppercase text-[#3c2b2e] tracking-widest">
          <span className="mr-2 font-semibold">HOME</span>
          <span className="mx-1">✦</span>
          <span className="font-semibold">LOGIN</span>
        </div>
      </div>

      {/* Login Form */}
      <div className="flex justify-center py-16 px-4">
        <div className="border border-[#d4a373] w-full max-w-lg sm:max-w-5xl px-8 sm:px-18 py-12 sm:py-26 bg-[#fcfaf5]">
          <h2 className="text-center text-3xl sm:text-4xl font-serif text-[#2f2f2f] mb-10">
            Login
          </h2>

          <form onSubmit={handleSubmit}>
            <label
              htmlFor="username"
              className="block text-[#3c2b2e] text-sm sm:text-base mb-1 font-medium"
            >
              Username or email address{" "}
              <span className="text-[#d4a373]">*</span>
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full border-b border-[#d4a373] py-2 mb-6 bg-transparent focus:outline-none"
            />

            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-[#eaf1ff] px-4 py-3 mt-2 mb-6 border-b border-[#d4a373] focus:outline-none"
              placeholder="••••••"
            />

            <div className="mb-6 flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="mr-2 accent-[#d4a373]"
              />
              <label htmlFor="remember" className="text-sm sm:text-base text-[#3c2b2e]">
                Remember me
              </label>
            </div>

            <div className="relative text-center mb-8">
              <button
                type="submit"
                className="bg-[#fbe8d0] hover:bg-[#f5d8b3] w-56 py-3 text-[#2f2f2f] font-medium tracking-wide border border-[#fbe8d0]"
              >
                LOGIN NOW
              </button>
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-56 h-[48px] border border-[#fbe8d0] z-[-1]" />
            </div>
            <div className="flex justify-center gap-8 sm:gap-145 mt-6">
              <a
                href="#"
                className="text-sm sm:text-base font-semibold text-black underline underline-offset-4"
              >
                FORGOT YOUR PASSWORD?
              </a>
              <Link to="/signup" className="text-sm sm:text-base font-semibold text-black underline underline-offset-4">
                SIGN UP
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
