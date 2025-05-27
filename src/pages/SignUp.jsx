import React, { useState } from "react";

const SignUp = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle sign-up logic
  };

  return (
    <div className="font-sans bg-[#f9f7f2]">
      {/* Header with background */}
      <div
        className="bg-cover bg-center py-24 text-center"
        style={{ backgroundImage: "url('/background.avif')" }}
      >
        <h1 className="text-5xl font-serif text-[#2f2f2f] mb-4">
          Create Account
        </h1>
        <div className="text-sm uppercase text-[#3c2b2e] tracking-widest">
          <span className="mr-2 font-semibold">HOME</span>
          <span className="mx-1">✦</span>
          <span className="font-semibold">CREATE ACCOUNT</span>
        </div>
      </div>

      {/* Sign Up Form */}
      <div className="max-w-5xl mx-auto py-16 px-5">
        <div className="border border-[#e2b394] p-12 rounded-md">
          <form onSubmit={handleSubmit}>
            <h2 className="text-3xl font-serif text-[#2f2f2f] mb-6 text-center">
              Sign Up
            </h2>

            <p className="text-center text-sm mb-6 text-[#2f2f2f]">
              Already have an account?{" "}
              <a href="/login" className="underline font-semibold">
                Sign In
              </a>
            </p>

            {/* First Name */}
            <div className="mb-6">
              <label
                htmlFor="firstName"
                className="block text-sm font-semibold text-[#3c2b2e] mb-1"
              >
                First name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                className="w-full border-b border-[#e2b394] bg-transparent focus:outline-none focus:border-[#e2b394] py-2"
                placeholder=""
                required
              />
            </div>

            {/* Last Name */}
            <div className="mb-6">
              <label
                htmlFor="lastName"
                className="block text-sm font-semibold text-[#3c2b2e] mb-1"
              >
                Last name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className="w-full border-b border-[#e2b394] bg-transparent focus:outline-none focus:border-[#e2b394] py-2"
                placeholder=""
                required
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-[#3c2b2e] mb-1"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border-b border-[#e2b394] bg-transparent focus:outline-none focus:border-[#e2b394] py-2"
                placeholder=""
                required
              />
            </div>

            {/* Password */}
            <div className="mb-8">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-[#3c2b2e] mb-1"
              >
                Password *
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full border-b border-[#e2b394] bg-transparent focus:outline-none focus:border-[#e2b394] py-2"
                placeholder=""
                required
              />
            </div>

            {/* Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-8 py-3 bg-[#e2b394] text-[#2f2f2f] font-semibold rounded-md hover:bg-[#d9a57e] transition-colors"
              >
                CREATE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
